import RouterStore from './store'

const store = new RouterStore()

const scroll = () => { //监听滚动条改变事件
    var { target: { _url } } = event
    var top = $(event.target).scrollTop()
    store.setItem(_url, top)
}
export const scrollRecord = {
    inserted(el, binding, vnode) {
        const init = (to) => {
            var _url = el._url = store.getUrl(to) //保存当前关联的url
            el.addEventListener('scroll', scroll, false) //绑定滚动事件
            var top = store.getItem(_url)
            if (top) {
                $(el).scrollTop(top)
            }
        }
        init(vnode.context.$route) //DOM渲染完成后重新初始化
        vnode.context.$watch('$route', init) //路由更改后，重新初始化
    },
    unbind(el, binding, vnode) {
        el.removeEventListener('scroll', scroll, false) //解除滚动事件绑定
    }
}