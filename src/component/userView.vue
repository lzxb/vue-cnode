<style lang="less" scoped>
    @import "../less/config";
    .user {
        .user-bg {
            width: 100%;
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
            border: 1px solid darken(@shallow, 10%);
            background: #fff;
            .pic {
                overflow: hidden;
                width: 80px;
                height: 80px;
                margin: 2px;
                border-radius: 50%;
            }
        }
        .name {
            margin: 20px 10px;
            font-size: 30px;
            font-weight: 500;
            color: @mainStressColor;
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
        border-bottom: 1px solid @shallow;
        box-shadow: 0 0 5px darken(@shallow, 10%);
        background: #fff;
        li {
            line-height: 38px;
            text-align: center;
            border-right: 1px solid @shallow;
            font-size: 16px;
            color: @mainStressColor;
            &:last-of-type {
                border: none;
            }
            &.on {
                color: @mainATagClolor;
            }
        }
    }
    
    .list {
        li {
            padding: 10px;
            height: 50px;
            border-bottom: 1px solid @shallow;
            background: #fff;
            .head {
                .pic {
                    overflow: hidden;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                }
            }
            .main {
                padding-left: 10px;
                color: inherit;
                .con {
                    padding: 0 5px;
                    line-height: 30px;
                    font-size: 13px;
                }
                .line {
                    line-height: 20px;
                }
                .name {
                    color: darken(@mainTextColor, 10%);
                }
                time {
                    font-size: 12px;
                    color: lighten(@mainTextColor, 30%);
                }
            }
        }
    }
</style>
<template>
    <template v-if="loadState > 0">
        <div class="user" flex="dir:top cross:center">
            <div class="user-bg">
                <img src="../images/user-bg.png" alt="">
            </div>
            <div class="headimg">
                <div class="pic">
                    <img :src="view.avatar_url" alt="">
                </div>
            </div>
            <div class="name">{{view.loginname}}</div>
            <div class="score" flex="main:justify">
                <div>积分：{{view.score}}</div>
                <div>注册于：{{view.create_at | formatDate}}</div>
            </div>
        </div>
        <ul class="tab-nav" flex="box:mean">
            <li :class="{on: view.tabIndex == 0}" v-on:click="view.tabIndex = 0">回复</li>
            <li :class="{on: view.tabIndex == 1}" v-on:click="view.tabIndex = 1">主题</li>
        </ul>
        <ul class="list" :style="{display: view.tabIndex == 0 ? 'block' : 'none'}">
            <li flex="box:first" v-for="item in view.recent_replies">
                <a class="head" v-link="`/user/${item.author.loginname}`">
                    <div class="pic">
                        <img :src="item.author.avatar_url" alt="">
                    </div>
                </a>
                <a v-link="`/topic/${item.id}`" class="main" flex="dir:top box:first">
                    <div class="line" flex="box:last">
                        <div class="name">{{item.author.loginname}}</div>
                        <time>{{item.last_reply_at | formatDate}}</time>
                    </div>
                    <div class="con">{{item.title}}</div>
                </a>
            </li>
        </ul>
        <ul class="list" :style="{display: view.tabIndex == 1 ? 'block' : 'none'}">
            <li flex="box:first" v-for="item in view.recent_topics">
                <a class="head" v-link="`/user/${item.author.loginname}`">
                    <div class="pic">
                        <img :src="item.author.avatar_url" alt="">
                    </div>
                </a>
                <a v-link="`/topic/${item.id}`" class="main" flex="dir:top box:first">
                    <div class="line" flex="box:last">
                        <div class="name">{{item.author.loginname}}</div>
                        <time>{{item.last_reply_at | formatDate}}</time>
                    </div>
                    <div class="con">{{item.title}}</div>
                </a>
            </li>
        </ul>
    </template>
    <load v-else :tip="loadTip" :state="loadState"></load>
</template>
<script>
    import Tool from '../Tool'
    import mixins from '../mixins'
    
    export default {
        mixins: [mixins],
        vuex: {
            getters: {
                state: state => state.userView
            }
        },
        route: {
            data() {
                var {loginname} = this.$route.params
                Tool.get(`/api/v1/user/${loginname}`, {}, ({data}) => {
                    if(data) {
                        data.tabIndex = this.view.tabIndex || 0
                        this.userViewSetView(data)
                    } else {
                        this.userViewGetError({loadTip: '用户不存在'})
                    }
                }, this.userViewGetError)
            }
        }
    }
</script>