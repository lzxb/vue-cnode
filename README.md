# vue-cnode
基于vue + vue-router + vuex + ES6 + less + superagent + flex.css重写vue版cnode社区
### [demo](http://lzxb.github.io/vue-cnode/)
 [![demo](https://github.com/lzxb/vue-cnode/raw/master/shot/QR-code.png)](http://lzxb.github.io/vue-cnode/)


### 下载
```
  git clone https://github.com/lzxb/vue-cnode.git
  cd vue-cnode
  npm install (安装依赖模块)
  npm install webpack -g (没有安装webpack的需要安装)
```
### 运行（nodejs 6.0+）
```
  npm run dev (开发版本访问：http://localhost:3000/)
  npm run dist （发布生产版本）

```
### 功能
```
  1.登录退出
  2.列表分页，查看帖子
  3.发帖，回复帖子
  4.我的消息
  5.个人中心
  6.查看别人的资料
  7.生成离线缓存清单
```
### 感受
```
由于之前使用react写过react-cnode，
再使用vue写vue-cnode时便能够很快入手。
vue模板的方式对比react的jsx方式，虽然入手简单，但是图灵表达能力不足，
由于公司很多的后台管理系统之前都是基于bootstrap + jQuery，
所以vue我更乐意推荐后台使用，直接在页面中引入，无需繁琐的配置，快速上手开发
如果在移动端做一个完整的webApp，我比较倾向于使用react开发，
因为以后有机会还是可以玩玩react native
```
### 定个小目标
```
在完成react-cnode和vue-cnode之后，下一步学习计划是使用electron + react再写一个electron-cnode，
至于为什么不选择vue的原因很简单，因为在写react-cnode的时候，对redux理解不深，所以想加深对redux的理解，
在完成electron-cnode之后，如果没有新的技术爆发，估计是使用react native再写一个RN-cnode
```
### 题外话
```
因为我是把vue-cnode是放在git pages上面，因为觉得访问速度比较慢，便将vue-cnode打包成一个离线缓存的webApp，
发现了html-webpack-plugin并没有将manifest的服务器路径设置进去，于是第一次给老外pull代码便自然而然的发生了。
如果你的打包生产版本发现manifest的文件路径不对，不要惊慌，自己手动修改一下html-webpack-plugin的index.js代码即可，如下
```
```javascript
  //index.js 557行，加上assets.publicPath
  return start + ' manifest="' + assets.publicPath + assets.manifest + '"' + end;
```
