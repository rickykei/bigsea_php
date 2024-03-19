<?php

namespace app\shop\controller\takeout;

use app\shop\controller\Controller;
use app\shop\model\order\OrderDeliver as OrderDeliverModel;
use app\common\enum\settings\DeliverySourceEnum;
use app\shop\model\order\Order as OrderModel;
use app\common\enum\settings\DeliveryTypeEnum;
use app\common\model\settings\Setting as SettingModel;
/**
 * 订单控制器
 */
class Car extends Controller
{	
     
	
	/**
     * 订单列表
     */
    public function index()
    {
        // 订单列表
        $model = new OrderDeliverModel();
        $data = $this->postData();
        $data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
        $list = $model->getList($data);
        $deliver_source = DeliverySourceEnum::data();
        return $this->renderSuccess('', compact('list', 'deliver_source'));
    }

    
     
    public function export($dataType = 'all')
    {
		
		$param = $this->request->param();
		$car_no = $param['car_no'];
		$create_time= $param['create_time'];
		$ampm= $param['ampm'];
		if (isset($car_no) && isset($create_time) && isset($ampm)){
			
			
     // 订单列表
     $model = new OrderModel();
     $data['table_no']=$car_no;
     $data['order_type'] = 0;
	 $data['create_time']=$create_time." ".$ampm;
     $data['shop_supplier_id'] = $this->store['user']['shop_supplier_id'];
	 $list = $model->getListByCarNoDate($dataType, $data);
 
 
     // return $this->renderSuccess('', compact('list'));  
		
	 
		//search order records
		//search order itesm
		 $this->setPdf($data,$list);
		}
    }
	
	public function setPdf($data, $list){
	
	    // $logo = Env::get('root_path') .'/image/logo.jpg';
	
	    // require Env::get('root_path') .'vendor/tecnickcom/tcpdf/tcpdf.php';
	
	    $pdf  = new \TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
	
	    $pdf->SetCreator(PDF_CREATOR);
	
	    $pdf->SetAuthor("大海");//设置作者
		
		 
	    $pdf->SetTitle("DELIVERY NOTE");
	
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
	
	    $pdf->setCellHeightRatio(1.1);
	
	    // 设置左、上、右的间距
	
	    $pdf->SetMargins('15', '5', '15');
	
	    // set auto page breaks
	
	    //设置是否自动分页  距离底部多少距离时分页
	
	    $pdf->SetAutoPageBreak(true, '5');
	
	    // 设置字体
		
	    $pdf->SetFont('stsongstdlight', '', 15, '', true);
		$pdf->AddFont('arialblack', '', 15, '', false);
	    // 设置是否自动分页 距离底部多少距离时分页
	
	    //$pdf->SetAutoPageBreak(TRUE, '15');
	
	    // 设置图像比例因子
	
	    //$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
	
	    //$pdf->setFontSubsetting(true);
	
	  
	
	    //$pdf->writeHTML($content);//HTML生成PDF
	
	    //$pdf->writeHTML('<img width="95"><br>'.$content, true, false, true, false, '');//设置logo
		
	 // add a page
	 $pdf->AddPage();
		
		$page_pointer=0;
		$tmp_html=" <table > ";
		
		$tmp_html=$tmp_html."<tr><td>提貨車號 : </td><td>".$data['table_no']."</td></tr>";
		//$tmp_html=$tmp_html."<tr><td>提貨日期 : </td><td>".$data['create_time']."</td></tr>";
		if ($data['create_time']!="")
			if (substr($data['create_time'], -5)=='09:00')
					$tmp_html=$tmp_html."<tr><td>提貨日期 : </td><td>".$data['create_time']." 上午</td></tr>";
					else
					$tmp_html=$tmp_html."<tr><td>提貨日期 : </td><td>".$data['create_time']." 下午</td></tr>";
					
			
		$tmp_html=$tmp_html."</table><table><tr><td > </td></tr></table>";
		$tmp_html=$tmp_html."<table border=\"1\">";
	  	$tmp_html=$tmp_html."<tr><td style=\"width:35px;valign: middle;line-height:24px;\">No.</td><td style=\"width:350px;valign: middle;line-height:24px; \">產品名稱及內容</td><td style=\"width:50px; text-align: center; valign: middle;line-height:24px;\">數量</td><td style=\"width:50px;text-align: center; valign: middle;line-height:24px;\">單位</td></tr>";
		
		$i=1;
	 
		foreach($list as $prow ){
					$tmp_html=$tmp_html."<tr><td style=\"valign: middle;line-height:24px;\" >".$i++."</td><td style=\"valign: middle;line-height:24px;\">".$prow['product_name']."[".trim(strip_tags($prow['product_content']))."]</td><td style=\"valign: middle;line-height:24px;text-align: center;\">".$prow['total_num']."</td><td style=\"text-align: center; valign: middle;line-height:24px\">".$prow['product_unit']."</td></tr>";
					//$tmp_html=$tmp_html."<tr><td></td><td>".."</td><td style=\"text-align: center; vertical-align: middle;\"></td><td style=\"text-align: center; vertical-align: middle;\"></td></tr>";
		}
		 
	 $tmp_html=$tmp_html."</table> ";
	// header('Content-Type: application/json; charset=utf-8');
	 //echo json_encode($list);
	 //echo $tmp_html;
		$pdf->writeHTML($tmp_html, true, false, true, false, '');
		$pdf->Output(date("Ymd_His").".pdf", 'I');  
	    //PDF输出的方式。I，在浏览器中打开；D，以文件形式下载；F，保存到服务器中；S，以字符串形式输出；E：以邮件的附件输出。
	
	   
	
	    exit();
	
		}
		
}