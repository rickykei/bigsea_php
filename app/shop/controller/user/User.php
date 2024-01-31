<?php

namespace app\shop\controller\user;

use app\shop\controller\Controller;
use app\shop\model\user\User as UserModel;
use app\shop\model\user\UserAddress as UserAddressModel;
use app\shop\service\SettingService;

/**
 * 用户管理
 */
class User extends Controller
{
    /**
     * 商户列表
     */
    public function index()
    {
        $list = UserModel::getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }


    /**
     * 删除用户
     */
    public function delete($user_id)
    {
        // 用户详情
        $model = UserModel::detail($user_id);
        if ($model && $model->setDelete()) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }


    /**
     * 添加用户
     */
    public function add()
    {
        $model = new UserModel;
        // 新增记录
        if ($model->add($this->request->param())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }
	
	
    /**
     * 添加用户加地址
	 * 20240102 
	 * ricky
     */
    public function addUserAddress()
    { 
		
		// get请求 get regoin base
		if ($this->request->isGet()) {
		    return $this->getBaseData();
		}
		 
		$data = json_decode($this->postData()['params'], true);
		$user = $data['user'];
		$userAddress = $data['address'] ;
		
		if (isset($user)){ 
				
			$model = new UserModel;
			
			//add other parameter for user table
			$user['alipay_id']=0;
			$user['reg_source']=0;
			$user['gender']=0;
			$user['address_id']=0;
			$user['user_type']=1;
			$user['is_delete']=0;
			$user['app_id']=10001;
			
			
			// 新增记录
			if ($model->add($user)) {
				$modelAddress = new UserAddressModel;
				
				//fill other paramter for user.address table
				$userAddress['user_id']=$model->user_id;
				$userAddress['province_id']=0;
				$userAddress['city_id']=0;
				$userAddress['longitude']=114.16586;
				$userAddress['latitude']=22.27518;
				$userAddress['app_id']=10001;
				
				
				// 新增记录
				if ($modelAddress->add($userAddress)) {
					return $this->renderSuccess('添加成功');
				}else{
					return $this->renderError($modelAddress>getError() ?: '添加失败');
				}
				
			   
			}
		}
	    
    }
	
	/** ricky 20240106
	*user.user/add
	*get region base data
	*/
	public function getBaseData()
	{
	    return $this->renderSuccess('', array_merge(SettingService::getEditData(), []));
	}
    /**
     * 用户充值
     */
    public function recharge($user_id, $source)
    {
        // 用户详情
        $model = UserModel::detail($user_id);

        if ($model->recharge($this->store['user']['user_name'], $source, $this->postData('params'))) {
            return $this->renderSuccess('操作成功');
        }
        return $this->renderError($model->getError() ?: '操作失败');
    }

    /**
     * 等级改用户
     */
    public function edit($user_id)
    {
        // 用户详情
        $model = UserModel::detail($user_id);
        // 修改记录
        if ($model->updateGrade($this->postData())) {
            return $this->renderSuccess('修改成功');
        }
        return $this->renderError($model->getError() ?: '修改失败');
    }
 
  /**
     * 改用户+address
     */
  public function editUserAddress($user_id)
  { 
  
  	if ($this->request->isGet()) {
  	    return $this->getEditBaseData($user_id);
  	}
  	  
      
  }
  
  public function getEditBaseData($user_id)
  {
 
		//get user table form.user
		 $user = UserModel::detail($user_id);
		//get user address table form.address
		  
		// get setting region table  form.region
		// get请求 get regoin base
		
      return $this->renderSuccess('', array_merge(SettingService::getEditData(),compact('user')));
  }
}
