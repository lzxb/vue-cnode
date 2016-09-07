<style lang="less" scoped>
    @import "../less/config";
    .topic-create {
        .item {
            padding: 10px 10px;
            border-bottom: 1px solid #eee;
            color: #444;
            *:focus {
                outline: none;
            }
        }
        .key {
            width: 40px;
            line-height: 28px;
            font-size: 14px;
            color: #999;
        }
        select {
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 28px;
            line-height: 28px;
            border-radius: 5px;
            border: none;
            font-size: 13px;
            color: #222;
            background: #fff;
        }
        input {
            box-sizing: border-box;
            width: 100%;
            line-height: 28px;
            font-size: 13px;
        }
        textarea {
            box-sizing: border-box;
            width: 100%;
            height: 200px;
            line-height: 24px;
            font-size: 13px;
            resize: none;
        }
        .submit {
            padding: 20px;
        }
        .btn {
            line-height: 38px;
            text-align: center;
            border-radius: 5px;
            font-size: 14px;
            color: #fff;
            background: @mainATagClolor;
        }
    }
</style>
<template>
    <div class="topic-create">
        <div class="item">
            <select name="tab">
                <option value="">请选择发表类型</option>
                <option value="share">分享</option>
                <option value="ask">问答</option>
                <option value="job">招聘</option>
             </select>
        </div>
        <div class="item">
            <input type="text" placeholder="标题字数 10 字以上" value="">
        </div>
        <div class="item">
            <textarea placeholder="内容字数 30 字以上"></textarea>
        </div>
        <div class="submit">
            <div class="btn">发表主题</div>
        </div>
    </div>
</template>
<script>
    import Tool from '../Tool'
    import mixins from '../mixins'

    export default {
        mixins: [mixins('signin')],
        data() {
            return {
                from: {
                    accesstoken: ''
                },
                submitName: '登录',
                submitState: false, //true正在提交， false未提交
            }
        },
        methods: {
            submit() {
            }
        }
    }
</script>