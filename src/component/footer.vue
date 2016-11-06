<style lang="less" scoped>
    @import "../less/config";
    .footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 50;
        height: 50px;
        text-align: center;
        ul {
            padding: 5px 0;
            margin: 0;
            li{
                list-style: none;
                a{
                    text-decoration: none;
                    color: @text;
                    i {
                        display: block;
                        line-height: 24px;
                    }
                    em {
                        line-height: 16px;
                        font-size: 13px;
                        font-style: normal;
                    }
                }
            }
            .active {
                i, em {
                    color: @main;
                }
            }
        }
    }
</style>
<template>
    <footer class="footer">
        <ul flex="box:mean">
            <li class="active">
                <router-link to="/">
                    <i class="iconfont icon-index"></i>
                    <em>首页</em>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-edit"></i>
                    <em>发表</em>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-msg"></i>
                    <em>消息</em>
                </router-link>
            </li>
            <li>
                <router-link to="/home">
                    <i class="iconfont icon-user"></i>
                    <em>我的</em>
                </router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
        
</script>