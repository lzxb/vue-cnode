<style lang="less" scoped>
    @import "../../../less/config";
    .con {
        background: #eee;
    }
    
    .user {
        position: relative;
        height: 180px;
        background-image: url(./headimg-bg.jpg);
        background-position: center center;
        background-size: cover;
    }
    
    .headimg {
        position: absolute;
        top: 100px;
        bottom: 0;
        left: 50%;
        z-index: 1;
        width: 120px;
        height: 120px;
        margin: 0 0 -40px -60px;
        border-radius: 50%;
        border: 1px solid #ddd;
        background-color: #eee;
        background-size: cover;
        background-position: center center;
        filter: none;
    }
    
    .user-name {
        padding: 40px 0 50px;
        line-height: 32px;
        text-align: center;
    }
    
    .nav {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            border-bottom: 1px solid #ddd;
            background: #fbfbfb;
            &:first-of-type {
                border-top: 1px solid #ddd;
            }
        }
        a {
            padding: 8px 10px;
            line-height: 28px;
            .icon {
                width: 45px;
                .iconfont {
                    font-size: 24px;
                    color: #aaa;
                }
            }
            .text {
                line-height: 30px;
                font-size: 13px;
                color: @text;
            }
            .icon-arrow-right {
                color: #ccc;
            }
        }
    }
</style>
<template>
    <div>
        <v-header title="个人中心">
            <div slot="right" class="item" flex="main:center cross:center" v-if="user.id" v-on:click="$router.push('/signout')">
                <i class="iconfont icon-signout"></i>
            </div>
        </v-header>
        <v-content class="con" v-scroll-record>
            <router-link v-if="user.avatar_url" :to="'/user/' + user.loginname">
                <div class="user"></div>
                <div class="headimg" :style="{backgroundImage: 'url(' + user.avatar_url + ')'}"></div>
                <div class="user-name">{{ user.loginname }}</div>
            </router-link>
            <router-link v-if="!user.avatar_url" to="/login">
                <div class="user"></div>
                <div class="headimg"></div>
                <div class="user-name">你还未登录，请先登录！</div>
            </router-link>
            <nav class="nav">
                <li>
                    <router-link to="/topic/create" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-edit" style="color: #14b11d"></i>
                        </div>
                        <div class="text">发表主题</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/messages" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-msg" style="color: #bd1616;"></i>
                        </div>
                        <div class="text">我的消息</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
            </nav>
            <div style="height: 50px;"></div>
            <nav class="nav">
                <li>
                    <router-link to="/about" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-about"></i>
                        </div>
                        <div class="text">关于</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
            </nav>
            <div style="height: 50px;"></div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import routeData from 'route-data'

    export default {
        mixins: [routeData],
        computed: mapState({ user: (state) => state.user}),
        routeData() {
            return {}
        }
    }
</script>