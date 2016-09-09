<style lang="less" scoped>
    @import "../../less/config";
</style>
<template>
    <header class="header" flex="box:justify">
        <div class="icon" flex="main:center cross:center" v-on:click="SIDE_BAR_SHOW">
            <i class="iconfont icon-caidan"></i>
        </div>
        <div class="title">{{title}}</div>
        <a class="icon" flex="main:center cross:center" v-link="'/signin'" v-if="!user.accesstoken">
            <i class="iconfont icon-qudenglu"></i>
        </a>
        <a class="icon" flex="main:center cross:center" v-link="'/topic/create'" v-else>
            <i class="iconfont icon-fabiao"></i>
        </a>
    </header>
</template>
<script>
    import Tool from '../../Tool'
    import store from '../../vuex/store'
    import actions from '../../actions/'
    export default {
        store,
        vuex: {
            getters: {
                user: state => state.user,
                state: state => state[name]
            },
            actions: actions()
        },
        props: {
            title: { //标题
                type: String,
                default: '全部'
            },
            user: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>