<?php

namespace app\shop\controller\takeout;

use app\shop\controller\Controller;
use app\shop\model\order\Order as OrderModel;
use app\common\enum\settings\DeliveryTypeEnum;
use app\common\model\settings\Setting as SettingModel;
use app\shop\model\product\Category as CategoryModel;
use app\shop\model\product\Product as ProductModel;
use app\common\library\helper;

/**
 * 订单控制器
 */
class Order extends Controller
{
    /**
     * 订单列表
     */
    public function index($dataType = 'all')
    {
        // 订单列表
        $model = new OrderModel();
        $data = $this->postData();
        $data['order_type'] = 0;
        $data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
        $list = $model->getList($dataType, $data);
        $order_count = [
            'order_count' => [
                'all' => $model->getCount('all', $data),
                'payment' => $model->getCount('payment', $data),
                'process' => $model->getCount('process', $data),
                'complete' => $model->getCount('complete', $data),
                'cancel' => $model->getCount('cancel', $data),
            ],];
        $ex_style = DeliveryTypeEnum::deliver();
        //配送方式
        $deliver = SettingModel::getSupplierItem('deliver', $this->store['user']['shop_supplier_id']);
        $deliver_name = $deliver['engine'][$deliver['default']]['name'];
        return $this->renderSuccess('', compact('list', 'ex_style', 'order_count', 'deliver_name', 'deliver'));
    }

    /**
     * 订单详情
     */
    public function detail($order_id)
    {
        // 订单详情
        $detail = OrderModel::detail($order_id);
        if (isset($detail['pay_time']) && $detail['pay_time'] > 0) {
            $detail['pay_time'] = date('Y-m-d H:i:s', $detail['pay_time']);
        }
        if (isset($detail['delivery_time']) && $detail['delivery_time'] != '') {
            $detail['delivery_time'] = date('Y-m-d H:i:s', $detail['delivery_time']);
        }
		
		//get category. product  ricky 20240212
		    $param['shop_supplier_id']=10001;
			$param['type'] = 'sell';
			//普通分类
			$commonList = helper::arrayColumn2Key(CategoryModel::getApiALL(0, 0, 10001), 'category_id');
			 
		 
			 // 获取列表数据
			 $model = new ProductModel;
			 foreach ($commonList as &$c) {
			     $param['category_id'] = $c['category_id'];
			     $c['products'] = helper::arrayColumn2Key($model->getList2($param),'product_id');
			 }
			 
			  
			 $category = $commonList;
		//	get category. product  ricky 20240212
		
        return $this->renderSuccess('', compact('detail','category'));
    }
	
	 
}