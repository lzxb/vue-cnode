<style lang="less" scoped rel="stylesheet/less">
    @import "../../less/config";
    .data-load {
        .msg {
            line-height: 70px;
            text-align: center;
            font-size: 14px;
        }
    }
    
    .data-load-true {
        margin: 20px auto 20px auto;
        position: relative;
        animation: rotate-forever 1s infinite linear;
        height: 30px;
        width: 30px;
        border: 4px solid @mainATagClolor;
        border-right-color: transparent;
        border-radius: 50%;
        .msg {
            display: none;
        }
    }
    
    @keyframes rotate-forever {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>
<template>
    <div class="data-load" :class="{'data-load-true' : state == 0}">
        <div class="msg">{{tip}}</div>
    </div>
</template>
<script>
    export default {
        props: {
            state: {
                type: Number, //参数类型是数字
                default: 0, //0是正在加载中，1是加载成功， -1是加载失败
                validator(val) {
                    return [-1, 0, 1].indexOf(val) > -1
                }
            },
            tip: {
                type: String,
                default : '正在加载中'
            }
        }
    }
</script>