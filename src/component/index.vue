<style lang="less" scoped rel="stylesheet/less">
    @import "../css/config";
    .list {
        li {
            position: relative;
            margin-bottom: 25px;
            box-shadow: 1px 1px 6px #b5b5b5;
            background: #fff;
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
        .tit {
            padding: 10px;
            color: @mainStressColor;
        }
    }
    
    .images {
        padding: 5px;
        .item {
            padding: 5px;
        }
        .pic,
        img {
            width: 100%;
        }
        .pic {
            overflow: hidden;
            border-radius: 5px;
            border: 1px solid darken(@shallow, 5%);
            background: @shallow;
        }
        img {
            background-size: cover;
            background-position: center center;
        }
    }
    
    .expand {
        padding: 10px 0;
        border-top: 1px solid darken(@shallow, 5%);
        text-align: center;
        .item {
            padding: 0 10px;
            line-height: 20px;
            text-align: center;
            border-right: 1px solid darken(@shallow, 5%);
            &:last-of-type {
                border: none;
            }
            .iconfont {
                color: #aaa;
            }
            .num,
            .time {
                padding-left: 3px;
                font-size: 12px;
                color: #aaa;
            }
            .pic,
            img {
                width: 16px;
                height: 16px;
                background: darken(@shallow, 10%);
                background-size: cover;
                background-position: center center;
            }
            .pic {
                overflow: hidden;
                border-radius: 50%;
            }
        }
    }
</style>
<template>
    <ul class="list" v-cloak>
        <li v-for="o in data"  track-by="id">
            <div class="typeicon" flex v-if="o.top || o.good">
                <div class="icon" v-if="o.top">
                    <i class="iconfont icon-zhiding"></i>
                </div>
                <div class="icon" v-if="o.good">
                    <i class="iconfont icon-jinghua"></i>
                </div>
            </div>
            <div class="user" flex="box:first">
                <div class="headimg">
                    <div class="pic">
                        <img :src="o.author.avatar_url" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="name">{{o.author.loginname}}</div>
                    <div flex>
                        <time class="time">发表于{{o.create_at | formatDate}}</time>
                        <a class="tab" v-link="`/?tab=${o.tab}`" v-if="o.tab">#{{o.tab | tabName}}#</a>
                    </div>
                </div>
            </div>
            <div class="tit">{{o.title}}</div>
            <div class="images count-{{o.content | getTextImgUrl | length}}" flex="box:mean">
                <div class="item" v-for="imgurl in o.content | getTextImgUrl">
                    <div class="pic">
                        <img :src="transparent" :style="{backgroundImage: `url(${imgurl})`}" alt="">
                    </div>
                </div>
            </div>
            <div class="expand" flex="box:mean">
                <div class="item click" flex="main:center cross:center">
                    <i class="iconfont icon-chakan"></i>
                    <div class="num">{{o.visit_count > 0 ? o.visit_count : '暂无阅读'}}</div>
                </div>
                <div class="item reply" flex="main:center cross:center">
                    <i class="iconfont icon-pinglun"></i>
                    <div class="num">{{o.reply_count > 0 ? o.reply_count : '暂无评论'}}</div>
                </div>
                <div class="item last-reply" flex="main:center cross:center">
                    <div class="pic">
                        <img :src="transparent" alt="" :style="{backgroundImage: `url(${o.author.avatar_url})`}">
                    </div>
                    <time class="time">{{o.last_reply_at | formatDate}}</time>
                </div>
            </div>
        </li>
    </ul>
    <div v-on:click="loadNext">
        <load v-ref:load :tip="loadTip" :state="loadState"></load>
    </div>
</template>
<script>
import Tool from '../Tool'
import components from './common/'
import transparent from '../images/transparent.png'
 
export default {
    components,
    data() {
        return {
            loadState: 0,
            loadTip: '正在加载中',
            dataBtn: true, //true允许加载数据， false不运行加载数据
            data: [],
            success: false,
            transparent,
            query: {
                tab: 'all',
                page: 1,
                limit: 20,
                mdrender: true
            }
        }
    },
    methods: {
        loadNext: function () {
            this.dataBtn = true
        }
    },
    route: {
        data: function () {
            this.timer = setInterval(() => {
                if(Tool.testMeet(this.$refs.load.$el) && this.dataBtn) {
                    this.dataBtn = false
                    this.loadState = 0
                    this.loadTip = '正在加载中...'
                    Tool.get('/api/v1/topics', this.query, ({data}) => {
                        this.loadState = 1
                        this.loadTip = '上拉加载更多'
                        data.map((item) => this.data.push(item))
                        this.query.page++
                        this.dataBtn = true
                    }, () => {
                        this.loadState = -1
                        this.loadTip = '加载失败'
                        this.dataBtn = false
                    })
                }

            }, 30)


        }
    }
}
</script>