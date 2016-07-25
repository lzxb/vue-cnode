<template>
    <ul class="list" v-cloak>
        <li v-for="o in data">
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
                    <div class="pic" :style="{backgroundImage: `url(${imgurl})`}"></div>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
    import index from './index'
    export default index
</script>

<style lang="less" scoped rel="stylesheet/less">
    @import "./index";
</style>