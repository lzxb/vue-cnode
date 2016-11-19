<style lang="less" scoped>

</style>
<template>
    <div>
        <v-header title="关于">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content>内容</v-content>
    </div>
</template>
<script>
    
</script>