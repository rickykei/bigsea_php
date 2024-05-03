<?php

namespace app\shop\controller\takeout;

use app\shop\controller\Controller; 
use app\shop\model\incar\Incar as IncarModel;
use app\shop\model\order\Order as OrderModel;
use app\shop\model\product\Product as ProductModel;
use app\common\library\helper;
use app\shop\model\product\Category as CategoryModel;


/**
 * 订单控制器
 */
class Incar extends Controller
{	 
	 // list page
	 
    public function index($dataType = 'all')
    {
        
			$param = $this->request->param();
       		$car_no = $param['car_no'];
       		$incar_time= $param['incar_time'];
       		$ampm= $param['ampm'];
       		if (isset($car_no) && isset($incar_time) ){ 
  
			$model = new IncarModel();
			$data['car_no']=$car_no;
			$data['incar_time']=$incar_time." ".$ampm;
			$list = $model->getListByCarNoDate($dataType, $data);
			return $this->renderSuccess('', compact('list'));   
       		  
       		}
    } 
	
	// add page
	public function add($dataType = 'all')
	{
		
		
	     // Handle Get Request 求 拿當天  訂貨 by product item. sum qty
	     if ($this->request->isGet()) {
	          $param = $this->request->param();
	           
	          $incar_time= $param['incar_time'];
	          $car_no= $param['car_no'];
	          $data['car_no']=$car_no;
	          $data['incar_time']=$incar_time;
		
	   		if (isset($car_no) && isset($incar_time) ){ 
			
			
				// find last incar record and copy diff records to input form
				$model = new IncarModel();
				$list=$model->findLastIncarRecordId($car_no);
				$incar_id=$list[0]['incar_id'];
				$product2=$model->findDiffByLastIncarId($incar_id);
				foreach ($product2 as &$p2) {
					$tmp[$p2['product_id']]=$p2['p_diff'];
				} 
			
				//$model = new IncarModel();
				//$detail = $model->getInCarItemCountByCarNoDate($dataType, $data);
				
				// find order items by carno & incar_time
				$model = new OrderModel();
				$data['table_no']=$car_no;
				$data['order_type'] = 0;
				$data['create_time']=$incar_time;
				$data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
				$product = $model->getListByCarNoDate($dataType, $data);  
				// copy latest order diff record to remaing columns for new incar order form
				foreach ($product as &$p) {
					if (isset($tmp[$p['product_id']]))
					$p['remaining']=$tmp[$p['product_id']];
				} 
				$detail['car_no']=$car_no;
				$detail['incar_time']=$incar_time;
				$detail['product']=$product;
				
				
				 
	   		}
			
			 
			// prepare product pull down menu
			//get category. product  ricky 20240212
			    $param['shop_supplier_id']=10001;
				$param['type'] = 'sell';
				//普通分类
				$category = helper::arrayColumn2Key(CategoryModel::getApiALL(0, 0, 10001), 'category_id');
				  
				
				 $model = new ProductModel;
				 foreach ($category as &$c) {
				     $param['category_id'] = $c['category_id'];
				     $c['products'] = helper::arrayColumn2Key($model->getList2($param),'product_id');
					// $c['products'] = $model->getList2($param);
					 
				 } 
			return $this->renderSuccess('', compact('detail','category'));
		}else{
		
		
			//post请求 post order edit detail 
			$data = json_decode($this->postData()['params'], true);
			   
			 
		 
			
			$model = new IncarModel();
			 
			 if ($model->add($data)) {
				 return $this->renderSuccess('添加成功');
			 }
		 
			return $this->renderError($model->getError() ?: '添加失败');
		}
		
		
	} 
			
}