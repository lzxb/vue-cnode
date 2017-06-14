<template>
  <div>
    <v-header title="主题">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content style="bottom: 0;" v-route-scroll="{ path: 'topic-detail', name: 'content' }">
      <v-loading v-if="detail.loading"></v-loading>
      <v-data-null v-if="!detail.existence" msg="话题不存在"></v-data-null>
      <template v-if="!detail.loading && detail.existence">
        <div class="common-typeicon" flex v-if="data.top || data.good">
          <div class="icon" v-if="data.good">
            <i class="iconfont icon-topic-good"></i>
          </div>
          <div class="icon" v-if="data.top">
            <i class="iconfont icon-topic-top"></i>
          </div>
        </div>

        <ul class="re-list">
          <!-- 楼主信息 start -->
          <li flex="box:first">
            <div class="headimg">
              <router-link class="pic" :to="'/user/' + author.loginname" :style="{ backgroundImage: 'url(' + author.avatar_url + ')' }"></router-link>
            </div>
            <div class="bd">
              <div flex>
                <router-link flex-box="0" :to="'/user/' + author.loginname">{{ author.loginname }}</router-link>
                <time flex-box="1">{{ data.create_at | formatDate }}</time>
                <div flex-box="0" class="num">#楼主</div>
              </div>
            </div>
          </li>
          <!-- 楼主信息 end -->
          <!-- 主题信息 start -->
          <li>
            <div class="datas">
              <div class="tit">{{ data.title }}</div>
              <div class="bottom" flex="main:center">
                <div class="item click" flex="main:center cross:center">
                  <i class="iconfont icon-click"></i>
                  <div class="num">{{ data.visit_count }}</div>
                </div>
                <div class="item reply" flex="main:center cross:center">
                  <i class="iconfont icon-comment"></i>
                  <div class="num">{{ data.reply_count }}</div>
                </div>
              </div>
            </div>
            <div class="markdown-body" v-html="data.content"></div>
          </li>
          <!-- 主题信息 end -->
          <li class="replies-count" v-if="replies.length">
            共(<em>{{ replies.length }}</em>)条回复
          </li>
          <!-- 主题评论 start -->
          <li v-for="(item, $index) in replies">
            <div flex="box:first">
              <div class="headimg">
                <router-link class="pic" :to="'/user/' + item.author.loginname" :style="{ backgroundImage: 'url(' + item.author.avatar_url + ')' }"></router-link>
              </div>
              <div class="bd">
                <div flex>
                  <router-link flex-box="0" :to="'/user/' + item.author.loginname">{{ item.author.loginname }}</router-link>
                  <time flex-box="1">{{ item.create_at | formatDate }}</time>
                  <div flex-box="0" class="num">#{{ $index + 1 }}</div>
                </div>
                <div class="markdown-body" v-html="item.content"></div>
                <div class="bottom" flex="dir:right cross:center">
                  <div class="icon" @click="commentShow(item, $index)">
                    <i class="iconfont icon-comment-topic"></i>
                  </div>
                  <div class="icon" :class="{fabulous: testThing(item.ups)}" v-if="item.author.loginname !== user.loginname" @click="fabulousItem(item)">
                    <i class="iconfont icon-comment-fabulous"></i>
                    <em v-if="item.ups.length">{{ item.ups.length }}</em>
                  </div>
                </div>
              </div>
            </div>
            <reply-box v-if="detail.commentId === item.id" :loginname="item.author.loginname" :replyId="item.id" @success="$vuet.fetch('topic-detail')"></reply-box>
          </li>
          <!-- 主题评论 end -->

        </ul>
        <div class="reply" v-if="user.id">
          <reply-box @success="$vuet.fetch('topic-detail')"></reply-box>
        </div>
        <div class="tip-login" v-if="!user.id">
          你还未登录，请先
          <router-link to="/login">登录</router-link>
        </div>
      </template>
    </v-content>
  </div>
</template>
<script>
  import util from 'util'
  import { mapState } from 'vuex'
  import replyBox from './reply-box'
  import { mapModules, mapRules } from 'vuet'

  export default {
    mixins: [
      mapModules({ detail: 'topic-detail' }),
      mapRules({ route: 'topic-detail' })
    ],
    components: { replyBox },
    computed: {
      ...mapState({ user: (state) => state.user }),
      data () {
        return this.detail.data
      },
      author () {
        return this.detail.data.author
      },
      replies () {
        return this.detail.data.replies
      }
    },
    methods: {
      testThing (ups) { // 验证是否点赞
        return ups.indexOf(this.user.id || '') > -1
      },
      fabulousItem ({ ups, id }) { // 点赞
        if (!this.user.accesstoken) return this.$router.push('/login')
        var index = ups.indexOf(this.user.id)
        if (index > -1) {
          ups.splice(index, 1)
        } else {
          ups.push(this.user.id)
        }
        util.post(`reply/${id}/ups`)
      },
      commentShow (item) { // 显示隐藏回复框
        if (!this.user.accesstoken) return this.$router.push('/login')
        this.detail.commentId = this.detail.commentId === item.id ? null : item.id
      }
    }
  }

</script>
<style lang="less" scoped>
  @import '../../../less/config';
  .datas {
    padding: 10px;
    border-bottom: 1px solid #eee;
    .tit {
      position: relative;
      padding: 10px 0;
      margin: 0;
      line-height: 24px;
      font-weight: bold;
      font-size: 22px;
      text-align: center;
      color: @text;
    }
    .bottom {
      .item {
        padding: 0 5px;
        color: #666;
        .iconfont {
          padding-right: 3px;
        }
      }
    }
  }


  .re-list {
    li {
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
    .headimg {
      padding-right: 10px;
      .pic {
        overflow: hidden;
        display: block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid #ddd;
        background-color: #eee;
        background-position: center center;
        background-size: cover;
      }
    }
    time {
      padding-left: 10px;
      font-size: 12px;
    }
    .num {
      font-size: 13px;
    }
    .bottom {
      .icon {
        position: relative;
        padding: 5px 10px;
        &.fabulous {
          color: @main;
        }
        em {
          font-size: 13px;
          font-style: normal;
        }
      }
    }
    .markdown-body {
      padding: 10px 0;
    }
    .replies-count {
      border-left: 5px solid @main;
      em {
        font-style: normal;
        color: @main;
      }
    }
  }


  .reply {
    padding: 50px 10px;
  }


  .tip-login {
    padding: 100px;
    text-align: center;
  }
</style>
