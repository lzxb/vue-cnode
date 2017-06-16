<template>
  <div>
    <v-header title="关于">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content class="content" style="bottom: 0">
      <div class="about">
        <dl>
          <dt>前言</dt>
          <dd>
            项目灵感的最初来源是来自<a>@shinygang</a>的Vue-cnodejs，感谢cnodejs社区提供的API。
          </dd>
          <dt>感悟</dt>
          <dd>这是全部基于<a href="https://github.com/medevicex/vuet">Vuet</a>进行状态管理的项目</dd>
          <dt>源码</dt>
          <dd>
            <a href="https://github.com/lzxb/vue-cnode" target="_blank">https://github.com/lzxb/vue-cnode</a>
          </dd>
          <dt>反馈</dt>
          <dd>
            <a href="https://github.com/lzxb/vue-cnode/issues" target="_blank">https://github.com/lzxb/vue-cnode/issues</a>
          </dd>
          <dt>版本</dt>
          <dd>
            v2.1
          </dd>
        </dl>
      </div>
    </v-content>
  </div>
</template>
<script>

</script>
<style lang="less" scoped>
  .about {
    padding: 10px;
    line-height: 22px;
    dt {
      line-height: 28px;
      font-weight: bold;
    }
  }
</style>
