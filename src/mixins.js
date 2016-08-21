import store from './vuex/store'
import actions from './actions/'
import components from './component/common/'


var name = ''

var mixins = {
    components,
    store,
    vuex: {
        getters: {
            user: state => state.user
        },
        actions
    },
    data: function () {
        name = this.$route.name
        return this.state
    },
    ready: function () {
        window.scrollTo(this.scrollX, this.scrollY) //还原滚动条位置
    },
    beforeDestroy: function () {
        this[`${name}Leave`]() //记录滚动条位置
    }

}

export default mixins