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
                &.fabulous {
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
        .replies-count {
            border-left: 5px solid @main;
            em {
                font-style: normal;
                color: @main;
            }
        }
    }
    
    .reply {
        padding: 50px 10px;
    }
    
    .tip-login {
        padding: 100px;
        text-align: center;
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
            <v-loading v-if="!id && existence"></v-loading>
            <v-data-null v-if="!existence" msg="话题不存在"></v-data-null>
            <template v-if="id">
                <div class="common-typeicon" flex v-if="top || good">
                    <div class="icon" v-if="good">
                        <i class="iconfont icon-topic-good"></i>
                    </div>
                    <div class="icon" v-if="top">
                        <i class="iconfont icon-topic-top"></i>
                    </div>
                </div>

                <ul class="re-list">
                    <!-- 楼主信息 start -->
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
                    <!-- 楼主信息 end -->
                    <!-- 主题信息 start -->
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
                    </li>
                    <!-- 主题信息 end -->
                    <li class="replies-count" v-if="replies.length">
                        共(<em>{{ replies.length }}</em>)条回复
                    </li>
                    <!-- 主题评论 start -->
                    <li v-for="(item, $index) in replies">
                        <div flex="box:first">
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
                                    <div class="icon" @click="commentShow(item, $index)">
                                        <i class="iconfont icon-comment-topic"></i>
                                    </div>
                                    <div class="icon" :class="{fabulous: testThing(item.ups)}" v-if="item.author.loginname !== user.loginname" @click="fabulousItem(item)">
                                        <i class="iconfont icon-comment-fabulous"></i>
                                        <em v-if="item.ups.length">{{ item.ups.length }}</em>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <reply-box v-if="item.comment" :loginname="item.author.loginname" :reply_id="item.id" @success="getData"></reply-box>
                    </li>
                    <!-- 主题评论 end -->

                </ul>
                <div class="reply" v-if="user.id">
                    <reply-box @success="getData"></reply-box>
                </div>
                <div class="tip-login" v-if="!user.id">
                    你还未登录，请先<router-link to="/login">登录</router-link>
                </div>
            </template>
        </v-content>
    </div>
</template>
<script>
    import Vue from 'vue'
    import util from 'util'
    import { mapState } from 'vuex'
    import routeData from 'route-data'
    import replyBox from './reply-box'

    export default {
        mixins: [routeData],
        components: { replyBox },
        computed: mapState({ user: (state) => state.user}),
        routeData() {
            return {
                existence: true,
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
                    if(success) {
                        data.replies.forEach((item) => item.comment = false)
                        Object.assign(this.$data, data)
                    } else {
                        this.existence = false
                    }
                })
            },
            testThing(ups) { //验证是否点赞
                return ups.indexOf(this.user.id || '') > -1
            },
            fabulousItem({ ups, id }) { //点赞
                if(!this.user.accesstoken) return this.$router.push('/login')
                var index = ups.indexOf(this.user.id)
                if(index > -1) {
                    ups.splice(index, 1)
                } else {
                    ups.push(this.user.id)
                }
                util.post(`/api/v1/reply/${id}/ups`)
            },
            commentShow(item) { //显示隐藏回复框
                if(!this.user.accesstoken) return this.$router.push('/login')
                var { comment } = item
                this.replies.forEach((item) => item.comment = false)
                item.comment = !comment
            }
        }
    }
</script>