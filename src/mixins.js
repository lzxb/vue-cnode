import store from './vuex/store'
import actions from './actions/'
import components from './component/common/'

export default function (name = '') {
    return {
        components,
        store,
        vuex: {
            getters: {
                user: state => state.user,
                state: state => state[name]
            },
            actions: actions(name)
        },
        created() {
            if (this.state.path != this.$route.path) { //判断当前组件路径和state路径是否一致，否则重置
                this.RESET(this.$route.path) //重置当前页面路径状态
            }
        },
        data() {
            return this.state
        },
        ready() {
            window.scrollTo(this.scrollX, this.scrollY) //还原滚动条位置
        },
        beforeDestroy() {
            this.LEAVE() //记录滚动条位置
        }
    }
}