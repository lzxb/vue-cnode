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
        .msg {
            padding: 5px 10px;
            line-height: 26px;
            color: red;
        }
    }
</style>
<template>
    <div class="reply-box">
        <div class="text"><textarea :placeholder="placeholder" v-model="content"></textarea></div>
        <div flex="main:right">
            <div class="msg">{{error_msg}}</div>
            <div flex-box="0">
                <button class="btn" v-on:click="submit(item)">{{btnname}}</button>
            </div>
        </div>
    </div>
</template>
<script>
    import Tool from '../../Tool'
    export default {
        props: {
            placeholder: { //输入框提示内容
                type: String,
                default: ''
            },
            reply_id: { //回复id
                type: String,
                default: ''
            },
            topic_id: { //主题id
                type: String,
                required: true
            },
            accesstoken: { //用户验证
                type: String,
                required: true
            }
        },
        data: function () {
            return {
                content: '',
                btnname: '回复',
                error_msg: ''
            }
        },
        methods: {
            submit: function () {
                this.btnname = '回复中...'
                this.error_msg = ''
                var {reply_id, topic_id, accesstoken, content} = this
                
                var text = content += '\n\r<br><br>来自<a href="https://lzxb.github.io/vue-cnode/" target="_blank">vue-cnode手机版</a>';
                Tool.post(`/api/v1//topic/${topic_id}/replies`, {reply_id, accesstoken, content: text}, ({success, error_msg}) => {
                    this.content = ''
                    this.btnname = '回复'
                    if(!success) {
                        this.error_msg = error_msg
                    }
                }, () => {
                    this.btnname = '回复失败'
                })
            }
        }
    }
</script>