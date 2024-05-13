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
	          $detail['car_no']=$car_no;
	          $detail['incar_time']=$incar_time;
		
	   		if (isset($car_no) && isset($incar_time) ){ 
			
			
				// find last incar record and copy diff records to input form
				$model2 = new IncarModel();
				$list=$model2->findLastIncarRecordId($car_no);
				
				 
				if (isset($list[0]['incar_id']))
				{
					$incar_id=$list[0]['incar_id'];
					$product2=$model2->findDiffByLastIncarId($incar_id);
					foreach ($product2 as &$p2) {
						 $tmp_remaining[$p2['product_id']]=$p2['p_diff'];
						 
						  $tmp_product_name[$p2['product_id']]=$p2['product_name'];
						  $tmp_product_unit[$p2['product_id']]=$p2['product_unit'];
						  $tmp_category_id[$p2['product_id']]=$p2['category_id'];
						  $tmp_diff[$p2['product_id']]=$p2['p_diff'];
						  
						  if ($p2['p_diff']>0)
							$tmp_product_id[$p2['product_id']]=$p2['product_id'];
					} 
				}
				//$model = new IncarModel();
				//$detail = $model->getInCarItemCountByCarNoDate($dataType, $data);
				
					// find order 量 by carno & incar_time出貨時間
					$model3 = new OrderModel();
					$data['table_no']=$detail['car_no'];
					$data['order_type'] = 0;
					$data['create_time']=$detail['incar_time'];
					$data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
					$product_final=[];
					
					$product = $model3->getListByCarNoDate($dataType, $data);  
					 
					// fill diff record to product array
					foreach ($product as &$p) {
										if (isset($tmp_product_id[$p['product_id']])){
											$p['remaining']=$tmp_remaining[$p['product_id']];
											// remove array tmp_product_id 
											// it is because incar.product include on order.product
										}
										 
										//if (isset($tmp_diff[$p['product_id']]))
											$p['diff']=$p['remaining']-$p['total_num'];
										//$p['diff']=$tmp_diff[$p['product_id']];
										//20240506 20:00pm monster advise
										if (isset($tmp_product_id[$p['product_id']])){
											if ($tmp_product_id[$p['product_id']]==$p['product_id'])
												unset($tmp_product_id[$p['product_id']]);
										}
										
										//save product_id =2 records
										if ($p['product_id']==2){
											$product_2['remaining']=$p['remaining'];
											$product_2['total_num']=$p['total_num'];
											$product_2['diff']=$p['diff'];  
										}else{
											
										//copy order item to final product array except product_id=2
											$product_final[]=array(
											 'product_id' => $p['product_id'],
											 'product_name' => $p['product_name'],
											 'remaining' => $p['remaining'],
											 'incar_qty_am' =>  0,
											 'incar_qty_pm' =>  0,
											 'diff'=> $p['diff'],
											 'total_num'=> $p['total_num'],
											 'category_id' => $p['category_id'],
											 'product_unit' => $p['product_unit']
											 );
										}	
											
								 	
					} 
					
					//copy back id 2 -> id1
					if (isset($product_2))
					foreach ($product_final as &$p) {
						if ($p['product_id']==1){
							$p['remaining']+=$product_2['remaining'];
							$p['total_num']+=$product_2['total_num'];
							$p['diff']+=$product_2['diff'];  
						}
						
					}
				
					// 把 上車單中有的product ，但不在order 中的產品，加回product Array
					if (isset($tmp_product_id)){
					foreach($tmp_product_id as $tpi => $val){
						
						if (!isset($tmp_remaining[$val]))
						$tmp_remaining[$val]=0;
						
						$product_final[]=array(
						 'product_id' => $tmp_product_id[$val],
						 'product_name' => $tmp_product_name[$val],
						 'remaining' => $tmp_remaining[$val],
						 'incar_qty_am' =>  0,
						 'incar_qty_pm' =>  0,
						 'diff'=> $tmp_diff[$val],
						 'total_num'=> 0,
						 'category_id' => $tmp_category_id[$val],
						 'product_unit' => $tmp_product_unit[$val]
						 );
					}
					}
					
					 
					 // fill incar_am incar_pm to product array
					 
					 $detail['product']=$product_final;
				 
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
			 
				 // find  incar.product records by incar_id  
				 $model = new IncarModel();
				 $product3=$model->getProductListByIncarId($incar_id);
				 if (isset($product3)){
					 
					//$detail['product']=$list;
					 
					foreach ($product3 as &$l1) {
						$incar_time=substr($l1['incar_time'],0,10);
						$car_no=$l1['car_no'];
						
						// 把INCAR.PRODRUCT 的資料放到tmp_ ARRAY
						$tmp_incar_qty_am[$l1['product_id']]=$l1['incar_qty_am'];
						$tmp_incar_qty_pm[$l1['product_id']]=$l1['incar_qty_pm'];
						$tmp_diff[$l1['product_id']]=$l1['diff'];
						$tmp_product_name[$l1['product_id']]=$l1['product_name'];
						$tmp_product_unit[$l1['product_id']]=$l1['product_unit'];
						$tmp_category_id[$l1['product_id']]=$l1['category_id'];
						$tmp_product_id[$l1['product_id']]=$l1['product_id']; 
						
					} 
				 }
			 
				$detail['incar_id']=$incar_id;
				$detail['incar_time']=$incar_time;
				$detail['car_no']=$car_no;
				$product="";
				
				// find last incar record and copy diff records to input form
				// 找出最新的入車單，把diff 欄位，past diff，變為上天入車
				$model2 = new IncarModel();
				$list2=$model2->findLastIncarRecordIdIgnoreCurrId($car_no,$incar_id);
				if (isset($list2[0]['incar_id']))
				{
									$incar_id=$list2[0]['incar_id'];
									$product2=$model2->findDiffByLastIncarId($incar_id);
									foreach ($product2 as &$p2) {
										 $tmp_remaining[$p2['product_id']]=$p2['p_diff'];
									 
									} 
				}
			
				 // find order 量 by carno & incar_time出貨時間
				 $model3 = new OrderModel();
				 $data['table_no']=$detail['car_no'];
				 $data['order_type'] = 0;
				 $data['create_time']=$detail['incar_time'];
				 $data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
				 $product_final=[];
				 $product = $model3->getListByCarNoDate($dataType, $data);  
				  
				 // fill diff record to product array
				 foreach ($product as &$p) {
					if (isset($tmp_remaining[$p['product_id']])){
						$p['remaining']=$tmp_remaining[$p['product_id']];
						// remove array tmp_product_id 
						// it is because incar.product include on order.product
						
					}
					
					if (isset($tmp_incar_qty_am[$p['product_id']]))
					$p['incar_qty_am']=$tmp_incar_qty_am[$p['product_id']];
					
					if (isset($tmp_incar_qty_pm[$p['product_id']]))
					$p['incar_qty_pm']=$tmp_incar_qty_pm[$p['product_id']];
					
					if (isset($tmp_diff[$p['product_id']]))
					$p['diff']=($p['remaining']+$p['incar_qty_am']+$p['incar_qty_pm'])-$p['total_num'];
					//$p['diff']=$tmp_diff[$p['product_id']];
					//20240506 20:00pm monster advise
					
					
						
						//save product_id =2 records 
						if ($p['product_id']==2){
							$product_2['remaining']=$p['remaining'];
							$product_2['total_num']=$p['total_num'];
							$product_2['diff']=$p['diff'];  
							$product_2['incar_qty_am']=$p['incar_qty_am'];
							$product_2['incar_qty_pm']=$p['incar_qty_pm'];
							
						}else{
							//copy order item to final product array except product_id=2
								$product_final[]=array(
								 'product_id' => $p['product_id'],
								 'product_name' => $p['product_name'],
								 'remaining' => $p['remaining'],
								 'incar_qty_am' =>  $p['incar_qty_am'],
								 'incar_qty_pm' =>  $p['incar_qty_pm'],
								 'diff'=> $p['diff'],
								 'total_num'=> $p['total_num'],
								 'category_id' => $p['category_id'],
								 'product_unit' => $p['product_unit']
								 );
							
						}
						
					//elimiate	incar.product array record which under the order.product array too
					if (isset($tmp_product_id[$p['product_id']])){
						if ($p['product_id']==$tmp_product_id[$p['product_id']])
						unset($tmp_product_id[$p['product_id']]);
					}
						
					
				 } 
				
				
				//copy back id 2 -> id1
				if (isset($product_2))
				foreach ($product_final as &$p) {
					if ($p['product_id']==1){
						$p['remaining']+=$product_2['remaining'];
						$p['total_num']+=$product_2['total_num'];
						$p['diff']+=$product_2['diff'];  
						$p['incar_qty_am']+=$product_2['incar_qty_am'];
						$p['incar_qty_pm']+=$product_2['incar_qty_pm'];
					}
					
				}
				  
				  
				// 把 上車單中有的product ，但不在order 中的產品，加回product Array
				if (isset($tmp_product_id)){
                foreach($tmp_product_id as $tpi => $val){
					
					if (!isset($tmp_remaining[$val]))
					$tmp_remaining[$val]=0; 
					
					$product_final[]=array(
					 'product_id' => $tmp_product_id[$val],
					 'product_name' => $tmp_product_name[$val],
					 'remaining' => $tmp_remaining[$val],
					 'incar_qty_am' =>  $tmp_incar_qty_am[$val],
					 'incar_qty_pm' =>  $tmp_incar_qty_pm[$val],
					 'diff'=> $tmp_remaining[$val]+$tmp_incar_qty_am[$val]+ $tmp_incar_qty_pm[$val],
					 'total_num'=> 0,
					 'category_id' => $tmp_category_id[$val],
					 'product_unit' => $tmp_product_unit[$val]
					 );
				}}
				
				
				 
			     // fill incar_am incar_pm to product array
				 
				 $detail['product']=$product_final;
			   
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