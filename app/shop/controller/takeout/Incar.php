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
				
				 
				if (isset($list[0]['incar_id']))
				{
					$incar_id=$list[0]['incar_id'];
					$product2=$model->findDiffByLastIncarId($incar_id);
					foreach ($product2 as &$p2) {
						$tmp[$p2['product_id']]=$p2['p_diff'];
					} 
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
	
	
	//edit page
	 
	public function edit($dataType = 'all')
	{
		
		
	     // Handle Get Request 求 拿當天  訂貨 by product item. sum qty
	     if ($this->request->isGet()) {
	          $param = $this->request->param();
	           
	          $incar_id= $param['incar_id']; 
			  $car_no='';
			  $incar_time='';
			  
	   		if (isset($incar_id)){ 
			 
				 // find  incar.product record  
				 $model = new IncarModel();
				 $product3=$model->getProductListByIncarId($incar_id);
				 if (isset($product3)){
					 
					//$detail['product']=$list;
					 
					foreach ($product3 as &$l1) {
						$incar_time=substr($l1['incar_time'],0,10);
						$car_no=$l1['car_no'];
						$tmp_incar_qty_am[$l1['product_id']]=$l1['incar_qty_am'];
						$tmp_incar_qty_pm[$l1['product_id']]=$l1['incar_qty_pm'];
						$tmp_diff[$l1['product_id']]=$l1['diff'];
					} 
				 }
			 
				$detail['incar_id']=$incar_id;
				$detail['incar_time']=$incar_time;
				$detail['car_no']=$car_no;
				$product="";
				// find last incar record and copy diff records to input form
				// 找出最新的入車單，把diff 欄位，past diff，變為上天入車
				$model2 = new IncarModel();
				$list2=$model2->findLastIncarRecordId($car_no);
				if (isset($list2[0]['incar_id']))
				{
									$incar_id=$list2[0]['incar_id'];
									$product2=$model2->findDiffByLastIncarId($incar_id);
									foreach ($product2 as &$p2) {
										$tmp[$p2['product_id']]=$p2['p_diff'];
										 
									} 
				}
			
				 // find order 量 by carno & incar_time出貨時間
				 $model3 = new OrderModel();
				 $data['table_no']=$detail['car_no'];
				 $data['order_type'] = 0;
				 $data['create_time']=$detail['incar_time'];
				 $data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
				 $product = $model3->getListByCarNoDate($dataType, $data);  
				 
				 // 把 出貨單中有的product ，但不在order 中的產單，加回product Array
			 
				 
				 
				 
				 // fill diff record to product array
				 foreach ($product as &$p) {
					if (isset($tmp[$p['product_id']]))
					$p['remaining']=$tmp[$p['product_id']];
					
					if (isset($tmp_incar_qty_am[$p['product_id']]))
					$p['incar_qty_am']=$tmp_incar_qty_am[$p['product_id']];
					
					if (isset($tmp_incar_qty_pm[$p['product_id']]))
					$p['incar_qty_pm']=$tmp_incar_qty_pm[$p['product_id']];
					
					if (isset($tmp_diff[$p['product_id']]))
					$p['diff']=$p['total_num']-($p['incar_qty_am']+$p['incar_qty_pm']);
					//$p['diff']=$tmp_diff[$p['product_id']];
					//20240506 20:00pm monster advise
					
					
				 } 
				 
				
				 
			     // fill incar_am incar_pm to product array
				 
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
			 
			 if ($model->edit($data)) {
				 return $this->renderSuccess('更改成功');
			 }
		 
			return $this->renderError($model->getError() ?: '更改失败');
		}
		
		
	} 
}