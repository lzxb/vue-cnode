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
    .error-msg {
        padding: 10px;
        color: red;
    }
</style>
<template>
    <v-header :title="title"></v-header>
    <div class="topic-create">
        <div class="item">
            <select v-model="from.tab">
                <option value="">请选择发表类型</option>
                <option value="share">分享</option>
                <option value="ask">问答</option>
                <option value="job">招聘</option>
             </select>
        </div>
        <div class="item">
            <input type="text" placeholder="标题字数 10 字以上" v-model="from.title">
        </div>
        <div class="item">
            <textarea placeholder="内容字数 30 字以上" v-model="from.content"></textarea>
        </div>
        <div class="error-msg" v-if="errorMsg">{{errorMsg}}</div>
        <div class="submit" v-on:click="submit">
            <div class="btn">{{submitName}}</div>
        </div>
    </div>
</template>
<script>
    const NAME = 'topicCreate'
    import Tool from '../Tool'
    import mixins from '../mixins'

    export default {
        mixins: [mixins(NAME)],
        data() {
            return {
                from: {
                    title: '', //标题
                    tab: '', //发表的板块
                    content: '', //内容
                    accesstoken: this.user.accesstoken
                },
                submitName: '发表主题',
                errorMsg: ''
            }
        },
        methods: {
            submit() {
                // 验证
                var {title, content, tab} = this.from
                if (title === '') {
                    return this.errorMsg = '标题不能为空';
                } else if (title.length < 5 || title.length > 100) {
                    return this.errorMsg = '标题字数太多或太少';
                } else if (!tab) {
                    return this.errorMsg = '必须选择一个版块';
                } else if (content === '') {
                    return this.errorMsg = '内容不可为空';
                }
                // end 验证
                console.log
                if(this.breakAjax) return
                this.breakAjax = Tool.post('/api/v1//topics', this.from, ({topic_id, error_msg}) => {

                    if(topic_id) {
                        this.$router.go(`/topic/${topic_id}`)
                    } else {
                        this.errorMsg = error_msg
                        this.submitName = '发表主题'
                    }

                    delete this.breakAjax
                }, () => {
                    delete this.breakAjax
                    this.submitName = '发表失败'
                })
            }
        }
    }
</script>