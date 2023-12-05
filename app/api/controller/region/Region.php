<?php

namespace app\api\controller\region;

use app\api\model\region\Region as RegionModel;
use app\api\controller\Controller;

/**
 * 收货地址控制器
 */
class Region extends Controller
{
    /**
     * 收货地址列表
     */
    public function list($pid)
    {
        
        $model = new RegionModel;
        $list = $model->list($pid);
        return $this->renderSuccess('', [
            'list' => $list,
             
        ]);
    }

   
	  
      

}