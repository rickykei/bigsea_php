<?php

namespace app\common\model\user;

use app\common\model\BaseModel;

/**
 * 用户余额提现明细模型
 */
class Cash extends BaseModel
{
    protected $name = 'user_cash';
    protected $pk = 'id';

    /**
     * 打款方式
     * @var array
     */
    public $payType = [
        10 => '微信',
        20 => '支付宝',
        30 => '银行卡',
    ];

    /**
     * 申请状态
     * @var array
     */
    public $applyStatus = [
        10 => '待审核',
        20 => '审核通过',
        30 => '驳回',
        40 => '已打款',
    ];

    /**
     * 关联用户表
     */
    public function user()
    {
        return $this->belongsTo('User');
    }

    /**
     * 提现详情
     * @param $id
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function detail($id)
    {
        return (new static())->find($id);
    }

    /**
     * 审核状态
     * @param $value
     * @return array
     */
    public function getApplyStatusAttr($value)
    {
        $method = [10 => '待审核', 20 => '审核通过', 30 => '驳回', 40 => '已打款'];
        return ['text' => $method[$value], 'value' => $value];
    }

}