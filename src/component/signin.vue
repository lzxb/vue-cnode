<style lang="less" scoped>
    @import "../less/config";
    .accesstoken {
        padding: 100px 20px;
        input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            padding: 5px 10px;
            margin-top: 20px;
            line-height: 28px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            &:focus {
                outline: none;
            }
        }
    }
    
    .submit {
        padding: 0 20px;
        .btn {
            line-height: 38px;
            text-align: center;
            border-radius: 5px;
            font-size: 14px;
            color: @mainStressColor;
            background: #fff;
        }
    }
</style>
<template>
    <div class="accesstoken">
        <input type="text" placeholder="Access Token" v-model="from.accesstoken">
    </div>
    <div class="submit">
        <div class="btn" v-on:click="submit">{{submitName}}</div>
    </div>
</template>
<script>
    import Tool,{actions} from '../Tool'
    import components from './common/'

    export default {
        vuex: {
            actions
        },
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
            submit: function () {
                if(this.submitState) return false
                this.submitName = '正在登录'
                this.submitState = true

                var errorCB = () => {
                    this.submitName = '登录失败'
                    this.submitState = false
                }

                Tool.post('/api/v1/accesstoken ', this.from, (res) => {
                    if(res.success) {
                        return Tool.get(`/api/v1/user/${res.loginname}`, {}, ({data}) => {
                            data.accesstoken = this.from.accesstoken;
                            this.signin(data)
                            this.$router.go('/')
                        }, errorCB)
                    }
                    errorCB()

                }, errorCB)
            }
        }
    }
</script>