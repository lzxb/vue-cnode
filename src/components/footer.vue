<template>
  <footer class="footer">
    <ul flex="box:mean">
      <li :class="{ active: item.name == $route.name }"  v-for="item in list">
        <router-link :to="{ name: item.name }">
          <i class="iconfont" :class="[ item.icon ]"></i>
          <em>{{ item.title }}</em>
          <div class="count" v-if="item.name == 'self-messages' && count.data > 0">{{ count.data }}</div>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<script>
  import { mapModules, mapRules } from 'vuet'

  export default {
    mixins: [
      mapModules({ user: 'user-self', count: 'user-messages-count' }),
      mapRules({ need: 'user-messages-count' })
    ],
    data () {
      return {
        list: [
          {
            title: '首页',
            name: 'index',
            icon: 'icon-index'
          },
          {
            title: '发表',
            name: 'topic-create',
            icon: 'icon-edit'
          },
          {
            title: '消息',
            name: 'self-messages',

            icon: 'icon-msg'
          },
          {
            title: '我的',
            name: 'self-home',
            icon: 'icon-user'
          }
        ]
      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../less/config";
  .footer {
    position: fixed;
    background: #fff;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    height: 49px;
    text-align: center;
    border-top: 1px solid #ddd;
    ul {
      padding: 5px 0;
      margin: 0;
      li {
        list-style: none;
        a {
          position: relative;
          display: block;
          text-decoration: none;
          color: @text;
          i {
            display: block;
            line-height: 24px;
          }
          em {
            line-height: 16px;
            font-size: 13px;
            font-style: normal;
          }
          .count {
            position: absolute;
            top: 0;
            left: 50%;
            z-index: 2;
            padding: 1px 4px;
            line-height: 12px;
            border-radius: 50%;
            text-align: center;
            font-size: 12px;
            opacity: 0.9;
            color: #fff;
            background: red;
          }
        }
      }
      .active {
        i,
        em {
          color: @main;
        }
      }
    }
  }
</style>
