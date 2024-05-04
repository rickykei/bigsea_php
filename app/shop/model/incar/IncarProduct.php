<?php

namespace app\shop\model\incar;

use app\common\model\incar\IncarProduct as IncarProductModel;

/**
 * 订单商品模型
 */
class IncarProduct extends IncarProductModel
{


  public function addProductList($incar_id, $product_list)
    {
        
        $saveData = [];
        foreach ($product_list as $item) {
            $data = $item;
            $data['app_id'] = self::$app_id;
			$data['incar_id'] = $incar_id;
            $saveData[] = $data;
        }
        
        count($saveData) > 0 && $this->saveAll($saveData);
        
    }
}