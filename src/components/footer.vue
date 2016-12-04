<style lang="less" scoped>
    @import "../less/config";
    .footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 50;
        height: 49px;
        text-align: center;
        border-top: 1px solid #ddd;
        ul {
            padding: 5px 0;
            margin: 0;
            li {
                list-style: none;
                a {
                    text-decoration: none;
                    color: @text;
                    i {
                        display: block;
                        line-height: 24px;
                    }
                    em {
                        line-height: 16px;
                        font-size: 13px;
                        font-style: normal;
                    }
                }
            }
            .active {
                i,
                em {
                    color: @main;
                }
            }
        }
    }
</style>
<template>
    <footer class="footer">
        <ul flex="box:mean">
            <template v-for="item in list">                
                <li :class="{ active: item.path == $route.path }">
                    <router-link :to="item.path">
                        <i class="iconfont" :class="[ item.icon ]"></i>
                        <em>{{ item.title }}</em>
                    </router-link>
                </li>
            </template>
        </ul>
    </footer>
</template>
<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                list: [
                    {
                        title: '首页',
                        path: '/',
                        icon: 'icon-index'
                    },
                    {
                        title: '发表',
                        path: '/topic/create',
                        icon: 'icon-edit'
                    },
                    {
                        title: '消息',
                        path: '/my/messages',
                        icon: 'icon-msg'
                    },
                    {
                        title: '我的',
                        path: '/my/home',
                        icon: 'icon-user'
                    }
                ]
            }
        }
    }
</script>