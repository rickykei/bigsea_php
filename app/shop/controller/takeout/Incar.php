<?php

namespace app\shop\controller\takeout;

use app\shop\controller\Controller; 
use app\shop\model\incar\Incar as IncarModel;

/**
 * 订单控制器
 */
class Incar extends Controller
{	
     
	
	/**
     * 订单列表
     */
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
       		
       
       		//search order records
       		//search order itesm
       		  
       		}
    } 
		
}