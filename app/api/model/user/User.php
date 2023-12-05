<?php

namespace app\api\model\user;

use think\facade\Cache;
use app\common\exception\BaseException;
use app\common\model\user\User as UserModel;
use app\common\library\easywechat\AppWx;
use app\common\model\page\CenterMenu as CenterMenuModel;


/**
 * 用户模型类
 */
class User extends UserModel
{
    private $token;

    /**
     * 隐藏字段
     */
    protected $hidden = [
        'open_id',
        'is_delete',
        'create_time',
        'update_time'
    ];

    /**
     * 获取用户信息
     */
    public static function getUser($data)
    {
        return self::where(['user_id' => $data['uid']])->with(['address', 'addressDefault'])->find();
    }

    /**
     * 用户登录
     */
    public function login($post)
    {
        // 微信登录 获取session_key
        $app = AppWx::getApp();
        $utils = $app->getUtils();
        $session = $utils->codeToSession($post['code']);
        $userInfo = json_decode(htmlspecialchars_decode($post['user_info']), true);
        $user_id = $this->register($session['openid'], $userInfo, $session);
        // 生成token (session3rd)
        $this->token = $this->token($user_id);
        // 记录缓存, 7天
        Cache::tag('cache')->set($this->token, $user_id, 86400 * 7);
        return $user_id;
    }

    /**
     * 用户登录
     */
    public function bindMobile($post)
    {
        try {
            // 微信登录 获取session_key
            $app = AppWx::getApp();
            $iv = $post['iv'];
            $encrypted_data = $post['encrypted_data'];
            $utils = $app->getUtils();
            $result = $utils->decryptSession($post['session_key'], $iv, $encrypted_data);
            if (isset($result['phoneNumber']) && $result['phoneNumber']) {
                $this->save([
                    'mobile' => $result['phoneNumber']
                ]);
                return $result['phoneNumber'];
            } else {
                return false;
            }
        } catch (\Exception $e) {
            $this->error = '获取手机号失败，请重试';
            return false;
        }
    }

    /**
     * 获取token
     */
    public function getToken()
    {
        return $this->token;
    }


    /**
     * 生成用户认证的token
     */
    private function token($user_id)
    {
        return signToken($user_id, 'user');
    }

    /**
     * 自动注册用户
     */
    private function register($open_id, $data, $decryptedData)
    {
        //通过unionid查询用户是否存在
        $user = null;
        if (isset($decryptedData['unionid']) && !empty($decryptedData['unionid'])) {
            $data['union_id'] = $decryptedData['unionid'];
            $user = self::detailByUnionid($decryptedData['unionid']);
        }
        if (!$user) {
            // 通过open_id查询用户是否已存在
            $user = self::detail(['open_id' => $open_id]);
        }
        if ($user) {
            $model = $user;
            unset($data['nickName']);
            unset($data['avatarUrl']);
        } else {
            $model = $this;
            $data['reg_source'] = 'wx';
        }
        $this->startTrans();
        try {
            // 保存/更新用户记录
            if (!$model->save(array_merge($data, [
                'open_id' => $open_id,
                'app_id' => self::$app_id
            ]))
            ) {
                throw new BaseException(['msg' => '用户注册失败']);
            }
            $this->commit();
        } catch (\Exception $e) {
            $this->rollback();
            throw new BaseException(['msg' => $e->getMessage()]);
        }
        return $model['user_id'];
    }

    //修改个人资料
    public function updateInfo($data)
    {
        return $this->allowField(['avatarUrl', 'nickName'])->save($data);
    }

    /**
     * 个人中心菜单列表
     */
    public static function getMenus()
    {
        // 查询用户菜单
        $model = new CenterMenuModel();
        $user_menus = $model->getAll();
        foreach ($user_menus as $key => &$menus) {
            if (strpos($menus['image_url'], 'http') !== 0) {
                $menus['image_url'] = base_url() . $menus['image_url'];
            }
        }
        return $user_menus;
    }


}
