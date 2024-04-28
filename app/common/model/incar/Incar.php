<?php

namespace app\common\model\incar;

 
use app\common\model\BaseModel; 
use app\common\library\helper;
 

/**
 * 订单模型模型
 */
class Incar extends BaseModel
{
    protected $pk = 'id';
    protected $name = 'incar';

    /**
     * 追加字段
     * @var string[]
     */
  

    /**
     * 订单商品列表
     */
    public function product()
    {
        return $this->hasMany('app\\common\\model\\incar\\IncarProduct', 'incar_id', 'incar_id')->hidden(['content']);
    }

  
    public function addOrder($deliver)
    {
        $this->sendLocal($this);
    }
  

    /**
     * 订单详情
     * @param $where
     * @param string[] $with
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function detail($where, $with = ['product' => ['image']])
    {
        is_array($where) ? $filter = $where : $filter['id'] = (int)$where;
        return self::with($with)->where($filter)->find();
    }

 
 
  
   
 

}