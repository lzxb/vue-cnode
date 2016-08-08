<style lang="less" scoped rel="stylesheet/less">
    @import "./index";
</style>
<template>
    <ul class="list" v-cloak>
        <li v-for="o in data">
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
                        <div class="tab" v-if="o.tab">#{{o.tab | tabName}}#</div>
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
</template>
<script>
    import index from './index'
    export default index
</script>