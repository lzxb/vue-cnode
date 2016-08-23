<style lang="less" scoped rel="stylesheet/less">
    @import "../less/config";
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
    <ul class="list">
        <li v-for="item in data" track-by="id">
            <div class="typeicon" flex v-if="item.top || item.good">
                <div class="icon" v-if="item.top">
                    <i class="iconfont icon-zhiding"></i>
                </div>
                <div class="icon" v-if="item.good">
                    <i class="iconfont icon-jinghua"></i>
                </div>
            </div>
            <div class="user" flex="box:first">
                <div class="headimg">
                    <div class="pic">
                        <img :src="item.author.avatar_url" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="name">{{item.author.loginname}}</div>
                    <div flex>
                        <time class="time">发表于{{item.create_at | formatDate}}</time>
                        <a class="tab" v-link="`/?tab=${item.tab}`" v-if="item.tab">#{{item.tab | tabName}}#</a>
                    </div>
                </div>
            </div>
            <a v-link="`/topic/${item.id}`">
                <div class="tit">{{item.title}}</div>
                <div class="images count-{{item.content | getTextImgUrl | length}}" flex="box:mean">
                    <div class="item" v-for="imgurl in item.content | getTextImgUrl">
                        <div class="pic">
                            <img :src="transparent" :style="{backgroundImage: `url(${imgurl})`}" alt="">
                        </div>
                    </div>
                </div>
                <div class="expand" flex="box:mean">
                    <div class="item click" flex="main:center cross:center">
                        <i class="iconfont icon-chakan"></i>
                        <div class="num">{{item.visit_count > 0 ? item.visit_count : '暂无阅读'}}</div>
                    </div>
                    <div class="item reply" flex="main:center cross:center">
                        <i class="iconfont icon-pinglun"></i>
                        <div class="num">{{item.reply_count > 0 ? item.reply_count : '暂无评论'}}</div>
                    </div>
                    <div class="item last-reply" flex="main:center cross:center">
                        <div class="pic">
                            <img src="../images/transparent.png" alt="" :style="{backgroundImage: `url(${item.author.avatar_url})`}">
                        </div>
                        <time class="time">{{item.last_reply_at | formatDate}}</time>
                    </div>
                </div>
            </a>
        </li>
    </ul>
    <div v-on:click="loadNext">
        <load v-ref:load :tip="loadTip" :state="loadState"></load>
    </div>
</template>
<script>
const NAME = 'index'
import Tool from '../Tool'
import mixins from '../mixins'


var initQuery = () => {
    return {
        tab: 'all',
        page: 1,
        limit: 10,
        mdrender: 10
    }
}

var query = initQuery()

export default {
    mixins: [mixins(NAME)]
}
</script>