<template>
  <div>
    <v-header title="登录">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content flex="main:center cross:center">
      <form class="form" @submit.prevent="submit">
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
  import utils from 'utils'
  import is from 'is'
  import { mapModules } from 'vuet'

  export default {
    mixins: [
      mapModules({ self: 'user-self' })
    ],
    data () {
      return {
        form: {
          accesstoken: ''
        },
        status: false // true正在提交， false还没提交
      }
    },
    methods: {
      async submit () {
        if (this.status) return
        if (!this.form.accesstoken) return utils.toast('请输入accesstoken')
        this.status = true
        try {
          const res = await this.self.login(this.form.accesstoken)
          if (is.object(res)) {
            if (res.success) {
              utils.toast('登录成功')
              this.$router.go(-1)
            } else {
              utils.toast(res.error_msg)
            }
          } else {
            utils.toast('登录失败')
          }
        } catch (e) {
          utils.toast('登录失败')
        }
        this.status = false
      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../../less/config";
  .content {
    bottom: 0
  }

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
