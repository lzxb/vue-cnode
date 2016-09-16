<style lang="less" scoped>
    @import "../less/config";
    .submit {
        padding: 0 20px;
        margin-top: 180px;
        .btn {
            line-height: 38px;
            text-align: center;
            border-radius: 5px;
            font-size: 14px;
            color: #fff;
            background: @topIconColor;
        }
    }
</style>
<template>
    <div class="submit">
        <div class="btn" v-on:click="go">确定要退出登录吗？</div>
    </div>
</template>
<script>
    const NAME = 'signout'
    import Tool from '../Tool'
    import mixins from '../mixins'

    export default {
        mixins: [mixins(NAME)],
        methods: {
            go() {
                this.SIGNOUT();
                this.$router.go('/')
            }
        }
    }
</script>