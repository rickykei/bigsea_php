<?php

namespace app\admin\model\page;

use app\common\model\page\Page as PageModel;

/**
 * 微信小程序diy页面模型
 */
class Page extends PageModel
{
    /**
     * 新增小程序首页diy默认设置
     */
    public function insertDefault($app_id)
    {
        return $this->save([
            'page_type' => 10,
            'page_name' => '首页',
            'page_data' => [
                'page' => [
                    'type' => 'page',
                    'name' => '页面设置',
                    'params' => [
                        'name' => '页面标题',
                        'title' => '页面标题',
                        'share_title' => '分享标题'
                    ],
                    'style' => [
                        'titleTextColor' => 'black',
                        'titleBackgroundColor' => '#ffffff',
                    ]
                ],
                'items' => [
                    'banner' => [
                        'name' => '图片轮播',
                        'type' => 'banner',
                        'group' => 'media',
                        'style' => [
                            'btnColor' => '#ffffff',
                            'btnShape' => 'round'
                        ],
                        'params' => [
                            'interval' => '2800',
                            'nav' => [
                                [
                                    'navimgUrl' => self::$base_url . 'image/diy/navbar/01.png',
                                    'navlinkUrl' => 'pages/product/list/takeaway?orderType=takein',
                                    'title' => '门店自取',
                                    'text' => '按钮文字1',
                                ],
                                [
                                    'navimgUrl' => self::$base_url . 'image/diy/navbar/02.png',
                                    'navlinkUrl' => 'pages/product/list/takeaway?orderType=takeout',
                                    'title' => '外卖',
                                    'text' => '按钮文字2',
                                ]
                            ]
                        ],
                        'data' => [
                            [
                                'imgUrl' => self::$base_url . 'image/diy/banner/01.png',
                                'linkUrl' => '',
                            ],
                            [
                                'imgUrl' => self::$base_url . 'image/diy/banner/02.png',
                                'linkUrl' => '',
                            ]
                        ]
                    ],
                    'navBar' => [
                        'name' => '导航组',
                        'type' => 'navBar',
                        'group' => 'media',
                        'style' => ['background' => '#ffffff', 'rowsNum' => '2'],
                        'data' => [
                            [
                                'linkUrl' => 'scanQrcode',
                                'imageUrl' => self::$base_url . 'image/diy/navbar/03.png',
                                'title' => '堂食点餐',
                                'text' => '支持多种就餐模式',
                                'color' => '#FDB55E'
                            ],
                            [
                                'linkUrl' => 'pages/product/list/store',
                                'imageUrl' => self::$base_url . 'image/diy/navbar/04.png',
                                'title' => '快餐模式',
                                'text' => '下单叫号，到店取餐',
                                'color' => '#FDB55E'
                            ],
                        ]
                    ],
                    'blank' => [
                        'name' => '辅助空白',
                        'type' => 'blank',
                        'group' => 'tools',
                        'style' => [
                            'height' => 20,
                            'background' => '#ffffff'
                        ]
                    ],
                    'guide' => [
                        'name' => '辅助线',
                        'type' => 'guide',
                        'group' => 'tools',
                        'style' => [
                            'background' => '#ffffff',
                            'lineStyle' => 'solid',
                            'lineHeight' => '1',
                            'lineColor' => "#000000",
                            'paddingTop' => 10
                        ]
                    ],
                    'window' => [
                        'name' => '图片橱窗',
                        'type' => 'window',
                        'group' => 'media',
                        'style' => [
                            'paddingTop' => 0,
                            'paddingLeft' => 0,
                            'background' => '#ffffff',
                            'layout' => '2'
                        ],
                        'data' => [
                            [
                                'imgUrl' => self::$base_url . 'image/diy/window/01.jpg',
                                'linkUrl' => '',
                            ],
                            [
                                'imgUrl' => self::$base_url . 'image/diy/window/02.jpg',
                                'linkUrl' => '',
                            ],
                            [
                                'imgUrl' => self::$base_url . 'image/diy/window/03.jpg',
                                'linkUrl' => ''
                            ],
                            [
                                'imgUrl' => self::$base_url . 'image/diy/window/04.jpg',
                                'linkUrl' => ''
                            ]
                        ],
                        'dataNum' => 4
                    ],
                ],
            ],
            'app_id' => $app_id
        ]);
    }

}
