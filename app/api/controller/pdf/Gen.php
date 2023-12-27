<?php

namespace app\api\controller\pdf;
use app\api\controller\Controller;
use app\api\model\order\Order as OrderModel;

class Gen extends Controller
{
	// user
	private $user;
	
	/**
	 * 构造方法
	 */
	public function initialize()
	{
	    parent::initialize();
	    $this->user = $this->getUser();   // 用户信息
	
	}
	
	public function setPdf($comp_name, $order_model){

    // $logo    = Env::get('root_path') .'public/static/images/logo.jpg';

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

    //$pdf->SetHeaderData($logo, 60, '', '');

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

    $pdf->SetAutoPageBreak(true, PDF_MARGIN_BOTTOM);

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
				$tmp_html=$tmp_html.'
				<tr><td width="50" >'.($i+1).'</td>
				<td width="280">'.$order_model->product[$i]->product_name.'</td>
				<td width="100">'.$order_model->product[$i]->total_num.'</td>
				<td width="110">$'.$order_model->product[$i]->product_price.'</td>
				<td width="100">$'.$order_model->product[$i]->total_price.'</td></tr>
				<tr><td width="50" ></td>
				<td  colspan="4">'.$order_model->product[$i]->content.'</td>
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
	    <tr>
	        
			<td colspan="5" align="right"><h1>'.$comp_name[0].'</h1></td>
	    </tr>
	    <tr>
	   
			<td colspan="5" align="right">'.$comp_name[1].'</td>
	    </tr>
		<tr>
		    <td colspan="5" align="right"><font size="-3">'.$comp_name[2].'</font></td>
			
		</tr>
		<tr>
		   <td colspan="5" align="right"><font size="-3">'.$comp_name[3].'</font></td>
		</tr>
	    <tr>
	       <td colspan="5" height="40"></td>
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
		<tr><td colspan="5"><hr></td></tr> 
		<tr><td width="50"><font face="arialblack" >No.</font></td>
		<td width="280"><font  face="arialblack" >Description </font></td>
		<td width="100"><font  face="arialblack" >QTY</font></td>
		<td width="110"><font face="arialblack" >Unit Price</font></td>
		<td width="100"><font  face="arialblack" >Total</font></td></tr> 
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
   public function pdf()
    {
		
		$param = $this->request->param();
		if (isset($param['oid'])){
			
		
		$order_id=$param['oid'];
		
		// 订单详情
		$model = OrderModel::getUserOrderDetail($order_id, $this->user['user_id']);
		   
		
		// 请求参数
		
        $comp_name[0]='大海貿易有限公司';
		$comp_name[1]='GIANT OCEAN TRADING CO. LTD.';
		$comp_name[2]='No. 78 Ho Yeung St Tuen Mun Area 40 Landing N.T. HK';
		$comp_name[3]='MOBLIE : 9319-7967   TEL: 2787 3593    FAX: 2412 2661';
		 
        $title = 'pdf';
		
		//search order records
		//search order itesm
    	$this->setPdf($comp_name,$model);
		}
    }
}

?>