<?php

namespace app\shop\model\incar;

use app\common\model\incar\Incar as IncarModel;
use app\common\service\product\factory\ProductFactory; 
 
use app\shop\model\product\Product as ProductModel;
use app\shop\model\order\Order as OrderModel;
use app\shop\model\incar\IncarProduct as IncarProductModel;

class Incar extends IncarModel
{
	  
	 public function getIncarListByCarNoDate($dataType,$data=null)
	 {
		 $car_no=$data['car_no'];
		 $incar_time=$data['incar_time'];
		 $ampm=$data['ampm'];
	 	$model = $this;
		
		if ($ampm=="09:00"){
			return $model
			->alias('incar')
			->field(['incar.*','ip.product_id as product_id, 
			 ip.incar_qty_am as incar_qty_am, 0 as incar_qty_pm,
			 ip.diff as diff,p.product_unit as product_unit,
			 p.product_name as product_name,p.content as product_content,p.selling_point'])
			->leftjoin('incar_product ip','incar.incar_id = ip.incar_id')
			->leftjoin('product p','ip.product_id = p.product_id')
			//->order(['incar_id' => 'desc'])
			->where('car_no','=', $car_no) 
			->where('incar_time','=', $incar_time) 
			//->where('incar_time', '<=', $data['incar_time'])  
			->select(); 
		}else{
			return $model
			->alias('incar')
			->field(['incar.*','ip.product_id as product_id, 
			 0 as incar_qty_am, ip.incar_qty_pm as incar_qty_pm,
			 ip.diff as diff,p.product_unit as product_unit,
			 p.product_name as product_name,p.content as product_content,p.selling_point'])
			->leftjoin('incar_product ip','incar.incar_id = ip.incar_id')
			->leftjoin('product p','ip.product_id = p.product_id')
			//->order(['incar_id' => 'desc'])
			->where('car_no','=', $car_no) 
			->where('incar_time','=', $incar_time) 
			//->where('incar_time', '<=', $data['incar_time'])  
			->select(); 
		}
	 	
		
	 }	
	 
	public function getProductListByIncarId($incar_id)
	{
		$model = $this;
		return $model
		->alias('incar')
		->field(['incar.*','ip.product_id as product_id,
		 ip.incar_qty_am as incar_qty_am, ip.incar_qty_pm as incar_qty_pm, 
		 ip.diff as diff, p.product_name as product_name,
		 p.category_id as category_id, p.content as product_content, p.product_unit as product_unit
		 '])
		->leftjoin('incar_product ip','incar.incar_id = ip.incar_id')
		->leftjoin('product p','ip.product_id = p.product_id')
		->where('ip.incar_id','=', $incar_id) 
		->order(['p.product_id' => 'desc'])
		//->where('incar_time', '<=', $data['incar_time'])  
		->select(); 
	}	
	
	 
    public function getListByIncarId($incar_id)
	{
		$model = $this;
		return $model->with(['product'])
		->where('incar_id','=',$incar_id)
		->select(); 
	}
	
	public function getListByCarNoDate($dataType, $data = null)
	{
		 
	    $model = $this;
	    // 检索查询条件
	    //$model = $model->setWhere($model, $data);
	    // 获取数据列表
		//return $model->with(['product' => ['image'], 'user'])
	    return $model
		->alias('incar')
		->field(['incar.*'])
		//->leftjoin('incar_product p','incar.incar_id = p.incar_id')
	    ->order(['incar_id' => 'desc'])
		//->where('car_no','=', $data['car_no']) 
		//->where('incar_time', '<=', $data['incar_time'])  
		 ->paginate($data);
	}
	 
	 /* 入車單，prepare input form
	 */
	
	 public function getInCarItemCountByCarNoDate($dataType, $data = null)
	{
		 
	    $model = $this;
	    // 检索查询条件
	    //$model = $model->setWhere($model, $data);
	    // 获取数据列表
		//return $model->with(['product' => ['image'], 'user'])
	    return $model
		->alias('incar')
		->field(['incar.*','p.product_id as product_id, p.product_name as product_name'])
		->leftjoin('incar_product p','incar.incar_id = p.incar_id')
	    ->order(['p.incar_product_id' => 'desc']) 
		->select(); 
	} 
	
	/**
	 * 入車單, submit request
	 */
	public function add($data)
	{
	    if (!isset($data['car_no']) || empty($data['incar_time'])) {
	        $this->error = '請填車號及時間';
	        return false;
	    }
	  
	    $data['app_id'] = self::$app_id;
	    // 开启事务
	    $this->startTrans();
	    try {
	        // add incar order
	        $this->save($data);
			 
			
	        // add incar 商品
	       // $this->product()->saveAll($data['product']);
		    $model = new IncarProductModel;
	        $model->addProductList($this->incar_id, $data['product']);
		  
	        $this->commit();
	        return true;
	    } catch (\Exception $e) {
	        $this->error = $e->getMessage();
	        $this->rollback();
	        return false;
	    }
	}
	
	/**
	 * 入車單, edit request
	 */
	public function edit($data)
	{
	    if (!isset($data['incar_id']) || !isset($data['car_no']) || empty($data['incar_time'])) {
	        $this->error = '請填車號,入車單號及入車時間';
	        return false;
	    }
	  
	    $incar_id=$data['incar_id'];
		$data['app_id'] = self::$app_id;
	    // 开启事务
	    $this->startTrans();
	    try {
			
	        // edit incar order , update updatetime
			$model=$this->where('incar_id',$data['incar_id'])->find();
			$model->update_time=time();
	        $model->save();
			  
			  
			// del incar.product record by incar_id
			  IncarProductModel::where('incar_id','=',$incar_id)->delete();
			  
	        // add back latest incar order . product
			  
			  $model = new IncarProductModel;
			  $model->addProductList($data['incar_id'], $data['product']);
			
	       
	        $this->commit();
	        return true;
	    } catch (\Exception $e) {
	        $this->error = $e->getMessage();
	        $this->rollback();
	        return false;
	    }
	}
	
	public function findLastIncarRecordId($car_no) 
	{
		$model = $this;
		 
		return $model
		->alias('incar')
		->field(['incar.*'])
		->order(['incar.incar_time' => 'desc']) 
		->where('car_no', '=', $car_no)
		->limit('1')
		->select(); 
		 
	}
	
	public function findLastIncarRecordIdIgnoreCurrId($car_no,$incar_id)
	{
		$model = $this;
		 
		return $model
		->alias('incar')
		->field(['incar.*'])
		->order(['incar.incar_time' => 'desc']) 
		->where('car_no', '=', $car_no)
		->where('incar_id', '<', $incar_id)
		->limit('1')
		->select(); 
		 
	}
	
	public function findLastIncarRecordIdGroupByCarNo()
	{
		$model = $this;
		 
		return $model
		->alias('incar')
		->field(['car_no , max(incar_id) as incar_id'])
		->group("car_no")
		->select(); 
		 
	}
	
	public function findDiffByLastIncarId($lastIncarRecordId)
	{
		$model = $this;
		  
		return $model
		->alias('incar')
		->field(['incar.*','ip.product_id as product_id,  op.product_name as product_name,
		 op.category_id as category_id, op.content as product_content, op.product_unit as product_unit, ip.diff as p_diff'])
		->leftjoin('incar_product ip','incar.incar_id = ip.incar_id')
		->leftjoin('product op','ip.product_id = op.product_id')
		->where('incar.incar_id','=',$lastIncarRecordId)
		->group("ip.product_id")
		->order(['ip.incar_product_id' => 'desc']) 
		->select(); 
	}
}