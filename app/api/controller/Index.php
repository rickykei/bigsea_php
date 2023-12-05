<?php

namespace app\api\controller;

use app\api\model\page\Page as AppPage;
use app\api\model\settings\Setting as SettingModel;
use app\common\model\app\AppUpdate as AppUpdateModel;
use app\api\model\supplier\Supplier as SupplierModel;
use app\common\library\easywechat\AppMp;

/**
 * 页面控制器
 */
class Index extends Controller
{
    /**
     * 首页
     */
    public function index($page_id = null, $url = '')
    {
        // 页面元素
        $data = AppPage::getPageData($this->getUser(false), $page_id);
        // 页面元素
        $user = $this->getUser(false);
        //获取默认门店id
        $supplier = (new SupplierModel)->getDefault($this->postData());
        return $this->renderSuccess('', compact('data', 'user', 'supplier'));
    }

    //主题
    public function nav()
    {
        $data['theme'] = SettingModel::getItem('theme');
        return $this->renderSuccess('', $data);
    }

    /**
     * 首页
     */
    public function diy($page_id = 0)
    {
        // 页面元素
        $data = AppPage::getPageData($this->getUser(false), $page_id);
        return $this->renderSuccess('', $data);
    }
}
