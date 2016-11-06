<style lang="less" scoped>
    @import "../../less/config";
    .form {
        width: 80%;
        padding: 0 10%;
        margin-top: -50px;
        .line {
            padding: 20px 0;
        }
        .text {
            box-sizing: border-box;
            width: 100%;
            padding: 5px 10px;
            line-height: 28px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 14px;
        }
        .btn {
            width: 100%;
            line-height: 38px;
            border-radius: 5px;
            border: 1px solid darken(@main, 3%);
            font-size: 14px;
            color: #fff;
            background: @main;
        }
    }
</style>
<template>
    <div>
        <v-header title="登录">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content flex="main:center cross:center" style="bottom: 0;">
            <form class="form" v-on:submit.prevent="submit">
                <div class="line">
                    <input class="text" type="text" placeholder="Access Token" v-model="form.accesstoken">
                </div>
                <div class="line">
                    <button class="btn">{{ status ? '正在登录中' : '登录' }}</button>
                </div>
            </form>
        </v-content>
    </div>
</template>
<script>
    import util from 'util'
    import is from 'is'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                form: {
                    accesstoken: ''
                },
                error_msg: '', //错误提示
                status: false //true正在提交， false还没提交
            }
        },
        methods: {
            ...mapActions(['SIGNIN']),
            submit () {
                if (this.status) return
                this.status = true
                util.post('/api/v1/accesstoken', this.form, (res) => {

                    if (is.object(res)) {
                        if (res.success) {
                            this.error_msg = '登录成功'
                            this.SIGNIN({
                                avatar_url: res.avatar_url,
                                id: res.id,
                                loginname: res.loginname,
                                accesstoken: this.form.accesstoken
                            })
                            this.$router.go(-1)
                        } else {
                            this.error_msg = res.error_msg
                        }
                    } else {
                        this.error_msg = '登录失败'
                    }

                    this.status = false

                }, () => {
                    this.error_msg = '登录失败'
                    this.status = false
                })
            }
        }
    }
</script>