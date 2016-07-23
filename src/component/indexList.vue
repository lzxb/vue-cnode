<template>
    <ul class="list">
        <li>
            <div class="user" flex="box:first">
                <div class="headimg">
                    <div class="pic">
                        <img src="https://avatars.githubusercontent.com/u/8424643?v=3&s=120" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="name">狼族小狈</div>
                    <time class="time">刚刚</time>
                </div>
            </div>
        </li>
    </ul>
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

<style lang="less" scoped rel="stylesheet/less">
    @import "../css/config";
    .list {
        .user {
            padding: 10px;
            .headimg {
                padding-right: 10px;
                .pic {
                    overflow: hidden;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: darken(@shallow, 10%);
                }
            }
            .name {
                font-size: 16px;
            }
            .time {
                font-size: 12px;
                color: darken(@shallow, 40%);
            }
        }
    }
</style>