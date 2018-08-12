## 接口
登录
/user/login
参数
username: String（必填）(4-20)
password: String（必填）(4-20)
pin: String（验证码、有才必填）

注册
/user/register
username: String(4-20)
password: String(4-20)

修改信息
/user/updateUser

修改密码
/user/changePsd

注销登录
/user/logout

显示 todo
/todo/show

添加 todo
/todo/add

编辑 todo
/todo/update

删除 todo
/todo/delete

已完成 / 未完成
/todo/changeStatus