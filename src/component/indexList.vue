<template>
    <div>

        <a v-link="'/topic/122'">User</a>
    </div>
    <div>{{msg}}</div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '你好世界！'
            }
        }
    }
</script>

<style lang="less" scoped>
    div {
        a{
            background: red;
        }
    }
</style>