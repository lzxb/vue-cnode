<style lang="less" scoped>
    @import "../less/config";
    .topic {
        background: #fff;
        .tit {
            padding: 20px 10px 10px 10px;
            font-size: 18px;
            color: @mainStressColor;
        }
        .article {
            padding: 10px;
        }
    }
    
    .user-view {
        position: relative;
        padding: 10px;
        border-bottom: 1px solid @shallow;
        .tab {
            color: @mainATagClolor;
        }
        .typeicon {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
            height: 80px;
            .icon {
                padding: 20px 5px;
            }
            .iconfont {
                display: block;
                font-size: 34px;
                transform: rotate(35deg);
            }
            .icon-jinghua {
                color: @goodIconColor;
            }
            .icon-zhiding {
                color: @topIconColor;
            }
        }
        .user {
            padding: 10px;
            .headimg {
                padding-right: 10px;
                .pic {
                    overflow: hidden;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: darken(@shallow, 10%);
                }
            }
            .name {
                font-size: 16px;
                color: @mainStressColor;
            }
            .time {
                line-height: 20px;
                font-size: 12px;
                color: darken(@shallow, 40%);
            }
            .tab {
                padding-left: 5px;
                line-height: 20px;
                font-size: 12px;
            }
        }
    }
    
    .re-tit {
        padding: 5px 10px;
        line-height: 28px;
        border-top: 1px solid darken(@shallow, 10%);
        border-bottom: 2px solid @mainATagClolor;
        background: @shallow;
        em {
            font-style: normal;
        }
    }
    
    .re-list {
        li {
            padding: 10px;
            border-bottom: 1px solid @shallow;
        }
        .headimg {
            padding-right: 10px;
            .pic {
                overflow: hidden;
                display: block;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: @shallow;
            }
        }
        time {
            padding-left: 10px;
            font-size: 12px;
        }
        .num {
            font-size: 13px;
        }
        .content {
            padding: 10px 0;
            font-size: 13px;
            font-family: inherit;
            color: inherit;
        }
        .bottom {
            .icon {
                position: relative;
                padding: 5px 10px;
                &.count {
                    color: @mainATagClolor;
                }
                em {
                    font-size: 13px;
                    font-style: normal;
                }
            }
        }
    }
    
    .re-topic {
        padding: 20px 10px;
    }
</style>
<template>
    <template v-if="loadState > 0">
        <div class="topic">
            <div class="user-view">
                <div class="typeicon" flex v-if="view.top || view.good">
                    <div class="icon" v-if="view.top">
                        <i class="iconfont icon-zhiding"></i>
                    </div>
                    <div class="icon" v-if="view.good">
                        <i class="iconfont icon-jinghua"></i>
                    </div>
                </div>
                <div class="user" flex="box:first">
                    <div class="headimg">
                        <div class="pic">
                            <img :src="view.author.avatar_url" alt="">
                        </div>
                    </div>
                    <div class="box">
                        <div class="name">{{view.author.loginname}}</div>
                        <div flex>
                            <time class="time">发表于{{view.create_at | formatDate}}</time>
                            <div class="tab" v-if="view.tab">#{{view.tab | tabName}}#</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tit">{{view.title}}</div>
            <article class="markdown-body article">{{{view.content}}}</article>
            <div class="re-tit" v-if="view.replies.length">共<em>{{view.replies.length}}条回复</em></div>
            <ul class="re-list">
                <li flex="box:first" v-for="item in view.replies">
                    <div class="headimg">
                        <a class="pic" v-link="'/user/' + item.author.loginname">
                            <img :src="item.author.avatar_url" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div flex>
                            <a flex-box="0" v-link="'/user/' + item.author.loginname">{{item.author.loginname}}</a>
                            <time flex-box="1">{{item.create_at | formatDate}}</time>
                            <div flex-box="0" class="num">#{{$index + 1}}</div>
                        </div>
                        <div class="content markdown-body">{{{item.content}}}</div>
                        <div class="bottom" flex="dir:right cross:center">
                            <div class="icon" v-on:click="reTa($index)">
                                <i class="iconfont icon-huifu"></i>
                            </div>
                            <div class="icon" 
                                :class="{count: testThing(item.ups)}" 
                                v-on:click="toggleThing(item)" 
                                v-if="item.author.loginname !== user.loginname"
                            >
                                <i class="iconfont icon-dianzan"></i>
                                <em v-if="item.ups.length">{{item.ups.length}}</em>
                            </div>
                        </div>
                        <topic-reply 
                            v-if="item.editState" 
                            :topic_id="view.id" 
                            :reply_id="item.id" 
                            :accesstoken="user.accesstoken" 
                            :loginname="item.author.loginname"
                            :success="getData"
                            ></topic-reply>
                    </div>
                </li>
            </ul>
            <div class="re-topic" v-if="user.accesstoken">
                <topic-reply 
                    :accesstoken="user.accesstoken" 
                    :topic_id="view.id"
                    :success="getData"
                >
                </topic-reply>
            </div>
        </div>
    </template>
    <load v-else :tip="loadTip" :state="loadState"></load>

</template>
<script>
    const NAME = 'topic'
    import Vue from 'vue'
    import Tool from '../Tool'
    import mixins from '../mixins'
    import store from '../vuex/store'

    /**
     * 更新点赞状态
     */
    store._mutations[`${NAME}SET_THING_STATE`] = function (state, index, id) { //设置点赞的状态
        var {ups} = state[NAME].view.replies[index]
        var index = ups.indexOf(id)
        if(index > -1) {
            ups.splice(index, 1)
        } else {
            ups.push(id)
        }
    }
    /**
     * 显示回复TA
     */
    store._mutations[`${NAME}RE_TA_EDIT`] = function (state, index) { //显示回复框
        var item = state[NAME].view.replies[index]
        Vue.set(item, 'editState', !item.editState)
    }

    export default {
        mixins: [mixins(NAME)],
        route: {
            data() { 
                this.getData()
            },
        },
        methods: {
            getData(callback = () => {}) {
                var {id} = this.$route.params
                Tool.get(`/api/v1/topic/${id}`, {}, ({data}) => {
                    if(data) {
                        this.GET_DATA_VIEW(data)
                    } else {
                        this.GET_DATA_ERROR({loadTip: '主题不存在'})
                    }
                }, this.GET_DATA_ERROR, callback)
            },
            testThing(ups) { //验证是否点赞
                return ups.indexOf(this.user.id || '') > -1
            },
            toggleThing(item) { //点赞

                if(!this.user.loginname) {
                    return this.$router.go('/signin') //未登录，先去登录
                }
                var index = this.view.replies.indexOf(item)
                this.$store.dispatch(`${NAME}SET_THING_STATE`, index, this.user.id)
                Tool.post(`/api/v1/reply/${item.id}/ups`, {accesstoken: this.user.accesstoken})
            },
            reTa(index) {
                if(!this.user.loginname) {
                    return this.$router.go('/signin') //未登录，先去登录
                }
                this.$store.dispatch(`${NAME}RE_TA_EDIT`, index)
            }
        },
        events: {
            reGo(callback) {
                this.getData(callback)
            }
        }
    }
</script>