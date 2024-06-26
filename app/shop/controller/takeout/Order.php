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
     * action : edit order
	 * 
	 * get : get order detail
	 * 
	 * post : post order modified detail
     */
    public function detail($order_id)
    {
		
		// get请求 拿單detail
		if ($this->request->isGet()) {
		     
		
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
			$category = helper::arrayColumn2Key(CategoryModel::getApiALL(0, 0, 10001), 'category_id');
			 
		 
			 // 获取列表数据
			 $model = new ProductModel;
			 foreach ($category as &$c) {
			     $param['category_id'] = $c['category_id'];
			     $c['products'] = helper::arrayColumn2Key($model->getList2($param),'product_id');
				// $c['products'] = $model->getList2($param);
				 
			 } 
			
		//	get category. product  ricky 20240212
		
        return $this->renderSuccess('', compact('detail','category'));
		}
		
		//post请求 post order edit detail
		
		$data = json_decode($this->postData()['params'], true);
		 
		// echo "order_id=".$order_id;
		
		// Get订单信息
		$model = OrderModel::detail($order_id);
		
		//echo "model";
	 
		$data['old_product_list']=$model['product'];
		$data['app_id']=$model['app_id'];
		
		 $data['new_product_list']=$data['product'];
		//print_r($data['old_order']['product'][1]['product_id']);
		//print_r($data['old_order']['product'][1]['product_sku_id']);
		
		//print_r($data['product'][0]['product_id']);
		
		if ($model->orderEdit($data)) {
			
			 return $this->renderSuccess("更新單頭 更新貨件 成功");
		}  
		  
		 
			
		return $this->renderError($model->getError() ?: '更新失败');
    }
	
	 public function pdf()
	  {
	 		
		 if ($this->request->isGet()) {
		      
	 		$param = $this->request->param();
	 		if (isset($param['order_no'])){
	 			
	 		
	 		$order_id=$param['order_no'];
	 		 
	 		// 订单详情
	 		$model = OrderModel::getUserOrderDetail($order_id);
	 		   
	 		
	 		// 请求参数
	 		
			$comp_name[0]='大海貿易有限公司';
	 		$comp_name[1]='GIANT OCEAN TRADING CO. LTD.';
	 		$comp_name[2]='No. 78 Ho Yeung St Tuen Mun Area 40 Landing N.T. HK';
	 		$comp_name[3]='MOBLIE : 9319-7967   TEL: 2787 3593    FAX: 2412 2661';
	 		 
			$title = 'pdf';
	 		
	 		//search order records
	 		//search order itesm
			 $model->setPdf($comp_name,$model);
	 		}
			}
	  }
	  
	  
}