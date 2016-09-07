
// 创建每个页面对应的state
export default [
    'index', //首页
    'signin',  //登录
    'signout', //退出登录
    'myMessages', //我的消息
    'userView', //用户资料
    'topicCreate', //创建主题
    'topic', //主题详情
]

//创建每个页面的action
export const actions = [
    'GET_DATA_VIEW', //存储页面信息
    'GET_DATA_LIST', //存储列表信息
    'PULL_PAGE_LIST_PUSH', //拉取页面列表数据，分页使用
    'GET_DATA_START', //正在获取数据
    'GET_DATA_ERROR', //页面加载失败
    'LEAVE', //页面离开，存储滚动条位置
    'RESET', //重置页面状态
    'SET_CUSTOM_KEY', //设置自定义字段
]