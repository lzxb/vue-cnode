<style lang="less" scoped>
    @import "../less/config";
    .header {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10500;
        height: 50px;
        line-height: 50px;
        .item {
            width: 50px;
        }
        .title {
            padding: 0;
            margin: 0;
            text-align: center;
            font-size: 16px;
        }
    }
</style>
<template>
    <header class="header" flex="box:justify">
        <div class="item" flex="main:center cross:center">
            <i class="iconfont icon-about"></i>
        </div>    
        <h2 class="title">首页</h2>    
        <div class="item" flex="main:center cross:center">
            <i class="iconfont icon-user"></i>
        </div>    
    </header>Ï
</template>
<script>
        
</script>