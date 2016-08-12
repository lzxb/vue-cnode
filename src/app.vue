<style lang="less" scoped>
    @import "./less/config";
    .app {
        @w: 240px;
        overflow-x: hidden;
        height: 100%;
        .wrap {
            overflow: hidden;
            position: relative;
            z-index: 10;
            min-height: 100%;
            padding-top: 50px;
            background: @shallow;
            transform: translateX(0);
            transition: all 0.15s ease-out;
        }
        .header {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 99;
            height: 50px;
            margin-bottom: 5px;
            line-height: 50px;
            box-shadow: 0 0 5px darken(@shallow, 30%);
            background: @shallow;
            .icon {
                width: 40px;
            }
            .title {
                text-align: center;
            }
        }
        .side-bar {
            box-sizing: border-box;
            position: fixed;
            top: -200px;
            left: 0;
            bottom: -200px;
            z-index: 1;
            width: @w;
            padding: 200px 0;
            border-right: 1px solid darken(@shallow, 5%);
            background: #fff;
        }
        .side-bar-close {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            left: @w;
            bottom: 0;
            z-index: 11;
            background: transparent;
        }
        &-side-bar-show {
            overflow: hidden;
            .wrap {
                transform: translateX(@w);
            }
            .side-bar-close {
                display: block;
            }
        }
    }
    
    .nav {
        overflow: hidden;
        margin: 10px;
        border-top: 1px solid @shallow;
        li {
            padding: 10px;
            line-height: 28px;
            .icon {
                width: 60px;
                padding: 0 10px;
            }
            .iconfont {
                color: @mainStressColor;
            }
            .tit {
                color: lighten(@mainATagClolor, 5%);
            }
        }
    }
    
    .signin {
        margin: 10px;
        padding: 10px;
        .icon {
            width: 60px;
            padding: 0 10px;
        }
        .iconfont {
            font-size: 34px;
            color: @topIconColor;
        }
        .tit {
            line-height: 39px;
            font-size: 16px;
            color: darken(@mainATagClolor, 5%);
        }
    }
</style>
<template>
    <div class="app" :class="{'app-side-bar-show': sideBar}">
        <div class="wrap">
            <header class="header" flex="box:justify">
                <div class="icon" flex="main:center cross:center" v-on:click="sideBarShow">
                    <i class="iconfont icon-caidan"></i>
                </div>
                <div class="title">{{title || '全部'}}</div>
                <div class="icon" flex="main:center cross:center">
                    <i class="iconfont icon-qudenglu" v-if="!user.accesstoken"></i>
                </div>
            </header>
            <router-view></router-view>
        </div>
        <div class="side-bar">
            <ul class="signin" v-if="!user.accesstoken">
                <li>
                    <a flex="box:first" v-link="'/signin'" v-on:click="sideBarHide">
                        <div class="icon" flex="main:center cross:center">
                            <i class="iconfont icon-qudenglu"></i>
                        </div>
                        <div class="tit">去登录</div>
                    </a>
                </li>
            </ul>
            <div class="user" v-else>

            </div>
            <ul class="nav" v-for="o in menus">
                <li v-for="d in o">
                    <a flex="box:first" v-link="d.link" v-on:click="sideBarHide">
                        <div class="icon" flex="main:center cross:center">
                            <i class="iconfont icon-{{d.icon}}"></i>
                        </div>
                        <div class="tit">{{d.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="side-bar-close" v-on:click="sideBarHide"></div>
    </div>
</template>
<script>
    import Tool, {actions} from './Tool'
    import store from './vuex/store'
    import menus from './config/menus'
    export default {
        store,
        vuex: {
            getters: {
                sideBar: state => state.sideBar,
                user: state => state.user
            },
            actions
        },
        data() {
            return {
                menus,
                title: Tool.getTitle(this.$route)
            }
        },
        route: {
            data() {
                this.title = Tool.getTitle(this.$route)
            }
        }
    }
</script>