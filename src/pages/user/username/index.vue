<template>
  <div>
    <v-header title="个人资料">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content style="bottom: 0;" v-route-scroll="{ path: 'user-detail', name: 'content' }">
      <div class="user" flex="dir:top cross:center">
        <div class="user-bg">
          <img src="./headimg-bg.jpg" alt="">
        </div>
        <div class="headimg">
          <div class="pic">
            <img v-if="data.avatar_url" :src="data.avatar_url" alt="">
          </div>
        </div>
        <div class="name">{{ data.loginname }}</div>
        <div class="score" flex="main:justify">
          <div>积分：{{ data.score }}</div>
          <div>注册于：{{ data.create_at | formatDate }}</div>
        </div>
      </div>
      <ul class="tab-nav" flex="box:mean">
        <li :class="{on: detail.tabIndex == 0}" @click="detail.tabIndex = 0">回复</li>
        <li :class="{on: detail.tabIndex == 1}" @click="detail.tabIndex = 1">主题</li>
      </ul>
      <list v-show="detail.tabIndex == 0" :list="data.recent_replies"></list>
      <list v-show="detail.tabIndex == 1" :list="data.recent_topics"></list>
    </v-content>
  </div>
</template>
<script>
  import list from './list'
  import { mapModules, mapRules } from 'vuet'

  export default {
    mixins: [
      mapModules({ detail: 'user-detail' }),
      mapRules({ route: 'user-detail' })
    ],
    components: { list },
    computed: {
      data () {
        return this.detail.data
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../less/config";
  .user {
    .user-bg {
      overflow: hidden;
      width: 100%;
      height: 160px;
      background: @main;
      img {
        width: 100%;
      }
    }
    .headimg {
      overflow: hidden;
      position: relative;
      z-index: 2;
      margin-top: -42px;
      border-radius: 50%;
      border: 1px solid #eee;
      background: #fff;
      .pic {
        overflow: hidden;
        width: 80px;
        height: 80px;
        margin: 2px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #eee;
        }
      }
    }
    .name {
      margin: 20px 10px;
      font-size: 20px;
      font-weight: 500;
    }
    .score {
      width: 100%;
      font-size: 12px;
      div {
        padding: 10px;
      }
    }
  }


  .tab-nav {
    margin-top: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #fff;
    li {
      line-height: 38px;
      text-align: center;
      border-right: 1px solid #eee;
      font-size: 16px;
      &:last-of-type {
        border: none;
      }
      &.on {
        color: @main;
      }
    }
  }
</style>
