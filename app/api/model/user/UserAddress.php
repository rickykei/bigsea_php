<?php

namespace app\api\model\user;

use app\common\model\user\UserAddress as UserAddressModel;
use app\api\model\supplier\Supplier as SupplierModel;
use app\api\model\user\User as UserModel;
/**
 * 用户收货地址模型
 */
class UserAddress extends UserAddressModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'app_id',
        'create_time',
        'update_time'
    ];

    /**
     * 获取列表
     */
    public function getList($user_id)
    {
        return $this->where('user_id', '=', $user_id)->select();
    }

    /**
     * 获取列表
     */
    public function list($user_id, $shop_supplier_id)
    {
        $supplier = SupplierModel::detail($shop_supplier_id);
        $list = $this->where('user_id', '=', $user_id) 
            ->select();
       
        return $list;
    }
   public function listByRegionId($user_id, $shop_supplier_id,$region_id)
   {
       $supplier = SupplierModel::detail($shop_supplier_id);
       $list = $this->where('region_id', '=', $region_id)
           ->select();
		   $um= new UserModel;
	 
		foreach ($list as $key => &$rec) {
				$data['uid']=$rec['user_id'];
			 
				$cust_data = $um->getUser($data);
				$rec['nickName']=$cust_data['nickName'];
		}
       
       return $list;
   }
   public function listByCustId($user_id, $shop_supplier_id,$cust_id)
   {
       $supplier = SupplierModel::detail($shop_supplier_id);
       $list = $this->where('user_id', '=', $cust_id)
	    ->select();
		
		$um= new UserModel;
			 
		foreach ($list as $key => &$rec) {
				$data['uid']=$rec['user_id'];
			 
				$cust_data = $um->getUser($data);
				$rec['nickName']=$cust_data['nickName'];
		}
       return $list;
   }
   
    /**
     * 新增收货地址
     */
    public function add($user, $data)
    {
        // 添加收货地址
        $this->startTrans();
        try {
            $address_id = $this->insertGetId([
                'name' => $data['name'],
                'phone' => $data['phone'],
                'detail' => $data['detail'],
                'address' => $data['address'],
                'longitude' => $data['longitude'],
                'latitude' => $data['latitude'],
                'user_id' => $user['user_id'],
                'app_id' => self::$app_id
            ]);
            // 设为默认收货地址
            !$user['address_id'] && $user->save(['address_id' => $address_id]);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 编辑收货地址
     */
    public function edit($data)
    {
        // 添加收货地址
        return $this->save([
                'name' => $data['name'],
                'phone' => $data['phone'],
                'detail' => $data['detail'],
                'address' => $data['address'],
                'longitude' => $data['longitude'],
                'latitude' => $data['latitude'],
            ]) !== false;
    }

    /**
     * 设为默认收货地址
     */
    public function setDefault($user)
    {
        // 设为默认地址
        return $user->save(['address_id' => $this['address_id']]);
    }

    /**
     * 删除收货地址
     * @return bool
     * @throws \Exception
     */
    public function remove($user)
    {
        // 查询当前是否为默认地址
        $user['address_id'] == $this['address_id'] && $user->save(['address_id' => 0]);
        return $this->delete();
    }

    /**
     * 收货地址详情
     */
    public static function detail($user_id, $address_id)
    {
		
     //   $where = ['user_id' => $user_id, 'address_id' => $address_id];
	    $where = ['address_id' => $address_id];
        return static::where($where)->find();
    }

}