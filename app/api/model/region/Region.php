<?php

namespace app\api\model\region;

use think\facade\Cache;
use app\common\exception\BaseException;
use app\common\model\settings\Region as RegionModel;
 

/**
 * 用户模型类
 */
class Region extends RegionModel
{
   
    public  function getRegion($data)
    {
        return self::where(['pid' => $data['pid']])->find();
    }
 
    
    /**
     * 收货地址列表
     */
    public  function list($pid)
    {
            $model = new self();
        
		//$list=$this->getAllList();
        $list = $model->withoutGlobalScope()
		->field(['id','shortname'])
		->where('pid', '=', $pid) ->select();
		   
        return $list;
    }
  
  
 
 
   


}
