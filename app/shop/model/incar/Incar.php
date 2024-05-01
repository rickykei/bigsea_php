<?php

namespace app\shop\model\incar;

use app\common\model\incar\Incar as IncarModel;
use app\common\service\product\factory\ProductFactory; 
use app\shop\model\incar\IncarProduct as IncarProductModel;
use app\shop\model\product\Product as ProductModel;
use app\shop\model\order\Order as OrderModel;

class Incar extends IncarModel
{
	
	public function getListByCarNoDate($dataType, $data = null)
	{
		 
	    $model = $this;
	    // 检索查询条件
	    //$model = $model->setWhere($model, $data);
	    // 获取数据列表
		//return $model->with(['product' => ['image'], 'user'])
	    return $model
		->alias('incar')
		->field(['incar.*','p.product_id as product_id, p.product_name as product_name'])
		->leftjoin('incar_product p','incar.id = p.incar_id')
	    ->order(['p.id' => 'desc'])
		//->where('car_no','=', $data['car_no']) 
		//->where('incar_time', '<=', $data['incar_time'])  
		->select(); 
	}
	 
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
		->leftjoin('incar_product p','incar.id = p.incar_id')
	    ->order(['p.id' => 'desc']) 
		->select(); 
	} 
	
	/**
	 * 添加商品
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
	        $this->addProduct($data);
	      
	        $this->commit();
	        return true;
	    } catch (\Exception $e) {
	        $this->error = $e->getMessage();
	        $this->rollback();
	        return false;
	    }
	}
	
	private function addProduct($data)
	{
	    // 更新模式: 先删除所有规格
	    $model = new IncarProductModel;
	    $stock = 0;//总库存
	    $product_price = 0;//价格
	    $cost_price = 0;
	    $bag_price = 0;
	    $incarproduct=$data['product'];
	    $model>save($incarproduct);
	}
}