<style lang="less" scoped>
  form {
    height: 100%;
  }


  .title {
    padding: 5px 10px;
  }


  .select {
    padding: 5px 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    select {
      padding: 0;
      border-radius: 5px;
      background: none;
    }
  }


  .con {
    padding: 5px 10px;
    textarea {
      line-height: 24px;
    }
  }


  input,
  select,
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding: 0 5px;
    line-height: 28px;
    border: none;
    font-size: 14px;
    resize: none;
  }
</style>
<template>
  <div>
    <v-header title="发表">
      <a class="item" flex="main:center cross:center" slot="right" @click="submit">
        <i class="iconfont icon-edit"></i>
      </a>
    </v-header>
    <v-content>
      <form flex="dir:top" @submit.prevent="submit">
        <div class="title">
          <input type="text" placeholder="标题..." v-model="form.title">
        </div>
        <div class="select">
          <select v-model="form.tab">
                    <option value="">请选择</option>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                </select>
        </div>
        <div class="con" flex="dir:top" flex-box="1">
          <textarea flex-box="1" placeholder="内容..." v-model="form.content"></textarea>
        </div>
      </form>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import util from 'util'
  import routeData from 'route-data'
  import { mapState } from 'vuex'

  export default {
    mixins: [routeData],
    computed: mapState({ user: (state) => state.user }),
    routeData () {
      return {
        form: {
          topic_id: '', // 新建主题
          title: '', // 标题
          tab: '', // 发表的板块
          content: '' // 发表的内容
        }
      }
    },
    methods: {
      submit () {
        if (!this.user.id) return this.$router.push({ path: '/login' })
        var { form } = this

        if (!form.title) {
          return util.toast('标题不能为空')
        } else if (!form.tab) {
          return util.toast('选项不能为空')
        } else if (!form.content) {
          return util.toast('内容不能为空')
        }

        util.post('topics', this.form, ({ success, topic_id: topicId, error_msg }) => {
          if (success) {
            Object.assign(this.$data, this.$options.routeData())
            this.$router.push({ path: `/topic/${topicId}` })
          } else {
            util.toast(error_msg)
          }
        })
      }
    }
  }

</script>
