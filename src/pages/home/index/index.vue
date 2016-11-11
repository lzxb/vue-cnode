<style lang="less" scoped>
    @import "../../../less/config";
    .user {
        position: relative;
        height: 180px;
        background-image: url(./headimg-bg.jpg);
        background-position: center center;
        background-size: cover;
        .headimg {
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 1;
            width: 120px;
            height: 120px;
            margin: 0 0 -40px -60px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background-color: #eee;
            background-size: cover;
            background-position: center center;
        }
    }
    .user-name {
        padding: 40px 0 50px;
        line-height: 32px;
        text-align: center;
    }
    .nav {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            border-bottom: 1px solid #eee;
            background: #fbfbfb;
            &:first-of-type {
                border-top: 1px solid #eee;
            }
        }
        a {
            padding: 5px 10px;
            line-height: 28px;
            .icon {
                width: 25px;
                .iconfont {
                    color: #aaa;
                }
            }
            .text {
                font-size: 13px;
                color: @text;
            }
            .icon-arrow-right {
                color: #ccc;
            }
        }
    }
</style>
<template>
    <div>
        <v-header title="个人中心"></v-header>
        <v-content>
            <div class="user">
                <div class="headimg" :style="{backgroundImage: 'url(https://avatars1.githubusercontent.com/u/8424643?v=3&s=460)'}"></div>
            </div>
            <div class="user-name">狼族小狈</div>
            <nav class="nav">
                <li>
                    <router-link to="/" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-edit"></i>
                        </div>
                        <div class="text">发表主题</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-msg"></i>
                        </div>
                        <div class="text">我的消息</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
            </nav>
            <div style="height: 50px;"></div>
            <nav class="nav">
                <li>
                    <router-link to="/" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-about"></i>
                        </div>
                        <div class="text">关于</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" flex="box:justify">
                        <div class="icon" flex="cross:center">
                            <i class="iconfont icon-setting"></i>
                        </div>
                        <div class="text">设置</div>
                        <div class="arrow">
                            <i class="iconfont icon-arrow-right"></i>
                        </div>
                    </router-link>
                </li>
            </nav>
            <div style="height: 50px;"></div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>