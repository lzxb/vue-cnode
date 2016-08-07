<style lang="less" scoped rel="stylesheet/less">
    @import "./index";
</style>
<script>
    import index from './index'
    export default index
</script>
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
                    <time class="time">发表于{{o.create_at | formatDate}}</time>
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
                    <div class="num">{{o.visit_count}}</div>
                </div>
                <div class="item reply" flex="main:center cross:center">
                    <i class="iconfont icon-pinglun"></i>
                    <div class="num">{{o.reply_count}}</div>
                </div>
                <!--<div class="item last-reply" flex>
                    <div class="pic">
                        <img :src="transparent" alt="">
                    </div>
                    <div class="name">{{o.author.loginname}}</div>
                    <time class="time">{{o.last_reply_at | formatDate}}</time>
                </div>-->
            </div>
        </li>
    </ul>
</template>