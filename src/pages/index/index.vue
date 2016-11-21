<style lang="less" scoped>
    @import "../../less/config";
    .nav {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        border-bottom: 1px solid #ddd;
        ul {
            overflow: hidden;
            padding: 0;
            margin: 0;
            li {
                position: relative;
                list-style: none;
                line-height: 49px;
                text-align: center;
            }
            a {
                text-decoration: none;
                font-size: 14px;
                color: lighten(@text, 50%);
            }
            .active {
                &:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    z-index: 1;
                    height: 3px;
                    background: @main;
                }
                a {
                    color: @text;
                }
            }
        }
    }
    
    .list {
        overflow: hidden;
        padding: 0;
        margin: 0;
        background: #eee;
        li {
            padding: 15px;
            margin-bottom: 15px;
            list-style: none;
            background: #fff;
        }
        .top {
            height: 40px;
            .headimg {
                overflow: hidden;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                img {
                    border: none;
                }
            }
            .box {
                padding-left: 5px;
                strong {
                    line-height: 24px;
                    font-size: 16px;
                    font-weight: normal;
                    color: darken(@text, 10%);
                }
                time {
                    line-height: 16px;
                    font-size: 12px;
                    font-style: normal;
                    color: #aaa;
                }
            }
        }
        .tit {
            padding: 5px 0;
            line-height: 22px;
            font-size: 16px;
            color: @text;
        }
    }
</style>
<template>
    <div>
        <nav class="nav">
            <ul flex="box:mean">
                <li :class="{ active: !this.$route.query.tab }">
                    <router-link to="/">首页</router-link>
                </li>
                <li :class="{ active: this.$route.query.tab == 'good' }">
                    <router-link to="/?tab=good">精华</router-link>
                </li>
                <li :class="{ active: this.$route.query.tab == 'share' }">
                    <router-link to="/?tab=share">分享</router-link>
                </li>
                <li :class="{ active: this.$route.query.tab == 'ask' }">
                    <router-link to="/?tab=ask">问答</router-link>
                </li>
                <li :class="{ active: this.$route.query.tab == 'job' }">
                    <router-link to="/?tab=job">招聘</router-link>
                </li>
            </ul>
        </nav>
        <v-content v-scroll-record>
            <ul class="list">
                <li v-for="item in list" key="item.id">
                    <router-link :to="'/topic/' + item.id">
                        <div class="top" flex="box:first">
                            <div class="headimg" flex="cross:center">
                                <img width="100%" height="100%" :src="item.author.avatar_url" alt="">
                            </div>
                            <div class="box" flex="dir:top">
                                <strong>{{ item.author.loginname }}</strong>
                                <time>{{ item.create_at | formatDate }}</time>
                            </div>
                        </div>
                        <div class="tit">
                            {{ item.title }}
                        </div>
                    </router-link>
                </li>
            </ul>
            <v-loading :complete="complete" :loading="loading" @seeing="seeing"></v-loading>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import util from 'util'
    import pullList from 'pull-list'

    export default {
        mixins: [pullList],
        methods: {
            _pullList(){
                var { page, $route } = this
                var { tab = 'all' } = $route.query
                return {
                    url: '/api/v1/topics',
                    data: { page, tab }
                }
            }
        }
    } 
</script>