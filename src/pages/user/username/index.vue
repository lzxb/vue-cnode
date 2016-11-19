<style lang="less" scoped>
    @import "../../../less/config";
    .user {
        .user-bg {
            overflow: hidden;
            width: 100%;
            height: 160px;
            background: @main;
            img {
                width: 100%;
            }
        }
        .headimg {
            overflow: hidden;
            position: relative;
            z-index: 2;
            margin-top: -42px;
            border-radius: 50%;
            border: 1px solid #eee;
            background: #fff;
            .pic {
                overflow: hidden;
                width: 80px;
                height: 80px;
                margin: 2px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: #eee;
                }
            }
        }
        .name {
            margin: 20px 10px;
            font-size: 20px;
            font-weight: 500;
        }
        .score {
            width: 100%;
            font-size: 12px;
            div {
                padding: 10px;
            }
        }
    }
    
    .tab-nav {
        margin-top: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        li {
            line-height: 38px;
            text-align: center;
            border-right: 1px solid #eee;
            font-size: 16px;
            &:last-of-type {
                border: none;
            }
            &.on {
                color: @main;
            }
        }
    }
    
    .list {
        li {
            padding: 10px;
            height: 50px;
            border-bottom: 1px solid #eee;
            background: #fff;
            .head {
                .pic {
                    overflow: hidden;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .main {
                padding-left: 10px;
                color: inherit;
                .con {
                    padding: 0 5px;
                    line-height: 30px;
                    font-size: 14px;
                }
                .name {
                    color: #666;
                }
                .line {
                    line-height: 20px;
                }
                time {
                    font-size: 12px;
                    color: #888;
                }
            }
        }
    }
</style>
<template>
    <div>
        <v-header title="个人资料">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content style="bottom: 0;">
            <div class="user" flex="dir:top cross:center">
                <div class="user-bg">
                    <img src="./headimg-bg.jpg" alt="">
                </div>
                <div class="headimg">
                    <div class="pic">
                        <img v-if="data.avatar_url" :src="data.avatar_url" alt="">
                    </div>
                </div>
                <div class="name">{{data.loginname}}</div>
                <div class="score" flex="main:justify">
                    <div>积分：{{data.score}}</div>
                    <div>注册于：{{data.create_at}}</div>
                </div>
            </div>
            <ul class="tab-nav" flex="box:mean">
                <li :class="{on: tabIndex == 0}">回复</li>
                <li :class="{on: tabIndex == 1}">主题</li>
            </ul>
            <ul class="list" :style="{display: tabIndex == 0 ? 'block' : 'none'}">
                <li flex="box:first" v-for="item in data.recent_replies" track-by="id">
                    <router-link class="head" :to="'/user/' + item.author.loginname">
                        <div class="pic">
                            <img :src="item.author.avatar_url" alt="">
                        </div>
                    </router-link>
                    <router-link :to="'/topic/' + item.id" class="main" flex="dir:top box:first">
                        <div class="line" flex="box:last">
                            <div class="name">{{item.author.loginname}}</div>
                            <time>{{item.last_reply_at}}</time>
                        </div>
                        <div class="con">{{item.title}}</div>
                    </router-link>
                </li>
            </ul>
            <ul class="list" :style="{display: tabIndex == 1 ? 'block' : 'none'}">
                <li flex="box:first" v-for="item in data.recent_topics" track-by="id">
                    <router-link class="head" :to="'/user/' + item.author.loginname">
                        <div class="pic">
                            <img :src="item.author.avatar_url" alt="">
                        </div>
                    </router-link>
                    <router-link :to="'/topic/' + item.id" class="main" flex="dir:top box:first">
                        <div class="line" flex="box:last">
                            <div class="name">{{item.author.loginname}}</div>
                            <time>{{item.last_reply_at}}</time>
                        </div>
                        <div class="con">{{item.title}}</div>
                    </router-link>
                </li>
            </ul>
        </v-content>
    </div>
</template>
<script>
    import util from 'util'
    export default {
        data() {
            return {
                tabIndex: 0,
                data: {}
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                var { username = '' } = this.$route.params
                util.get(`/api/v1/user/${username}`, {}, ({ success, data }) => {

                    if(success) this.data = data

                })
            }
        }
    }
</script>