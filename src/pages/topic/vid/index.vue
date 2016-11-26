<style lang="less" scoped>
    @import '../../../less/config';

    .tit {
        position: relative;
        padding: 15px;
        margin: 0;
        line-height: 24px;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        color: @text;
        &:after {
            content: "";
            position: absolute;
            right: 10%;
            bottom: 0;
            left: 10%;
            z-index: 1;
            border-bottom: 1px solid #eee;
        }
    }
    
    .markdown-body {
        padding: 15px;
    }
</style>
<template>
    <div>
        <v-header title="主题">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content style="bottom: 0;">
            <h2 class="tit">{{title}}</h2>
            <div class="markdown-body" v-html="content"></div>
        </v-content>
    </div>
</template>
<script>
    import Vue from 'vue'
    import util from 'util'
    import { mapState } from 'vuex'
    import routeData from 'route-data'

    export default {
        mixins: [routeData],
        computed: mapState({ user: (state) => state.user}),
        routeData() {
            return {
                id: '',
                author_id: '',
                tab: "share",
                content: '',
                title: '',
                last_reply_at: '',
                good: false,
                top: false,
                reply_count: 0,
                visit_count: 0,
                create_at: '',
                author: {},
                replies: [],
                is_collect: false
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                var { vid } = this.$route.params
                util.get(`/api/v1/topic/${vid}`, {}, ({ data, success }) => {
                    if(success) return Object.assign(this.$data, data)
                })
            }
        }
    }
</script>