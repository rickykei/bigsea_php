<?php

namespace app\shop\service;
 
use app\shop\model\settings\Region as RegionModel;
 
 
class SettingService  
{
     
    public static function getEditData()
    {
         
        $region = RegionModel::getCacheTree();
        
        return compact('region');
    }
}