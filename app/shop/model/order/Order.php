<?php

namespace app\shop\model\order;

use app\common\model\order\Order as OrderModel;
use app\common\enum\order\OrderTypeEnum;
use app\common\service\message\MessageService;
use app\common\service\order\OrderRefundService;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\service\product\factory\ProductFactory;
use app\shop\service\order\ExportService;
use app\common\model\settings\Setting as SettingModel;
use app\common\service\order\OrderCompleteService;
use app\shop\model\order\OrderProduct as OrderProductModel;
use app\shop\model\product\Product as ProductModel;

/**
 * 订单模型
 */
class Order extends OrderModel
{
	
	public function getListByCarNoDate($dataType, $data = null)
	{
		 
	    $model = $this;
	    // 检索查询条件
	    //$model = $model->setWhere($model, $data);
	    // 获取数据列表
		//return $model->with(['product' => ['image'], 'user'])
	    return $model
		->alias('order')
		->field(['order.*','sum(p.total_num) as total_num ,p.product_id as product_id, p.product_name as product_name,
		  p.category_id as category_id, content as product_content, p.product_unit as product_unit, 0 as incar_qty_pm,
			0 as incar_qty_am, 0 as diff, 0 as remaining'])
		->leftjoin('order_product p','order.order_id = p.order_id')
	    ->order(['p.product_id' => 'desc'])
		->where('table_no','=', $data['table_no'])
		->where('mealtime', '>=', $data['create_time'] .' 00:00:00') 
		->where('mealtime', '<=', $data['create_time'] .' 23:59:59') 
		//->where('mealtime', '<=', date("Y-m-d H:i:s")) 
		//->where('mealtime', '<=', $data['create_time']) 
		->where('order_status', '=','10') 
		->where('pay_status', '=','10')  
		->group("p.product_id")
		->select();
			
			 
	}
	
	
 
	
    /**
     * 订单列表
     */
    public function getList($dataType, $data = null)
    {
        $model = $this;
        // 检索查询条件
        $model = $model->setWhere($model, $data);
        // 获取数据列表
        return $model->with(['product' => ['image'], 'user', 'supplier'])
            ->order(['create_time' => 'desc'])
            ->where($this->transferDataType($dataType))
            ->paginate($data);
    }

    /**
     * 获取订单总数
     */
    public function getCount($type, $data)
    {
        $model = $this;
        // 检索查询条件
        $model = $model->setWhere($model, $data);
        // 获取数据列表
        return $model->alias('order')
            ->where($this->transferDataType($type))
            ->count();
    }

    /**
     * 订单列表(全部)
     */
    public function getListAll($dataType, $query = [])
    {
        $model = $this;
        // 检索查询条件
        $model = $model->setWhere($model, $query);
        // 获取数据列表
        return $model->with(['product.image', 'address', 'user', 'extract'])
            ->alias('order')
            ->field('order.*')
            ->where($this->transferDataType($dataType))
            ->where('order.is_delete', '=', 0)
            ->order(['order.create_time' => 'desc'])
            ->select();
    }

    /**
     * 订单导出
     */
    public function exportList($dataType, $query)
    {
        // 获取订单列表
        $list = $this->getListAll($dataType, $query);
        // 导出excel文件
        return (new Exportservice)->orderList($list);
    }

    /**
     * 设置检索查询条件
     */
    private function setWhere($model, $data)
    {
        //搜索订单号
        if (isset($data['order_no']) && $data['order_no'] != '') {
            $model = $model->where('order_no', 'like', '%' . trim($data['order_no']) . '%');
        }
        //搜索配送方式
        if (isset($data['style_id']) && $data['style_id'] != '') {
            $model = $model->where('delivery_type', '=', $data['style_id']);
        }
        //搜索配送方式
        if (isset($data['order_type'])) {
            $model = $model->where('order_type', '=', $data['order_type']);
        }
        //搜索配送方式
        if (isset($data['shop_supplier_id']) && $data['shop_supplier_id']) {
            $model = $model->where('shop_supplier_id', '=', $data['shop_supplier_id']);
        }
        //搜索时间段
        if (isset($data['create_time']) && $data['create_time'] != '') {
            $model = $model->where('create_time', 'between', [strtotime($data['create_time'][0]), strtotime($data['create_time'][1]) + 86399]);
        }
        return $model;
    }

    /**
     * 转义数据类型条件
     */
    private function transferDataType($dataType)
    {
        $filter = [];
        // 订单数据类型
        switch ($dataType) {
            case 'all':
                break;
            case 'payment';
                $filter['pay_status'] = OrderPayStatusEnum::PENDING;
                $filter['order_status'] = 10;
                break;
            case 'process';
                $filter['pay_status'] = OrderPayStatusEnum::SUCCESS;
//                $filter['delivery_status'] = 10;
                $filter['order_status'] = 10;
                break;
            case 'complete';
                $filter['pay_status'] = OrderPayStatusEnum::SUCCESS;
                $filter['order_status'] = 30;
                break;
            case 'cancel';
//                $filter['pay_status'] = OrderPayStatusEnum::SUCCESS;
                $filter['order_status'] = 20;
                break;
        }
        return $filter;
    }

    /**
     * 发送订单
     * @return bool
     */
    public function sendOrder($order_id)
    {
        $deliver = SettingModel::getSupplierItem('deliver', $this['supplier']['shop_supplier_id']);
        if ($this['order_status']['value'] != 10 || $this['deliver_status'] != 0) {
            $this->error = '订单已发送或已完成';
            return false;
        }
        // 开启事务
        $this->startTrans();
        try {
            $this->addOrder($deliver);
            // 实例化消息通知服务类
            $Service = new MessageService;
            // 发送消息通知
            $Service->delivery($this, OrderTypeEnum::MASTER);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 取消订单
     */
    public function orderCancel($data)
    {
        // 判断订单是否有效
        if ($this['delivery_status']['value'] == 20 || $this['order_status']['value'] != 10 || $this['pay_status']['value'] != 20) {
            $this->error = "订单不允许取消";
            return false;
        }
        // 订单取消事件
        return $this->transaction(function () use ($data) {
            // 执行退款操作
            $this['pay_type']['value'] < 40 && (new OrderRefundService)->execute($this);
            // 回退商品库存
            ProductFactory::getFactory($this['order_source'])->backProductStock($this['product'], true);
            // 更新订单状态
            return $this->save(['order_status' => 20, 'cancel_remark' => $data['cancel_remark']]);
        });
    }

    /**
     * 审核：用户取消订单
     */
    public function refund($data)
    {
        // 判断订单是否有效
        if ($this['pay_status']['value'] != 20 || $this['order_status']['value'] != 10) {
            $this->error = '该订单不合法';
            return false;
        }
        if ($data['refund_money'] + $this['refund_money'] > $this['pay_price']) {
            $this->error = '退款金额不能超过支付金额';
            return false;
        }
        // 订单取消事件
        $status = $this->transaction(function () use ($data) {
            // 执行退款操作
            $this['pay_type']['value'] < 40 && (new OrderRefundService)->execute($this, $data['refund_money']);
            $deliver = (new OrderDeliver())::detail(['order_id' => $this['order_id'], 'status' => 10]);
            if ($deliver) {
                $deliver->updateDeliver();
            }
            // 更新订单状态：已发货、已收货
            $this->save([
                'delivery_status' => 20,
                'delivery_time' => time(),
                'receipt_status' => 20,
                'receipt_time' => time(),
                'order_status' => 30,
                'refund_money' => $this['refund_money'] + $data['refund_money']
            ]);
            // 执行订单完成后的操作
            $OrderCompleteService = new OrderCompleteService(OrderTypeEnum::MASTER);
            $OrderCompleteService->complete([$this], static::$app_id);
            return true;
        });
        return $status;
    }

    /**
     * 获取待处理订单
     */
    public function getReviewOrderTotal($shop_supplier_id = 0)
    {
        $model = $this;
        $filter['pay_status'] = OrderPayStatusEnum::SUCCESS;
        $filter['delivery_status'] = 10;
        $filter['order_status'] = 10;
        if ($shop_supplier_id) {
            $model = $model->where('shop_supplier_id', '=', $shop_supplier_id);
        }
        return $model->where($filter)->count();
    }

    /**
     * 获取某天的总销售额
     * 结束时间不传则查一天
     */
    public function getOrderTotalPrice($startDate, $endDate, $shop_supplier_id = 0)
    {
        $model = $this;
        $startDate && $model = $model->where('pay_time', '>=', strtotime($startDate));
        if (is_null($endDate) && $startDate) {
            $model = $model->where('pay_time', '<', strtotime($startDate) + 86400);
        } else if ($endDate) {
            $model = $model->where('pay_time', '<', strtotime($endDate) + 86400);
        }
        if ($shop_supplier_id) {
            $model = $model->where('shop_supplier_id', '=', $shop_supplier_id);
        }
        return $model->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('is_delete', '=', 0)
            ->sum('pay_price');
    }

    /**
     * 获取某天的下单用户数
     */
    public function getPayOrderUserTotal($day, $shop_supplier_id = 0)
    {
        $model = $this;
        $startTime = strtotime($day);
        if ($shop_supplier_id) {
            $model = $model->where('shop_supplier_id', '=', $shop_supplier_id);
        }
        $userIds = $model->distinct(true)
            ->where('pay_time', '>=', $startTime)
            ->where('pay_time', '<', $startTime + 86400)
            ->where('pay_status', '=', 20)
            ->where('is_delete', '=', 0)
            ->column('user_id');
        return count($userIds);
    }


 /**
     * 编辑商品
     */
    public function orderEdit($data)
    { 
		 return $this->transaction(function () use ($data) {
			// update invoice header
			$this->save($data); 
			// cancel invoice.product 
			// 回退商品库存
			// echo $this['order_source']; 10
			
			//echo $this['old_product_list'][1]['product_id'];
			//echo $this['old_product_list'][1]['total_num'];
			//echo "new";
			//echo $data['new_product_list'][0]['product_id'];
		
			
			//add back stock for those deleted (orginal order)items
		 ProductFactory::getFactory($this['order_source'])->backProductStock($data['old_product_list'], false);
			
			// delete order.product where order.id=
			 
			OrderProductModel::destroy(function($query) use ($data){
			     $query->where('order_id','=',$data['order_id']);
			});
			 
			
		 
			
		 
			// add new product item back to db
			foreach ($data['new_product_list'] as $product) {
				$p = ProductModel::detail($product['product_id']);
				
				 
			    $item = [
			        'order_id' => $data['order_id'],
			        'user_id' => $data['user_id'],
			        'app_id' => $data['app_id'],
			        'product_id' => $product['product_id'],
			        'product_name' => $p['product_name'],
			        'image_id' => $p['logo']['image_id'],
			        'deduct_stock_type' => $p['deduct_stock_type'],
			        'spec_type' => $p['spec_type'],
			        'product_sku_id' => $product['product_id'],
			        'product_attr' => $p['product_attr'],
			        'content' => $p['content'],
			        'product_price' => $p['product_price'],
			        'line_price' => $p['line_price'],
			        'total_num' => $product['total_num'],
			        'total_price' => $product['total_num']*$p['product_price'],
			        'total_pay_price' => $product['total_num']*$p['product_price'],
					'product_unit' =>  $p['product_unit'],
					'category_id' =>  $p['category_id'],
			    ];
			    $productList[] = $item;
			}
				 
			$model = new OrderProduct();
			//print_r($productList);
			$model->saveAll($productList);
		 
			// re-insert new invoice. prorduct
			
			//add back stock for those new order items
		  $new_product_list= OrderModel::detail($data['order_id']);
			ProductFactory::getFactory($this['order_source'])->updateProductStock($new_product_list);
			  
			return true;
		 });
		 
		   
    }

}