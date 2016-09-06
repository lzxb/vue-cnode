<style lang="less" scoped rel="stylesheet/less">
    @import "../../less/config";
    .reply-box {
        .text {
            padding: 5px 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid @shallow;
            textarea {
                box-sizing: border-box;
                width: 100%;
                line-height: 24px;
                border: none;
                font-size: 13px;
                resize: none;
                &:focus {
                    outline: none;
                }
            }
        }
        .btn {
            padding: 5px 30px;
            line-height: 24px;
            border-radius: 5px;
            border: 1px solid darken(@mainATagClolor, 10%);
            font-size: 14px;
            color: #fff;
            background: @mainATagClolor;
            &:focus {
                outline: none;
            }
        }
    }
</style>
<template>
    <div class="reply-box">
        <div class="text"><textarea placeholder="@liygheart"></textarea></div>
        <div flex="main:right"><button class="btn" v-on:click="submitRe(item)">回复</button></div>
    </div>
</template>
<script>
    export default {
        props: {
            state: {
                type: Number, //参数类型是数字
                default: 0, //0是正在加载中，1是加载成功， -1是加载失败
                validator: function (val) {
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