<template>
    <div>
        <div class="user">
            <div class="headimg">
                <div class="pic">
                    <img src="https://avatars.githubusercontent.com/u/8424643?v=3&s=120" alt="">
                </div>
            </div>
            <div class="name">1340641314</div>
            <div class="score">积分：34345&nbsp;&nbsp;注册于：一年前</div>
        </div>
        <ul class="tab-nav" flex="box:mean">
            <li class="on">回复</li>
            <li>主题</li>
        </ul>
        <ul class="list">
            <li flex="box:first">
                <div class="head">
                    <div class="pic">
                        <img src="https://avatars.githubusercontent.com/u/8424643?v=3&s=120" alt="">
                    </div>
                </div>
                <div class="main" flex="dir:top box:last">
                    <div class="con">表单表单表单表单表单表单表单表单表单表单表单表单</div>
                    <div class="line" flex="box:first">
                        <div class="name">1445465766</div>
                        <time>一个月前</time>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '用户信息'
            }
        }
    }
</script>

<style lang="less" scoped>

</style>