<?php

namespace app\api\controller\order;

use app\api\model\order\Cart as CartModel;
use app\api\model\order\Order as OrderModel;
use app\api\service\order\settled\MasterOrderSettledService;
use app\api\controller\Controller;
use app\api\model\settings\Message as MessageModel;
use app\api\model\user\User as UserModel;

/**
 * 普通订单
 */
class Order extends Controller
{
    /**
     * 订单确认-立即购买
     */
    public function cart()
    {
        // 立即购买：获取订单商品列表
        $params = $this->postData();
        if (empty($params['cart_ids'])) {
            return $this->renderError('商品不能为空');
        }
        $user = $this->getUser();
        
		//ric change user if id =3
		//if (isset($params['cust_id'])&&$user['user_id']==3){
		if (isset($params['cust_id'])&&$user['user_id']==3){
		   
			$user['org_user_id']=$user['user_id'];
			
			$user['user_id']=$params['cust_id'];
			 
		}
		//ric
		if (isset($params['mytableno']))
		$table_no=$params['mytableno'];
		
		// 商品结算信息
		$CartModel = new CartModel();
        // 购物车商品列表
        $productList = $CartModel->getCartList($params, $this->getUser());
        // 实例化订单service
        $orderService = new MasterOrderSettledService($user, $productList, $params);
		
		
		
       //ric use table no field as a car no. 20240109
        $orderInfo = $orderService->settlement();
		if (isset($params['mytableno']))
		$orderInfo['table_no']=$params['mytableno'];
		//ric use table no field as a car no.
		
		//ric get cust_id from address obj
		$um= new UserModel;
		$data['uid']=$orderInfo['address']['user_id'];
		$cust_data = $um->getUser($data);
		$user['nickName']=$cust_data['nickName'];
		//ric get cust_id from address obj
		
        if ($this->request->isGet()) {
            // 如果来源是小程序, 则获取小程序订阅消息id.获取支付成功,发货通知.
            $template_arr = MessageModel::getMessageByNameArr($params['pay_source'], ['order_pay_user', 'order_delivery_user', 'order_refund_user']);
            $balance = $user['balance'];
			$nickName = $user['nickName'];
            return $this->renderSuccess('', compact('orderInfo', 'template_arr', 'balance','nickName'));
        }
        // 订单结算提交
        if ($orderService->hasError()) {
            return $this->renderError($orderService->getError());
        }
        // submit order to db
        $order_id = $orderService->createOrder($orderInfo);
        if (!$order_id) {
            return $this->renderError($orderService->getError() ?: '订单创建失败');
        }
        // 移出购物车中已下单的商品
        $CartModel->clearAll($params['cart_ids']);
        // 返回结算信息
        return $this->renderSuccess('', [
            'order_id' => $order_id,   // 订单id
        ]);
    }

}