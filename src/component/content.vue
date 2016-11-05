<style lang="less" scoped>
    @import "../less/config";
    .content {
        overflow: overlay;
        position: absolute;
        top: 50px;
        right: 0;
        bottom: 50px;
        left: 0;
        z-index: 100;
        box-shadow: 0 0 3px #c3c3c3;
        -webkit-overflow-scrolling : touch; 
    }
</style>
<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<script>
        
</script>