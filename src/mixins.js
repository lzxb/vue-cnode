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
            if (this.state.path && this.state.path != this.$route.path) { //让用户后退时，还原状态
                this.ReSet() //重置页面状态
            }
        },
        data() {
            return this.state
        },
        ready() {
            window.scrollTo(this.scrollX, this.scrollY) //还原滚动条位置
        },
        beforeDestroy() {
            this.Leave() //记录滚动条位置
        }
    }
}