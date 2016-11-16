<style lang="less" scoped>
    .title {
        padding: 5px 10px;
    }
    
    .select {
        padding: 5px 10px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        select {
            border-radius: 5px;
            background: none;
        }
    }
    
    .con {
        padding: 5px 10px;
        textarea {
            line-height: 24px;
        }
    }
    
    input,
    select,
    textarea {
        box-sizing: border-box;
        width: 100%;
        height: 32px;
        padding: 0 5px;
        line-height: 28px;
        border: none;
        font-size: 14px;
        resize: none;
    }
</style>
<template>
    <div>
        <v-header title="发表">
            <a class="item" flex="main:center cross:center" slot="right">
                <i class="iconfont icon-edit"></i>
            </a>
        </v-header>
        <v-content flex="dir:top">
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
            <div class="con" flex="dir:top" flex-box="1">
                <textarea flex-box="1"></textarea>
            </div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    
</script>