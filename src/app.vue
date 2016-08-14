<style lang="less" scoped>
    @import "./less/config";
    /*
        侧边栏
    */
    
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
    /*
        登录
    */
    
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
    /*
        用户信息
    */
    
    .user {
        .left {
            padding: 10px 0;
        }
        .headimg {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: @mainTextColor
        }
        .text {
            line-height: 28px;
            font-size: 14px;
        }
        .iconfont {
            padding: 0 5px;
            color: @mainTextColor;
        }
        .score {
            font-size: 12px;
            color: @mainTextColor;
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
                <a v-link="`/user/${user.loginname}`" flex="box:last" v-on:click="sideBarHide">
                    <div class="left" flex="dir:top cross:center">
                        <div class="headimg">
                            <img :src="user.avatar_url" alt="">
                        </div>
                        <div class="text">{{user.loginname}}</div>
                        <div class="score">积分：{{user.score}}</div>
                    </div>
                    <div class="font" flex="cross:center">
                        <i class="iconfont icon-jiantouright"></i>
                    </div>
                </a>
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