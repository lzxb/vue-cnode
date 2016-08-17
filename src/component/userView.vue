<style lang="less" scoped>
    @import "../less/config";
    .user {
        .user-bg {
            width: 100%;
            img {
                width: 100%;
            }
        }
        .headimg {
            overflow: hidden;
            position: relative;
            z-index: 2;
            margin-top: -42px;
            border-radius: 50%;
            border: 1px solid darken(@shallow, 10%);
            background: #fff;
            .pic {
                overflow: hidden;
                width: 80px;
                height: 80px;
                margin: 2px;
                border-radius: 50%;
            }
        }
        .name {
            margin: 20px 10px;
            font-size: 30px;
            font-weight: 500;
            color: @mainStressColor;
        }
        .score {
            width: 100%;
            font-size: 12px;
            div {
                padding: 10px;
            }
        }
    }

    .tab-nav {
        border-bottom: 1px solid @shallow;
        box-shadow: 0 0 5px darken(@shallow, 10%);
        background: #fff;
        li {
            line-height: 38px;
            text-align: center;
            border-right: 1px solid @shallow;
            font-size: 16px;
            color: @mainStressColor;
            &:last-of-type {
                border: none;
            }
            &.on {
                color: @mainATagClolor;
            }
        }
    }

    .list {
        li {
            padding: 10px;
            height: 50px;
            border-bottom: 1px solid @shallow;
            background: #fff;
            .head {
                .pic {
                    overflow: hidden;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                }
            }
            .main {
                padding-left: 10px;
                .con {
                    padding: 0 5px;
                    line-height: 30px;
                    font-size: 13px;
                }
                .line {
                    line-height: 20px;
                }
                .name {
                    color: darken(@mainTextColor, 10%);
                }
                time {
                    font-size: 12px;
                    color: lighten(@mainTextColor, 30%);
                }
            }
        }
    }
</style>
<template>
    <div>
        <div class="user" flex="dir:top cross:center">
            <div class="user-bg">
                <img src="../images/user-bg.png" alt="">
            </div>
            <div class="headimg">
                <div class="pic">
                    <img src="https://avatars.githubusercontent.com/u/8424643?v=3&s=120" alt="">
                </div>
            </div>
            <div class="name">1340641314</div>
            <div class="score" flex="main:justify">
                <div>积分：34345</div>
                <div>注册于：一年前</div>
            </div>
        </div>
        <ul class="tab-nav" flex="box:mean">
            <li class="on">回复</li>
            <li>主题</li>
        </ul>
        <ul class="list">
            <li flex="box:first" v-for="o in 10">
                <div class="head">
                    <div class="pic">
                        <img src="https://avatars.githubusercontent.com/u/8424643?v=3&s=120" alt="">
                    </div>
                </div>
                <div class="main" flex="dir:top box:first">
                    <div class="line" flex="box:last">
                        <div class="name">狼族小狈{{$index}}</div>
                        <time>一个月前</time>
                    </div>
                    <div class="con">表单表单表单表单表单表单表单表单表单表单表单表单</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bg: '用户信息'
            }
        }
    }
</script>