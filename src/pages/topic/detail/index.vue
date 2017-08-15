<template>
  <div>
    <v-header title="主题">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content style="bottom: 0;" v-vuet-scroll="{ path: 'topic-detail', name: 'content' }">
      <v-loading v-if="data.loading"></v-loading>
      <v-data-null v-if="!data.existence" msg="话题不存在"></v-data-null>
      <template v-if="!data.loading && data.existence">
        <div class="common-typeicon" flex v-if="topic.top || topic.good">
          <div class="icon" v-if="topic.good">
            <i class="iconfont icon-topic-good"></i>
          </div>
          <div class="icon" v-if="topic.top">
            <i class="iconfont icon-topic-top"></i>
          </div>
        </div>

        <ul class="re-list">
          <!-- 楼主信息 start -->
          <li flex="box:first">
            <div class="headimg">
              <router-link class="pic" :to="{ name: 'user-detail', params: { username: author.loginname } }" :style="{ backgroundImage: 'url(' + author.avatar_url + ')' }"></router-link>
            </div>
            <div class="bd">
              <div flex>
                <router-link flex-box="0" :to="{ name: 'user-detail', params: { username: author.loginname } }">{{ author.loginname }}</router-link>
                <time flex-box="1">{{ topic.create_at | formatDate }}</time>
                <div flex-box="0" class="num">#楼主</div>
              </div>
            </div>
          </li>
          <!-- 楼主信息 end -->
          <!-- 主题信息 start -->
          <li>
            <div class="datas">
              <div class="tit">{{ topic.title }}</div>
              <div class="bottom" flex="main:center">
                <div class="item click" flex="main:center cross:center">
                  <i class="iconfont icon-click"></i>
                  <div class="num">{{ topic.visit_count }}</div>
                </div>
                <div class="item reply" flex="main:center cross:center">
                  <i class="iconfont icon-comment"></i>
                  <div class="num">{{ topic.reply_count }}</div>
                </div>
              </div>
            </div>
            <div class="markdown-body" v-html="topic.content"></div>
          </li>
          <!-- 主题信息 end -->
          <li class="replies-count" v-if="replies.length">
            共(<em>{{ replies.length }}</em>)条回复
          </li>
          <!-- 主题评论 start -->
          <li v-for="(item, $index) in replies">
            <div flex="box:first">
              <div class="headimg">
                <router-link class="pic" :to="{ name: 'user-detail', params: { username: item.author.loginname } }" :style="{ backgroundImage: 'url(' + item.author.avatar_url + ')' }"></router-link>
              </div>
              <div class="bd">
                <div flex>
                  <router-link flex-box="0" :to="{ name: 'user-detail', params: { username: item.author.loginname } }">{{ item.author.loginname }}</router-link>
                  <time flex-box="1">{{ item.create_at | formatDate }}</time>
                  <div flex-box="0" class="num">#{{ $index + 1 }}</div>
                </div>
                <div class="markdown-body" v-html="item.content"></div>
                <div class="bottom" flex="dir:right cross:center">
                  <div class="icon" @click="commentShow(item, $index)">
                    <i class="iconfont icon-comment-topic"></i>
                  </div>
                  <div class="icon" :class="{ fabulous: testThing(item.ups) }" v-if="item.author.loginname !== self.loginname" @click="fabulousItem(item)">
                    <i class="iconfont icon-comment-fabulous"></i>
                    <em v-if="item.ups.length">{{ item.ups.length }}</em>
                  </div>
                </div>
              </div>
            </div>
            <reply-box
              v-if="data.commentId === item.id"
              :loginname="item.author.loginname"
              :replyId="item.id"
              @success="data.fetch()"
            ></reply-box>
          </li>
          <!-- 主题评论 end -->
        </ul>
        <div class="reply" v-if="self.id">
          <reply-box @success="data.fetch()"></reply-box>
        </div>
        <div class="tip-login" v-if="!self.id">
          你还未登录，请先
          <router-link to="/login">登录</router-link>
        </div>
      </template>
    </v-content>
  </div>
</template>
<script>
  import http from 'http'
  import replyBox from './reply-box'
  import { mapModules, mapRules } from 'vuet'

  export default {
    mixins: [
      mapModules({ data: 'topic-detail', self: 'user-self' }),
      mapRules({ route: 'topic-detail' })
    ],
    components: { replyBox },
    computed: {
      topic () {
        return this.data.topic
      },
      author () {
        return this.data.topic.author
      },
      replies () {
        return this.data.topic.replies
      }
    },
    methods: {
      testThing (ups) { // 验证是否点赞
        return ups.indexOf(this.self.id || '') > -1
      },
      fabulousItem ({ ups, id }) { // 点赞
        if (!this.self.id) return this.$router.push('/login')
        var index = ups.indexOf(this.self.id)
        if (index > -1) {
          ups.splice(index, 1)
        } else {
          ups.push(this.self.id)
        }
        http.post(`/reply/${id}/ups`)
      },
      commentShow (item) { // 显示隐藏回复框
        if (!this.self.id) return this.$router.push('/login')
        this.data.commentId = this.data.commentId === item.id ? null : item.id
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
