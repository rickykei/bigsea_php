<?php

namespace app\shop\controller\setting;
 
use app\shop\controller\Controller;
use app\shop\model\settings\Setting as SettingModel;
use app\shop\service\SettingService;
 
/**
 * 系统设置模型
 */
class Region extends Controller
{
	 public function index()
	 {
		  
	 }
	 
  public function add($scene = 'add')
  {
      // get请求
      if ($this->request->isGet()) {
          return $this->getBaseData();
      }
     
  }
    
    public function getBaseData()
    {
        return $this->renderSuccess('', array_merge(SettingService::getEditData(), []));
    }
}
