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
            <div class="re-tit">回复<em>{{view.replies.length}}</em></div>
            <ul class="re-list">
                <li flex="box:first" v-for="item in view.replies">
                    <div class="headimg">
                        <a class="pic" href="#">
                            <img :src="item.author.avatar_url" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div flex>
                            <a flex-box="0" href="#">{{item.author.loginname}}</a>
                            <time flex-box="1">{{item.create_at | formatDate}}</time>
                            <div flex-box="0" class="num">#{{$index + 1}}</div>
                        </div>
                        <div class="content markdown-body">{{{item.content}}}</div>
                        <div class="bottom" flex="dir:right cross:center">
                            <div class="icon" :class="{count: item.ups.length}">
                                <i class="iconfont icon-dianzan"></i>
                                <em v-if="item.ups.length">{{item.ups.length}}</em>
                            </div>
                            <div class="icon">
                                <i class="iconfont icon-huifu"></i>
                            </div>
                        </div>
                        <div class="reply-box" style="display: none;">
                            <div class="text"><textarea placeholder="@liygheart"></textarea></div>
                            <div flex="main:right"><button class="btn">回复</button></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </template>
    <load v-else :tip="loadTip" :state="loadState"></load>

</template>
<script>
    const NAME = 'topic'
    import Tool from '../Tool'
    import mixins from '../mixins'

    export default {
        mixins: [mixins(NAME)],
        route: {
            data() { 
                var {id} = this.$route.params
                Tool.get(`/api/v1/topic/${id}`, {}, ({data}) => {
                    if(data) {
                        this.GET_DATA_VIEW(data)
                    } else {
                        this.GET_DATA_ERROR({loadTip: '主题不存在'})
                    }
                }, this.GET_DATA_ERROR)
            },
        },
        methods: {
        }
    }
</script>