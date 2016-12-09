
### 前言

项目灵感的最初来源是[@shinygang](https://github.com/shinygang/Vue-cnodejs)来自的Vue-cnodejs，
感谢[cnodejs](https://cnodejs.org/)社区提供的API。
github：[https://github.com/lzxb/vue-cnode](https://github.com/lzxb/vue-cnode)
### 感悟
```
在vue-cnode升级vue2的时候，在公司内部已经有两个正式项目使用vue2，
遇到的一个最难的问题，就是如何能在页面后退时还原数据和滚动条位置，
虽然vue2内置了keep-alive组件，vue-router也提供了scrollBehavior方法进行设置，
但是仍然无法满足需求，后来阅读vue-router的源码发现，
每个页面都会自动在history.state对象中存储一个对应的key值，
便利用这个特性实现了页面后退时，数据和滚动条还原，
不过目前只是实现了页面的顶级组件还原，
如果需要对顶级组件下的子组件实现数据还原，
可以利用$options._scopeId来实现。
哈哈，具体如何实现就要靠大家自己发挥想象力了
```

### 技术栈
```
基于vue2 + vue-router + vuex + ES6 + less + flex.css重写vue版cnode社区，使用webpack打包
```

### 使用项目
```
1.克隆项目：      git clone https://github.com/lzxb/vue-cnode.git
2.安装nodejs
3.安装依赖：      npm install
4.启动服务：      npm run dev
5.发布代码：      npm run dist
```

### 功能
- [x] 首页列表，上拉加载
- [x] 主题详情，回复，点赞
- [x] 消息列表
- [x] 消息提醒
- [x] 个人主页
- [x] 用户信息
- [x] 登录
- [x] 退出
- [x] 关于
- [x] 页面后退，数据还原
- [x] 页面后退，滚动位置还原
- [x] ajax请求拦截器
- [x] 页面跳转，不再执行此页面的ajax请求回调方法
- [x] 启动图



### 项目目录说明
```
.
|-- config                           // 项目开发环境配置
|   |-- index.js                     // 项目打包部署配置
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- content.vue              // 页面内容公共组件
|       |-- data-null.vue            // 数据为空时公共组件
|       |-- footer.vue               // 底部导航栏公共组件
|       |-- header.vue               // 页面头部公共组件
|       |-- index.js                 // 加载各种公共组件
|       |-- loading.vue              // 页面数据加载公共组件
|   |-- config                       // 路由配置和程序的基本信息配置
|       |-- config.js                // 配置项目的基本信息
|       |-- routes.js                // 配置页面路由
|   |-- css                          // 各种css文件
|       |-- common.css               // 全局通用css文件
|   |-- iconfont                     // 各种字体图标
|   |-- images                       // 公共图片
|   |-- less                         // 各种less文件
|       |-- common.less              // 全局通用less文件
|       |-- config.less              // 全局通用less配置文件
|   |-- lib                          // 各种插件
|       |-- route-data               // 实现页面后退数据还原，滚动位置还原
|   |-- mixins                       // 各种全局mixins
|       |-- pull-list.js             // 上拉加载
|   |-- pages                        // 各种页面组件
|       |-- about                    // 关于
|       |-- index                    // 首页
|       |-- login                    // 登录
|       |-- my                       // 我的主页，和消息列表
|       |-- signout                  // 退出
|       |-- topic                    // 主题详情，主题新建
|       |-- user                     // 查看用户资料
|   |-- store                        // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|       |-- user.js                  // 用户store
|   |-- template                     // 各种html文件
|       |-- index.html               // 程序入口html文件
|   |-- util                         // 公共的js方法
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- webpack.config.js                // 程序打包配置
|-- server.js                        // 开发时使用的服务器
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```

### [扫一扫二维码查看效果](http://lzxb.github.io/vue-cnode/)
 [![扫一扫二维码查看效果](https://github.com/lzxb/vue-cnode/raw/master/shot/QR-code.png)](http://lzxb.github.io/vue-cnode/)
