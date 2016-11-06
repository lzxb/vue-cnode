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
        <slot name="left">
            <div class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>    
        </slot>
        <h2 class="title">{{title}}</h2> 
        <slot name="right">
            <div class="item" flex="main:center cross:center">
            </div>    
        </slot>   
    </header>Ï
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>