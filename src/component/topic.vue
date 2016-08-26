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