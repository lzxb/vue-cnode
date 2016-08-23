export default () => {
    return {
        view: {}, //用来存储页面信息
        list: [], //用来存储列表
        loadTip: '正在加载中...', //页面加载状态信息提示
        loadState: 0, // -1 = 加载失败，0 = 正在加载，1 = 加载成功
        scrollX: 0, //滚动条X坐标
        scrollY: 0, //滚动条Y坐标
        path: '' //组件关联的路径
    }
}