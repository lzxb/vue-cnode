<style lang="less" scoped>
    @import '../../../less/config';
    .tit {
        position: relative;
        padding: 15px;
        margin: 0;
        line-height: 24px;
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        color: @text;
    }
    
    .author {
        position: relative;
        display: block;
        padding: 15px;
        &:after {
            content: "";
            position: absolute;
            right: 10%;
            bottom: 0;
            left: 10%;
            z-index: 1;
            border-bottom: 1px solid #eee;
        }
        .headimg {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background-position: center center;
            background-size: cover;
        }
        .box {
            padding-left: 15px;
            strong {
                line-height: 24px;
                font-size: 16px;
                font-weight: normal;
                color: darken(@text, 10%);
            }
            time {
                line-height: 16px;
                font-size: 12px;
                font-style: normal;
                color: #aaa;
            }
            .tag {
                margin-left: 4px;
                line-height: 16px;
                font-size: 12px;
                font-style: normal;
                color: @main;
            }
        }
    }
    
    .markdown-body {
        padding: 15px;
    }
    
    .re-list {
        li {
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .headimg {
            padding-right: 10px;
            .pic {
                overflow: hidden;
                display: block;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                border: 1px solid #ddd;
                background-color: #eee;
                background-position: center center;
                background-size: cover;
            }
        }
        time {
            padding-left: 10px;
            font-size: 12px;
        }
        .num {
            font-size: 13px;
        }
        .bottom {
            .icon {
                position: relative;
                padding: 5px 10px;
                &.count {
                    color: @main;
                }
                em {
                    font-size: 13px;
                    font-style: normal;
                }
            }
        }
        .markdown-body {
            padding: 10px 0;
        }
    }
</style>
<template>
    <div>
        <v-header title="主题">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content style="bottom: 0;" v-scroll-record>
            <router-link class="author" :to="'/user/' + author.loginname">
                <div class="top" flex="box:first">
                    <div class="headimg" :style="{ backgroundImage: 'url(' + author.avatar_url + ')' }"></div>
                    <div class="box" flex="dir:top">
                        <strong>{{ author.loginname }}</strong>
                        <div flex>
                            <time>{{ create_at | formatDate }}</time>
                            <span class="tag">#分享#</span>
                        </div>
                    </div>
                </div>
                <div class="common-typeicon" flex v-if="top || good">
                    <div class="icon" v-if="good">
                        <i class="iconfont icon-topic-good"></i>
                    </div>
                    <div class="icon" v-if="top">
                        <i class="iconfont icon-topic-top"></i>
                    </div>
                </div>
            </router-link>
            <h2 class="tit">{{title}}</h2>
            <div class="markdown-body" v-html="content"></div>
            <ul class="re-list">
                <li flex="box:first" v-for="(item, $index) in replies">
                    <div class="headimg">
                        <router-link class="pic" :to="'/user/' + item.author.loginname" :style="{ backgroundImage: 'url(' + item.author.avatar_url + ')' }"></router-link>
                    </div>
                    <div class="bd">
                        <div flex>
                            <router-link flex-box="0" :to="'/user/' + item.author.loginname">{{item.author.loginname}}</router-link>
                            <time flex-box="1">{{item.create_at | formatDate}}</time>
                            <div flex-box="0" class="num">#{{$index + 1}}</div>
                        </div>
                        <div class="markdown-body" v-html="item.content"></div>
                        <div class="bottom" flex="dir:right cross:center">
                            <div class="icon">
                                <i class="iconfont icon-comment-topic"></i>
                            </div>
                            <div class="icon" :class="{count: testThing(item.ups)}" v-if="item.author.loginname !== user.loginname">
                                <i class="iconfont icon-comment-fabulous"></i>
                                <em v-if="item.ups.length">{{item.ups.length}}</em>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </v-content>
    </div>
</template>
<script>
    import Vue from 'vue'
    import util from 'util'
    import { mapState } from 'vuex'
    import routeData from 'route-data'

    export default {
        mixins: [routeData],
        computed: mapState({ user: (state) => state.user}),
        routeData() {
            return {
                id: '',
                author_id: '',
                tab: "share",
                content: '',
                title: '',
                last_reply_at: '',
                good: false,
                top: false,
                reply_count: 0,
                visit_count: 0,
                create_at: '',
                author: {},
                replies: [],
                is_collect: false
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                var { vid } = this.$route.params
                util.get(`/api/v1/topic/${vid}`, {}, ({ data, success }) => {
                    if(success) return Object.assign(this.$data, data)
                })
            },
            testThing(ups) { //验证是否点赞
                return ups.indexOf(this.user.id || '') > -1
            }
        }
    }
</script>