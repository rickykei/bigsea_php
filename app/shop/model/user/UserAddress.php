<?php

namespace app\shop\model\user;

use app\common\model\user\UserAddress as UserAddressModel;
 
/**
 * 用户地址模型
 */
class UserAddress extends UserAddressModel
{
	 /**
	  * 添加UserAddress
	  */
	public function add($data)
	{
	    return $this->save($data);
	}
	
	public function edit($data)
	{
		$data['create_time'] = strtotime($data['create_time']);
		$data['update_time'] = time();
	    return $this->save($data);
	}
	/**
	 * 获取用户信息
	 */
	public static function detail($where)
	{
	    $model = new static;
	   
	    if (is_array($where)) {
	        $filter = array_merge($filter, $where);
	    } else {
	        $filter['address_id'] = (int)$where;
	    }
	    return $model->where($filter)->find();
	}

}