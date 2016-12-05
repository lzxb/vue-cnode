<style lang="less" scoped>
    .data-null {
        position: absolute;
        top: 45%;
        left: 50%;
        z-index: 2;
        width: 120px;
        margin: 0 0 0 -60px;
        text-align: center;
        font-size: 14px;
    }
</style>
<template>
    <div class="data-null">{{ msg }}</div>
</template>
<script>
    export default {
        props: {
            msg: {
                type: String,
                default: '暂无记录'
            }
        }
    }
</script>