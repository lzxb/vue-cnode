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
            color: @mainStressColor;
            background: #fff;
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
    import Tool,{actions} from '../Tool'
    import components from './common/'

    export default {
        vuex: {
            actions
        },
        data() {
            return {
                msg: '退出'
            }
        },
        methods: {
            go() {
                this.signout();
                this.$router.go('/')
            }
        }
    }
</script>