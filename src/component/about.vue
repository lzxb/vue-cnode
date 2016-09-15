<style lang="less" scoped>
    .about {
        padding: 15px;
        margin: 0;
        line-height: 1.5;
        dt {
            padding: 10px 0;
            font-weight: bold;
        }
        dd {
            padding-bottom: 15px;
            font-size: 14px;
            border-bottom: 1px solid #d5dbdb;
        }
    }
</style>
<template>
    <dl class="about">
        <dt class="tit">关于项目</dt>
        <dd>该项目是基于cnodejs社区的api，采用vue + vue-router + flex.css + ES6 + webpack + vuex 重写的webapp</dd>
        <dt class="tit">源码地址</dt>
        <dd>
            <a href="https://github.com/lzxb/vue-cnode" target="_blank">https://github.com/lzxb/vue-cnode</a>
        </dd>
        <dt class="tit">意见反馈</dt>
        <dd>
            <a href="https://github.com/lzxb/vue-cnode/issues" target="_blank">https://github.com/lzxb/vue-cnode</a>
        </dd>
        <dt class="tit">当前版本</dt>
        <dd>
            V1.0 beta
        </dd>
    </dl>
</template>
<script>
    const NAME = 'about'
    import mixins from '../mixins'

    export default {
        mixins: [mixins(NAME)],
    }
</script>