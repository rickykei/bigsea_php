<?php

namespace app\shop\model\incar;

use app\common\model\incar\Incar as IncarModel;
use app\common\service\product\factory\ProductFactory; 
use app\shop\model\incar\IncarProduct as IncarProductModel;
use app\shop\model\product\Product as ProductModel;

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
}