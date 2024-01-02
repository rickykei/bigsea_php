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
	

}