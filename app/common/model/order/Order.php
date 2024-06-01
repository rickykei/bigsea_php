<?php

namespace app\common\model\order;

use app\common\enum\order\OrderSourceEnum;
use app\common\model\BaseModel;
use app\common\enum\settings\DeliveryTypeEnum;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\enum\order\OrderTypeEnum;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\library\helper;
use app\common\service\order\OrderService;
use app\common\service\order\OrderCompleteService;

/**
 * 订单模型模型
 */
class Order extends BaseModel
{
    protected $pk = 'order_id';
    protected $name = 'order';

    /**
     * 追加字段
     * @var string[]
     */
    protected $append = [
        'state_text',
        'order_source_text',
        'order_type_text',
        'deliver_text',
    ];

    /**
     * 订单商品列表
     */
    public function product()
    {
        return $this->hasMany('app\\common\\model\\order\\OrderProduct', 'order_id', 'order_id')->hidden(['content']);
    }


    /**
     * 关联订单收货地址表
     */
    public function address()
    {
        return $this->hasOne('app\\common\\model\\order\\OrderAddress');
    }

    /**
     * 关联自提订单联系方式
     */
    public function extract()
    {
        return $this->hasOne('app\\common\\model\\order\\OrderExtract');
    }

    /**
     * 关联用户表
     */
    public function user()
    {
        return $this->belongsTo('app\\common\\model\\user\\User', 'user_id', 'user_id');
    }

    /**
     * 关联供应商表
     */
    public function supplier()
    {
        return $this->belongsTo('app\\common\\model\\supplier\\Supplier', 'shop_supplier_id', 'shop_supplier_id');
    }

    /**
     * 关联配送信息
     */
    public function deliver()
    {
        return $this->belongsTo('app\\common\\model\\order\\OrderDeliver', 'order_id', 'order_id')->order('deliver_id desc');
    }

    /**
     * 订单状态文字描述
     * @param $value
     * @param $data
     * @return string
     */
    public function getStateTextAttr($value, $data)
    {
        // 订单状态
        if (in_array($data['order_status'], [20, 30])) {
            $orderStatus = [20 => '已取消', 30 => '已完成'];
            return $orderStatus[$data['order_status']];
        }
        // 付款状态
        if ($data['pay_status'] == 10) {
            return '待付款';
        }
        // 发货状态
        if ($data['order_status'] == 10) {
            if ($data['delivery_type'] == 10 && $data['delivery_status'] == 10) {
                return '待配送';
            }
            if ($data['delivery_type'] == 10 && $data['delivery_status'] == 20) {
                return '配送中';
            }
            return '进行中';
        }

        return $value;
    }

    /**
     * 订单状态文字描述
     * @param $value
     * @param $data
     * @return string
     */
    public function getDeliverTextAttr($value, $data)
    {
        // 订单状态待接单＝1,待取货＝2,配送中＝3,已完成＝4,已取消＝5, 指派单=8
        if (in_array($data['order_status'], [20, 30])) {
            $orderStatus = [20 => '已取消', 30 => '已完成'];
            return $orderStatus[$data['order_status']];
        }
        // 发货状态
        if ($data['delivery_status'] == 10) {
            return '待配送';
        }
        // 发货状态
        if ($data['delivery_status'] == 20) {
            $deliverStatus = [1 => '待接单', 2 => '待取货', 3 => '配送中', 4 => '已完成'];
            return $deliverStatus[$data['deliver_status']];
        }
        return $value;
    }

    /**
     * 付款状态
     * @param $value
     * @return array
     */
    public function getPayTypeAttr($value)
    {
        return ['text' => OrderPayTypeEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 订单类型
     * @param $value
     * @return array
     */
    public function getOrderTypeTextAttr($value, $data)
    {
        return $data['order_type'] == 0 ? '外卖订单' : '店内订单';
    }

    /**
     * 订单来源
     * @param $value
     * @return array
     */
    public function getOrderSourceTextAttr($value, $data)
    {
        return OrderSourceEnum::data()[$data['order_source']]['name'];
    }

    /**
     * 付款状态
     * @param $value
     * @return array
     */
    public function getPayStatusAttr($value)
    {
        return ['text' => OrderPayStatusEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 改价金额（差价）
     * @param $value
     * @return array
     */
    public function getUpdatePriceAttr($value)
    {
        return [
            'symbol' => $value < 0 ? '-' : '+',
            'value' => sprintf('%.2f', abs($value))
        ];
    }

    /**
     * 发货状态
     * @param $value
     * @return array
     */
    public function getDeliveryStatusAttr($value)
    {
        $status = [10 => '待配送', 20 => '已配送'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 收货状态
     * @param $value
     * @return array
     */
    public function getReceiptStatusAttr($value)
    {
        $status = [10 => '待收货', 20 => '已收货'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 收货状态
     * @param $value
     * @return array
     */
    public function getOrderStatusAttr($value)
    {
        $status = [10 => '进行中', 20 => '已取消', 21 => '待取消', 30 => '已完成'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 配送方式
     * @param $value
     * @return array
     */
    public function getDeliveryTypeAttr($value)
    {
        return ['text' => DeliveryTypeEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 发送第三方配送
     * @param $value
     * @return array
     */
    public function addOrder($deliver)
    {
        $this->sendLocal($this);
    }

    //商家配送
    public function sendLocal($data)
    {
        $data->save(['deliver_status' => 3, 'deliver_source' => 10, 'delivery_status' => 20]);
        $add = [
            'deliver_source' => 10,
            'order_id' => $data['order_id'],
            'order_no' => $data['order_no'],
            'distance' => $data->getDistance($data['supplier']['longitude'], $data['supplier']['latitude'], $data['address']['longitude'], $data['address']['latitude']),
            'price' => 0,
            'shop_supplier_id' => $data['shop_supplier_id'],
            'deliver_status' => 3,
            'phone' => $data['supplier']['link_phone'],
            'app_id' => self::$app_id
        ];
        (new OrderDeliver())->save($add);
    }

    public static function getDistance($ulon, $ulat, $slon, $slat)
    {
        // 地球半径
        $R = 6378137;
        // 将角度转为狐度
        $radLat1 = deg2rad($ulat);
        $radLat2 = deg2rad($slat);
        $radLng1 = deg2rad($ulon);
        $radLng2 = deg2rad($slon);
        // 结果
        $s = acos(cos($radLat1) * cos($radLat2) * cos($radLng1 - $radLng2) + sin($radLat1) * sin($radLat2)) * $R;
        // 精度
        $s = round($s * 10000) / 10000;
        return round($s);
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
    public static function detail($where, $with = ['user', 'address', 'product' => ['image'], 'extract', 'supplier'])
    {
        is_array($where) ? $filter = $where : $filter['order_id'] = (int)$where;
        return self::with($with)->where($filter)->find();
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
    public static function detailByNo($order_no, $with = ['user', 'address', 'product' => ['image', 'refund'], 'extract', 'express', 'extractStore.logo', 'extractClerk', 'supplier'])
    {
        return self::with($with)->where('order_no', '=', $order_no)->find();
    }

    /**
     * 批量获取订单列表
     * @param $orderIds
     * @param array $with
     * @return array
     */
    public function getListByIds($orderIds, $with = [])
    {
        $data = $this->getListByInArray('order_id', $orderIds, $with);
        return helper::arrayColumn2Key($data, 'order_id');
    }

    /**
     * 批量更新订单
     * @param $orderIds
     * @param $data
     * @return bool
     */
    public function onBatchUpdate($orderIds, $data)
    {
        return $this->where('order_id', 'in', $orderIds)->save($data);
    }

    /**
     * 批量更新订单状态
     * @param $orderIds
     * @param $data
     * @return bool
     */
    public function onBatchUpdateStatus($orderIds, $data)
    {
        return $this->where('order_id', 'in', $orderIds)->where('delivery_status', '=', 10)->save($data);
    }

    /**
     * 批量获取订单列表
     * @param $field
     * @param $data
     * @param array $with
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function getListByInArray($field, $data, $with = [])
    {
        return $this->with($with)
            ->where($field, 'in', $data)
            ->where('is_delete', '=', 0)
            ->select();
    }

    /**
     * 生成订单号
     * @return string
     */
    public function orderNo()
    {
        return OrderService::createOrderNo();
    }

    /**
     * 生成交易号
     * @return string
     */
    public function tradeNo()
    {
        return OrderService::createTradeNo();
    }

    /**
     * 确认核销（自提订单）
     * @param $extractClerkId
     * @return bool|mixed
     */
    public function verificationOrder()
    {
        if ($this['pay_status']['value'] != 20 || in_array($this['order_status']['value'], [20, 30])) {
            $this->error = '该订单不满足核销条件';
            return false;
        }
        return $this->transaction(function () {
            $deliver = (new OrderDeliver())::detail(['order_id' => $this['order_id'], 'status' => 10]);
            if ($deliver) {
                $deliver->updateDeliver();
            }
            // 更新订单状态：已发货、已收货
            $status = $this->save([
                'delivery_status' => 20,
                'delivery_time' => time(),
                'receipt_status' => 20,
                'receipt_time' => time(),
                'order_status' => 30
            ]);
            // 执行订单完成后的操作
            $OrderCompleteService = new OrderCompleteService(OrderTypeEnum::MASTER);
            $OrderCompleteService->complete([$this], static::$app_id);
            return $status;
        });
    }


    /**
     * 获取已付款订单总数 (可指定某天)
     */
    public function getOrderData($startDate, $endDate, $type, $shop_supplier_id, $order_type = -1)
    {
        $model = $this;

        !is_null($startDate) && $model = $model->where('pay_time', '>=', strtotime($startDate));

        if (is_null($endDate)) {
            !is_null($startDate) && $model = $model->where('pay_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('pay_time', '<', strtotime($endDate) + 86400);
        }

        if ($shop_supplier_id > 0) {
            $model = $model->where('shop_supplier_id', '=', $shop_supplier_id);
        }
        if ($order_type >= 0) {
            $model = $model->where('order_type', '=', $order_type);
        }

        $model = $model->where('is_delete', '=', 0)
            ->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20);
        if ($type == 'order_total') {
            // 订单数量
            return $model->count();
        } else if ($type == 'order_total_price') {
            // 订单总金额
            return $model->sum('pay_price');
        } else if ($type == 'order_user_total') {
            // 支付用户数
            return count($model->distinct(true)->column('user_id'));
        } else if ($type == 'order_refund_money') {
            // 退款金额
            return $model->sum('refund_money');
        } else if ($type == 'order_refund_total') {
            // 退款订单数
            return $model->where('refund_money', '>', 0)->count();
        } else if ($type == 'income_price') {
            // 预计收入
            return $model->sum('pay_price') - $model->sum('refund_money');
        }
        return 0;
    }

    /**
     * 获取各类型总销售额
     */
    public function getOrderTotalMoney($order_type, $shop_supplier_id, $data = [])
    {
        $model = $this;
        if (isset($data['type']) && $data['type']) {
            switch ($data['type']) {
                case '1'://今天
                    $model = $model->where('create_time', '>=', strtotime(date('Y-m-d')));
                    break;
                case '2'://近7天
                    $model = $model->where('create_time', '>=', strtotime(-6 . ' days', strtotime(date('Y-m-d'))));
                    break;
                case '3'://近15天
                    $model = $model->where('create_time', '>=', strtotime(-14 . ' days', strtotime(date('Y-m-d'))));
                    break;
                case '4'://自定义
                    $start = strtotime($data['time'][0]);
                    $end = strtotime($data['time'][1]) + 86399;
                    $model = $model->where('create_time', 'between', "$start,$end");
                    break;
            }
        }
        if ($shop_supplier_id) {
            $model = $model->where('shop_supplier_id', '=', $shop_supplier_id);
        }
        $model = $model->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('order_type', '=', $order_type)
            ->where('is_delete', '=', 0);
        $detail['express_price'] = $model->sum('express_price') ? $model->sum('express_price') : 0;
        $detail['bag_price'] = $model->sum('bag_price') ? $model->sum('bag_price') : 0;
        $detail['product_price'] = $model->sum('total_price') ? $model->sum('total_price') : 0;
        $detail['refund_money'] = $model->sum('refund_money') ? $model->sum('refund_money') : 0;
        $detail['total_price'] = $model->sum('pay_price') ? $model->sum('pay_price') : 0;
        $detail['income_money'] = round($detail['total_price'] - $detail['refund_money'], 2);
        $detail['order_count'] = $model->count();
        return $detail;
    }

    /**
     * 获取商品销量Top10
     */
    public function getProductRank($type, $product_type, $shop_supplier_id = 0)
    {
        $model = new OrderProduct;
        if ($type == 0) {
            $order = 'total_num desc';
        } else {
            $order = 'total_price desc';
        }
        if ($product_type >= 0) {
            $model = $model->where('p.product_type', '=', $product_type);
        }
        if ($shop_supplier_id) {
            $model = $model->where('p.shop_supplier_id', '=', $shop_supplier_id);
        }
        $list = $model->alias('op')
            ->where('o.pay_status', '=', 20)
            ->where('o.order_status', '<>', 20)
            ->join('order o', 'op.order_id=o.order_id')
            ->join('product p', 'p.product_id=op.product_id')
            ->field('p.product_name,sum(total_pay_price) as total_price,sum(total_num) as total_num')
            ->group('op.product_id')
            ->order($order)
            ->limit(10)
            ->select();
        return $list;
    }


public function setPdf($comp_name, $order_model){

    // $logo = Env::get('root_path') .'/image/logo.jpg';

    // require Env::get('root_path') .'vendor/tecnickcom/tcpdf/tcpdf.php';

    $pdf  = new \TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

    $pdf->SetCreator(PDF_CREATOR);

    $pdf->SetAuthor("大海");//设置作者
	
	 
    $pdf->SetTitle("INVOICE");

    $pdf->SetSubject('TCPDF ');

    //$pdf->SetKeywords('TCPDF, PDF, example, test, guide');//设置关键字

    // 是否显示页眉

    $pdf->setPrintHeader(false);

    // 设置页眉显示的内容

   // $pdf->SetHeaderData($logo, 60, '', '');

    // 设置页眉字体

    //$pdf->setHeaderFont(Array('deja2vusans', '', '12'));

    // 页眉距离顶部的距离

    $pdf->SetHeaderMargin('1');

    // 是否显示页脚

    //$pdf->setPrintFooter(true);

    // 设置页脚显示的内容

    //$pdf->setFooterData(array(0,64,0), array(0,64,128));

    // 设置页脚的字体

    //$pdf->setFooterFont(Array('dejavusans', '', '10'));

    // 设置页脚距离底部的距离

     $pdf->SetFooterMargin('1');

    // 设置默认等宽字体

    $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

    // 设置行高

    $pdf->setCellHeightRatio(1);

    // 设置左、上、右的间距

    $pdf->SetMargins('15', '5', '15');

    // set auto page breaks

    //设置是否自动分页  距离底部多少距离时分页

    $pdf->SetAutoPageBreak(false, '5');

    // 设置字体
	
    $pdf->SetFont('stsongstdlight', '', 14, '', true);
	$pdf->AddFont('arialblack', '', 14, '', false);
    // 设置是否自动分页 距离底部多少距离时分页

    //$pdf->SetAutoPageBreak(TRUE, '15');

    // 设置图像比例因子

    $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

    //$pdf->setFontSubsetting(true);

  

    //$pdf->writeHTML($content);//HTML生成PDF

    //$pdf->writeHTML('<img width="95"><br>'.$content, true, false, true, false, '');//设置logo
	
	//prepare item html
	$product_count= count($order_model->product);
	$pdf_total_pages=0;
	//$pdf_total_pages=round($product_count/15);
	if(round($product_count/15)==0 )
	{ 
		if (fmod($product_count,15)>0)
			$pdf_total_pages++;
	}else{
			$pdf_total_pages=round($product_count/15);
			if (fmod($product_count,15)>0)
				$pdf_total_pages++;
	}
	
	
	$page_pointer=0;
	$tmp_html="";
	
	for($j=0;$j<$pdf_total_pages;$j++){ 
		$total_amount[$j]=0;
		for($i=0+(15*$j);$i<((15*$j)+15);$i++){ 
			
			if ($i>=$product_count){
				$tmp_html=$tmp_html.'<tr><td colspan="5"></td></tr><tr><td colspan="5"></td></tr>';
			}else{
				$sellingPoint=$order_model->product[$i]->selling_point;
				$content=strip_tags($order_model->product[$i]->content);
				$tmp_html=$tmp_html.'
				<tr><td width="50">'.($i+1).'</td>
				<td width="280">'.$order_model->product[$i]->product_name.'</td>
				<td width="100">'.$order_model->product[$i]->total_num.'</td>
				<td width="110">$'.$order_model->product[$i]->product_price.'</td>
				<td width="100">$'.$order_model->product[$i]->total_price.'</td></tr>
				<tr><td width="50"></td>
					<td colspan="4">'.$sellingPoint.' '.$content.'</td>
				</tr>'; 
				$total_amount[$j]=$total_amount[$j]+$order_model->product[$i]->total_price;
			}
			
		}
		$prod_html[$j]=$tmp_html;
		
		$tmp_html="";
	}
 
//	$prod_html[0]=$prod_html[0].$tmp_html;
	$grandTotal=0;
	for($i=1;$i<=$pdf_total_pages;$i++){
		  $pdf->AddPage("A4","Landscape",true,true);
	
	$html = '
	<table border="0" cellspacing="0" cellpadding="0">
	    <tr>
	        <th height="0" width="120"></th>
	        <th align="right"></th>
	        <th align="left"></th>
	        <th></th>
			<th></th>
	    </tr>
	   <tr><td colspan="2"></td><td colspan="3"><img height="110" src="/image/logo.jpg" /> </td></tr>
	    <tr>
	       <td colspan="5" height="20"></td>
	    </tr> 
	 
		<tr>
		   <td colspan="3" rowspan="2"><font face="arialblack" size="+10"><b>INVOICE</b></font></td>
		   <td align="right"><font face="arialblack" size="-3">Invoice No. #</font></td>
		   <td align="right"><font size="-3">'.$order_model->order_id.'</font></td>
		  
		</tr>
		<tr>
			<td align="right"><font face="arialblack" size="-3">Invoice Date #</font></td>
			<td align="right"><font size="-3">'.$order_model->create_time.'</font></td>
			 
		</tr>
		<tr><td colspan="5"><hr></td></tr>
		<tr>
			<td><font face="arialblack" >Company </font></td>
			 
			<td colspan="4">'.$order_model->user->nickName.'</td>
		</tr> 
		<tr>
			<td><font  face="arialblack" >Address </font></td>
			 
			<td colspan="4">'.$order_model->address->address.'</td>
		</tr>
		
		<tr><td width="50"><font face="arialblack" >No.</font></td>
		<td width="280"><font  face="arialblack" >Description </font></td>
		<td width="100"><font  face="arialblack" >QTY</font></td>
		<td width="110"><font face="arialblack" >Unit Price</font></td>
		<td width="100"><font  face="arialblack" >Total</font></td></tr> 
		<tr><td colspan="5"><hr></td></tr> 
		'.$prod_html[$i-1].' 
		 <tr><td colspan="5"><hr></td></tr> 
		 <tr><td colspan="2"></td><td colspan="2"><font face="arialblack">Total Amount:</font></td><td >$'.number_format($total_amount[$i-1], 2, '.', '').'</td></tr>';
		 $grandTotal=$grandTotal+$total_amount[$i-1];
		 if ($i==$pdf_total_pages)
		 $html = $html.'<tr><td colspan="2"></td><td colspan="2"><font face="arialblack">Grand Total:</font></td><td>$'.number_format($grandTotal, 2, '.', '').'</td></tr>';
		 else
		 $html = $html.'<tr><td colspan="5"></td></tr>';
		 $html = $html.'
		 <tr><td colspan="5" height="3"> </td></tr>
		  <tr><td colspan="2" width="230"><font face="arialblack">Payment Terms:</font></td><td colspan="3" width="400"><font face="arialblack">COD</font></td></tr>
		   <tr><td colspan="2" width="230"><font face="arialblack">Delivery Date:</font></td><td colspan="3">'.$order_model->mealtime.'</td></tr>
		    <tr><td colspan="2" width="230"><font face="arialblack">Remark of the invoice:</font></td><td colspan="3">'.$order_model->buyer_remark.'</td></tr> 
			<tr><td colspan="5"  height="3"> </td></tr>
			<tr><td colspan="5" align="center"><font face="arialblack">Page'.$i.'/'.$pdf_total_pages.'</font></td></tr>
	</table>';
		$pdf->writeHTML($html, true, false, true, false, '');
	}

    //生成PDF文件到某地
    //$pdf->writeHTMLCell(0, 0, '', '', $content, 0, 1, 0, true, '', true);

    $showType= 'I';//PDF输出的方式。I，在浏览器中打开；D，以文件形式下载；F，保存到服务器中；S，以字符串形式输出；E：以邮件的附件输出。

    $pdf->Output($order_model->order_id."_".date("Ymd_His").".pdf", $showType);

    exit();

	}
	

}