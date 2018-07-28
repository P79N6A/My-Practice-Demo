## todo
- [ ] 登录
- [ ] 注册
- [ ] 记录登录状态，能用 session
- [ ] 保存每个用户的 todo-list

## 设计
- 前后端分离，后端只提供接口
### 接口
- /login 判断登录。成功后返回用户信息（用户名）
- /register 注册
- /getTodo 获取当前登录用户的 todo-list