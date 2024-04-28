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
	 
    public function index($dataType = 'all')
    {
        // 订单列表
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
	
	public function add($dataType = 'all')
	{
		$param = $this->request->param();
		 
		$incar_time= $param['incar_time'];
		$car_no= $param['car_no'];
		$data['car_no']=$car_no;
		$data['incar_time']=$incar_time." 00:00:00";
		
	     // get请求 拿當天車的訂貨數量
	     if ($this->request->isGet()) {
	          
		
	   		if (isset($car_no) && isset($incar_time) ){ 
			
				$model = new IncarModel();
				
				$detail = $model->getInCarItemCountByCarNoDate($dataType, $data);
			 
	   		 
	   		  
	   		}
			
			//get category. product  ricky 20240212
			    $param['shop_supplier_id']=10001;
				$param['type'] = 'sell';
				//普通分类
				$category = helper::arrayColumn2Key(CategoryModel::getApiALL(0, 0, 10001), 'category_id');
				  
				 // 获取列表数据
				 $model = new ProductModel;
				 foreach ($category as &$c) {
				     $param['category_id'] = $c['category_id'];
				     $c['products'] = helper::arrayColumn2Key($model->getList2($param),'product_id');
					// $c['products'] = $model->getList2($param);
					 
				 } 
			return $this->renderSuccess('', compact('detail','category'));
		}
	} 
			
}