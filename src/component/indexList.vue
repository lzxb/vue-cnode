<style type="text/css">
    body {
        background: red;
    }
</style>
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