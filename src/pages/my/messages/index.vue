<style lang="less" scoped>
    @import "../../../less/config";
    .msg-box {
        .list {
            padding: 0;
            margin: 0;
            li {
                position: relative;
                padding: 10px;
                list-style: none;
                border-bottom: 1px solid #eee;
                background: #fff;
                /*a {
                    color: @text;
                }*/
                .name {
                    font-weight: bold;
                    line-height: 28px;
                    time {
                        padding-left: 5px;
                        font-size: 12px;
                        font-weight: normal;
                        color: #999;
                    }
                }
                .content {
                    padding: 5px 0;
                }
                .weidu {
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                    width: auto;
                    text-align: right;
                    .iconfont {
                        font-size: 60px;
                        color: @text;
                    }
                }
            }
        }
    }
    
    .user-headimg {
        width: 38px;
        height: 38px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #ddd;
        background-size: cover;
        background-color: #eee;
    }
    
    .markdown-body {
        padding: 5px;
        margin-top: 10px;
        border-radius: 5px;
        background: #eee;
    }
</style>
<template>
    <div>
        <v-header title="消息"></v-header>
        <v-content v-scroll-record>
            <div class="msg-box" v-if="list.length">
                <ul class="list">
                    <li flex="box:first" v-for="(item, $index) in list">
                        <router-link class="user" :to="'/user/' + item.author.loginname">
                            <div class="user-headimg" :style="{backgroundImage: 'url(' + item.author.avatar_url +')'}"></div>
                        </router-link>
                        <div>
                            <div class="name">{{ item.author.loginname }}
                                <time>{{ item.create_at | formatDate }}</time>
                            </div>
                            <div v-if="item.type == 'at'">
                                在话题
                                <router-link :to="'/topic/' + item.topic.id">{{ item.topic.title }}</router-link> 中 @了你

                            </div>
                            <div v-if="item.type == 'reply'">
                                回复你了的话题
                                <router-link :to="'/topic/' + item.topic.id">{{ item.topic.title }}</router-link>
                            </div>
                            <div class="markdown-body" v-html="item.reply.content"></div>
                        </div>
                        <div class="weidu">
                            <i class="iconfont icon-weidu"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <v-data-null v-if="!list.length"></v-data-null>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import util from 'util'
    import routeData from 'route-data'

    export default {
        mixins: [routeData],
        computed: mapState({ user: (state) => state.user}),
        routeData() {
            return {
                list: []
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                var { accesstoken } = this.user
                if(!accesstoken) return false
                util.get('/api/v1/messages', { mdrender: true, accesstoken }, ({ data }) => {
                    var { hasnot_read_messages, has_read_messages } = data
                    Array.prototype.push.apply(hasnot_read_messages, has_read_messages)
                    this.list = hasnot_read_messages
                })
            }
        }
    }
</script>