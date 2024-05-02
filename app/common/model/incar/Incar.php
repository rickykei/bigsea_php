<?php

namespace app\common\model\incar;

 
use app\common\model\BaseModel; 
use app\common\library\helper;
use app\common\model\incar\IncarProduct;
 

/**
 * 订单模型模型
 */
class Incar extends BaseModel
{
    protected $pk = 'incar_id';
    protected $name = 'incar';

    
    /**
     * 订单商品列表
     */
    public function product()
    {
        return $this->hasMany('app\\common\\model\\incar\\IncarProduct')->order(['incar_product_id' => 'asc']);
    
    }

   
   
 

}