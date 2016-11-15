<style lang="less" scoped>

</style>
<template>
    <div>
        <v-header title="发表">
            <a class="item" flex="main:center cross:center" slot="right">
                <i class="iconfont icon-edit"></i>
            </a>
        </v-header>
        <v-content>
            <div class="title">
                <input type="text" placeholder="请输入标题">
            </div>
            <div class="select">
                <select>
                    <option value="">请选择</option>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                </select>
            </div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    
</script>