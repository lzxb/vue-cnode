<style lang="less" scoped>
    @import "../less/config";
    .msg-box {
        .list {
            li {
                padding: 10px;
                border-bottom: 1px solid #eee;
                background: #fff;
                a {
                    color: @mainATagClolor;
                }
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
                .dian-true {
                    display: none;
                }
                .dian-false {
                    width: 8px;
                    height: 8px;
                    margin-right: 5px;
                    border-radius: 50%;
                    background: red;
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
</style>
<template>
    <template v-if="loadState > 0">
        <div class="msg-box">
            <ul class="list">
                <li flex="box:first" v-for="item in list">
                    <a class="user" v-link="`/user/${item.author.loginname}`">
                        <div class="user-headimg" :style="{backgroundImage: `url(${item.author.avatar_url})`}"></div>
                    </a>
                    <div>
                        <div class="name">{{item.author.loginname}}
                            <time>{{item.create_at | formatDate}}</time>
                        </div>
                        <div flex="box:first">
                            <div flex="cross:center">
                                <div class="dian-true"></div>
                            </div>
                            <div v-if="item.type == 'at'">
                                在话题
                                <a v-link="`/topic/${item.topic.id}`">{{item.topic.title}}</a> 中 @了你

                            </div>
                            <div v-else>
                                回复你了的话题
                                <a v-link="`/topic/${item.topic.id}`">{{item.topic.title}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </template>
    <load v-else :tip="loadTip" :state="loadState"></load>
</template>
<script>
    import Tool from '../Tool'
    import mixins from '../mixins'
    export default {
        mixins: [mixins('myMessages')],
        route: {
            data() {
                var {accesstoken} = this.user
                Tool.get('/api/v1/messages', {mdrender: false, accesstoken}, ({data}) => {
                    var {hasnot_read_messages, has_read_messages} = data
                    Array.prototype.push.apply(hasnot_read_messages, has_read_messages)
                    this.SET_LIST(hasnot_read_messages)
                }, this.GET_DATA_ERROR)
            }
        }
    }
</script>