<style lang="less" scoped>
    @import '../../../less/config';
    .datas {
        padding: 10px;
        border-bottom: 1px solid #eee;
        .tit {
            position: relative;
            padding: 10px 0;
            margin: 0;
            line-height: 24px;
            font-weight: bold;
            font-size: 22px;
            text-align: center;
            color: @text;
        }
        .bottom {
            .item {
                padding: 0 5px;
                color: #666;
                .iconfont {
                    padding-right: 3px;
                }
            }
        }
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
                width: 28px;
                height: 28px;
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
    
    .reply-box {
        .text {
            padding: 5px 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #eee;
            textarea {
                box-sizing: border-box;
                width: 100%;
                line-height: 24px;
                border: none;
                font-size: 13px;
                resize: none;
                &:focus {
                    outline: none;
                }
            }
        }
        .btn {
            padding: 5px 30px;
            line-height: 24px;
            border-radius: 5px;
            border: 1px solid darken(@main, 3%);
            font-size: 14px;
            color: #fff;
            background: @main;
            &:focus {
                outline: none;
            }
        }
        .msg {
            padding: 5px 10px;
            line-height: 26px;
            color: red;
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
            <div class="common-typeicon" flex v-if="top || good">
                <div class="icon" v-if="good">
                    <i class="iconfont icon-topic-good"></i>
                </div>
                <div class="icon" v-if="top">
                    <i class="iconfont icon-topic-top"></i>
                </div>
            </div>

            <ul class="re-list">
                <li flex="box:first">
                    <div class="headimg">
                        <router-link class="pic" :to="'/user/' + author.loginname" :style="{ backgroundImage: 'url(' + author.avatar_url + ')' }"></router-link>
                    </div>
                    <div class="bd">
                        <div flex>
                            <router-link flex-box="0" :to="'/user/' + author.loginname">{{ author.loginname }}</router-link>
                            <time flex-box="1">{{ create_at | formatDate }}</time>
                            <div flex-box="0" class="num">#楼主</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="datas">
                        <div class="tit">{{ title }}</div>
                        <div class="bottom" flex="main:center">
                            <div class="item click" flex="main:center cross:center">
                                <i class="iconfont icon-click"></i>
                                <div class="num">{{ visit_count }}</div>
                            </div>
                            <div class="item reply" flex="main:center cross:center">
                                <i class="iconfont icon-comment"></i>
                                <div class="num">{{ reply_count }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="markdown-body" v-html="content"></div>
                    <div class="bottom" flex="dir:right cross:center">
                        <div class="icon">
                            <i class="iconfont icon-comment-topic"></i>
                        </div>
                    </div>
                    <div class="reply-box">
                        <div class="text"><textarea placeholder="@oyosc"></textarea></div>
                        <div flex="main:right">
                            <div class="msg"></div>
                            <div flex-box="0"> <button class="btn">回复</button> </div>
                        </div>
                    </div>
                </li>
                <li flex="box:first" v-for="(item, $index) in replies">
                    <div class="headimg">
                        <router-link class="pic" :to="'/user/' + item.author.loginname" :style="{ backgroundImage: 'url(' + item.author.avatar_url + ')' }"></router-link>
                    </div>
                    <div class="bd">
                        <div flex>
                            <router-link flex-box="0" :to="'/user/' + item.author.loginname">{{ item.author.loginname }}</router-link>
                            <time flex-box="1">{{ item.create_at | formatDate }}</time>
                            <div flex-box="0" class="num">#{{ $index + 1 }}</div>
                        </div>
                        <div class="markdown-body" v-html="item.content"></div>
                        <div class="bottom" flex="dir:right cross:center">
                            <div class="icon">
                                <i class="iconfont icon-comment-topic"></i>
                            </div>
                            <div class="icon" :class="{count: testThing(item.ups)}" v-if="item.author.loginname !== user.loginname">
                                <i class="iconfont icon-comment-fabulous"></i>
                                <em v-if="item.ups.length">{{ item.ups.length }}</em>
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