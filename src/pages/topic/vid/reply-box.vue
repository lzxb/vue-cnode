<style lang="less" scoped>
  @import '../../../less/config';
  .reply-box {
    .text {
      padding: 5px 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #eee;
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
      border: 1px solid darken(@main, 3%);
      font-size: 14px;
      color: #fff;
      background: @main;
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
    <form @submit.prevent="submit">
      <div class="text"><textarea :placeholder="loginname ? '@' + loginname : '发表你的看法...'" v-model="content"></textarea></div>
      <div flex="main:right">
        <div class="msg"></div>
        <div flex-box="0"> <button class="btn">{{ btnname }}</button> </div>
      </div>
    </form>
  </div>
</template>
<script>
  import util from 'util'
  export default {
    props: {
      replyId: { // 评论的评论id，如果没有则是对主题的评论
        type: String,
        default: ''
      },
      loginname: { // @ Ta
        type: String,
        default: ''
      }
    },
    data () {
      return {
        btnname: '回复',
        content: ''
      }
    },
    methods: {
      submit () { // 提交
        if (!this.content) return util.toast('请输入回复内容')
        this.btnname = '回复中...'
        var { replyId, content, loginname } = this
        var { vid } = this.$route.params
        if (replyId) {
          content = `[@${loginname}](/user/${loginname}) ${content}`
        }
        content += `


source [vue-cnode mobile 2.0](http://lzxb.name/vue-cnode/)`
        util.post(`topic/${vid}/replies`, { replyId, content }, ({ success, error_msg }) => {
          this.btnname = '回复'
          if (success) {
            this.content = ''
            this.$emit('success')
          } else {
            util.toast(error_msg)
          }
        }, () => {
          this.btnname = '回复失败'
        })
      }
    }
  }

</script>
