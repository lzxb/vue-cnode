<style lang="less" scoped>
    .list {
        overflow: hidden;
        li {
            padding: 10px;
            height: 50px;
            border-bottom: 1px solid #eee;
            background: #fff;
            .head {
                .pic {
                    overflow: hidden;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .main {
                padding-left: 10px;
                color: inherit;
                .con {
                    padding: 0 5px;
                    line-height: 30px;
                    font-size: 14px;
                }
                .name {
                    color: #666;
                }
                .line {
                    line-height: 20px;
                }
                time {
                    font-size: 12px;
                    color: #888;
                }
            }
        }
    }
    .list-null {
        line-height: 120px;
        text-align: center;
    }
</style>
<template>
    <div>
        <ul class="list" v-if="list.length">
            <li flex="box:first" v-for="item in list" track-by="id">
                <router-link class="head" :to="'/user/' + item.author.loginname">
                    <div class="pic">
                        <img :src="item.author.avatar_url" alt="">
                    </div>
                </router-link>
                <router-link :to="'/topic/' + item.id" class="main" flex="dir:top box:first">
                    <div class="line" flex="box:last">
                        <div class="name">{{ item.author.loginname }}</div>
                        <time>{{ item.last_reply_at | formatDate }}</time>
                    </div>
                    <div class="con">{{ item.title }}</div>
                </router-link>
            </li>
        </ul>
        <div class="list-null" v-if="!list.length">没有记录</div>
    </div>
</template>
<script>
    export default {
        props: {
            list: {
                type: Array,
                default: () => []
            }
        }
    }
</script>