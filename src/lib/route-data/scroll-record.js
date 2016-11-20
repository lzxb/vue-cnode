import RouterStore from './store'

const store = new RouterStore()

const scrollTop = (el, value) => {
    const hasScrollTop = 'scrollTop' in el
    if (value === undefined) return hasScrollTop ? el.scrollTop : el.pageYOffset
    if (hasScrollTop) {
        el.scrollTop = value
    } else {
        el.scrollTo(el.scrollX, value)
    }
}

const scroll = () => { //监听滚动条改变事件
    var { target: { __url } } = event
    if (__url) {
        var top = scrollTop(event.target)
        store.setItem(__url, top)
    }
}
export const scrollRecord = {
    inserted(el, binding, vnode) {
        const init = (to) => {
            var __url = el.__url = store.getUrl(to) //保存当前关联的url
            el.addEventListener('scroll', scroll, false) //绑定滚动事件
            var top = store.getItem(__url)
            if (top) {
                scrollTop(el, top)
            }
        }
        init(vnode.context.$route) //DOM渲染完成后重新初始化
        vnode.context.$watch('$route', init) //路由更改后，重新初始化
    },
    unbind(el, binding, vnode) {
        el.removeEventListener('scroll', scroll, false) //解除滚动事件绑定
    }
}