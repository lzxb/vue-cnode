<style lang="less" scoped>
    @import "../less/config";
    .msg {
        padding: 80px;
        text-align: center;
    }
    .submit {
        padding: 0 20px;
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
    <div>
        <div class="msg">确定要退出登录吗？</div>
        <div class="submit">
            <div class="btn" v-on:click="go">确定</div>
        </div>
    </div>
</template>
<script>
    import Tool from '../Tool'
    import mixins from '../mixins'

    export default {
        mixins: [mixins('signout')],
        methods: {
            go() {
                this.SIGNOUT();
                this.$router.go('/')
            }
        }
    }
</script>