<template>
    <div class="view-content">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'view-content'
  }
</script>
<style lang="less" scoped>
  @import "../style/var.less";
  .view-content {
    overflow: auto;
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 50px;
    left: 0;
    z-index: 100;
    -webkit-overflow-scrolling : touch; 
  }
</style>
