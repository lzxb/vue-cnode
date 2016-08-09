<template>
    <div class="app app-nav-show">
        <div class="wrap">
            <header class="common-header" flex="box:justify">
                <div class="icon" flex="main:center cross:center">
                    <i class="iconfont icon-caidan"></i>
                </div>
                <div class="title">全部</div>
                <div class="icon" flex="main:center cross:center">
                    <i class="iconfont icon-qudenglu"></i>
                </div>
            </header>
            <router-view></router-view>
        </div>
        <nav class="nav"></nav>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '登录'
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./css/config";
    .app {
        @w: 240px;
        .wrap {
            padding-top: 50px;
            z-index: 10;
            background: @shallow;
        }
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: -999;
            width: @w;
            background: @shallow;
        }
        &-nav-show {
            .wrap {
                padding-top: 50px;
                transform: translateX(@w);
            }
            .nav {
                z-index: 999;
                background: #fff;
            }
        }
    }
</style>