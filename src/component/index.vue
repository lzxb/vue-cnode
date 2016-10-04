<style lang="less" scoped rel="stylesheet/less">
    @import "../less/config";
    .list {
        li {
            position: relative;
            margin-bottom: 25px;
            box-shadow: 1px 1px 6px #b5b5b5;
            background: #fff;
            a {
                display: block;
            }
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
        <li v-for="item in list" track-by="$index">
            <a v-link="'/topic/' + item.id">
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
                            <div class="tab" v-if="item.tab">#{{item.tab | tabName}}#</div>
                        </div>
                    </div>
                </div>
                <div class="tit">{{item.title}}</div>
                <div class="images count-{{item.content | getTextImgUrl | length}}" flex="box:mean">
                    <div class="item" v-for="imgurl in item.content | getTextImgUrl">
                        <div class="pic">
                            <img src="../images/transparent.png" :style="{backgroundImage: 'url(' + imgurl + ')'}" alt="">
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
                            <img src="../images/transparent.png" alt="" :style="{backgroundImage: 'url(' + item.author.avatar_url + ')'}">
                        </div>
                        <time class="time">{{item.last_reply_at | formatDate}}</time>
                    </div>
                </div>
            </a>
        </li>
    </ul>
    <div v-on:click="loadNext" v-el:load>
        <load :tip="loadTip" :state="loadState"></load>
    </div>
</template>
<script>
    const NAME = 'index'
    import Tool from '../Tool'
    import mixins from '../mixins'
    import store from '../vuex/store'

    store.dispatch(`${NAME}ADD_CUSTOM_KEY`, {
        page: 1 //加载到第几页
    })
    export default {
        mixins: [mixins(NAME)],
        route: {
            data() {
                if(this.page <= 1) { //自动下载第一页数据
                    this.getList()
                }
            },  
            canReuse({to}) {
                this.RESET(to.path)
                if(this.breakAjax) this.breakAjax() //中断之前的请求，防止执行回调方法
                delete this.breakAjax //清除掉上个页面的ajax请求
                return true
            }
        },
        methods: {
            loadNext() {
                this.getList()
            },
            getList() {
                if(this.breakAjax) return false //请求未结束，防止重复请求
                this.GET_DATA_START()
                var {page = 1} = this.state
                var {tab = ''} = this.$route.query
                var limit = 10
                var mdrender = false

                this.breakAjax = Tool.get('/api/v1/topics', {page, tab, limit, mdrender}, ({data: list}) => {
                    this.PULL_PAGE_LIST_PUSH(list)
                    this.SET_CUSTOM_KEY({page: page + 1})
                }, this.GET_DATA_ERROR, () => {
                    delete this.breakAjax
                })
            }
        }
    }
</script>