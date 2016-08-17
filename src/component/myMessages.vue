<style lang="less" scoped>
    @import "../less/config";
    .msg-box {
        .list {
            li {
                padding: 10px;
                border-bottom: 1px solid #eee;
                background: #fff;
                a {
                    color: @mainATagClolor;
                }
                .name {
                    font-weight: bold;
                    line-height: 28px;
                    time {
                        padding-left: 5px;
                        font-size: 12px;
                        font-weight: normal;
                        color: #999;
                    }
                }
                .content {
                    padding: 5px 0;
                }
                .dian-true {
                    display: none;
                }
                .dian-false {
                    width: 8px;
                    height: 8px;
                    margin-right: 5px;
                    border-radius: 50%;
                    background: red;
                }
            }
        }
    }

    .user-headimg {
        width: 38px;
        height: 38px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #ddd;
        background-size: cover;
        background-color: #eee;
    }
</style>
<template>
    <div class="msg-box">
        <ul class="list">
            <li flex="box:first">
                <a class="user" href="#/user/ali322">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/780693?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        ali322

                        <time>1天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/575fb2ffe8689e7906af7367">CNodeRN又一个CNode React-Native App</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/albert">
                    <div class="user-headimg" style="background-image: url(&quot;//gravatar.com/avatar/17b586bd384e73d7c770143182fdb7e8?size=48&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        albert

                        <time>1天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57b1f45ba4f7e29c76341434">《失控》笔记</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/yuexing0921">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/18208187?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        yuexing0921

                        <time>5天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57abea39ba44d08f4c1ce041">技术总监动不动说让后端一周搞定nodejs、一周搞定react，哈哈，看来我要失业了</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/pangguoming">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/7269202?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        pangguoming

                        <time>5天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/560cf75b1f6dc88c04049ae5">有Github账户的，大家互粉下吧， 我的：https://github.com/pangguoming</a>                            中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/MirrorWang">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/19181780?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        MirrorWang

                        <time>5天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/56d1148d9f876b7e6658579e">flex.css，移动端flex布局神器，兼容微信，UC，webview等移动端主流浏览器08.10</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/MirrorWang">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/19181780?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        MirrorWang

                        <time>5天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57ab5e7d476898b472247ddd">基于webpack + react + react-router + redux + less + flex.css + ES6 的React版cnode社区</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/jaylinWang">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/4530355?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        jaylinWang

                        <time>6天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57abea39ba44d08f4c1ce041">技术总监动不动说让后端一周搞定nodejs、一周搞定react，哈哈，看来我要失业了</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/MyNodeJs">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/6858092?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        MyNodeJs

                        <time>6天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57ab5e7d476898b472247ddd">基于webpack + react + react-router + redux + less + flex.css + ES6 的React版cnode社区</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/luoyjx">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/4217102?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        luoyjx

                        <time>6天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57ab5e7d476898b472247ddd">基于webpack + react + react-router + redux + less + flex.css + ES6 的React版cnode社区</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/JChehe">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/8402442?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        JChehe

                        <time>6天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57aac797ba44d08f4c1cdff3">虽然Vue2.0快来了，但我也利用1.0版本搭个CNode的Web App学习一下</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/nswbmw">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/4279697?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        nswbmw

                        <time>7天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57596f0edc4ef1e71a4640df">Vue 搭建的诗歌交流网站</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/JChehe">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/8402442?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        JChehe

                        <time>7天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57aac797ba44d08f4c1cdff3">虽然Vue2.0快来了，但我也利用1.0版本搭个CNode的Web App学习一下</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/JChehe">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/8402442?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        JChehe

                        <time>7天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57aac797ba44d08f4c1cdff3">虽然Vue2.0快来了，但我也利用1.0版本搭个CNode的Web App学习一下</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/JChehe">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/8402442?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        JChehe

                        <time>7天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57aac797ba44d08f4c1cdff3">虽然Vue2.0快来了，但我也利用1.0版本搭个CNode的Web App学习一下</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/JChehe">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/8402442?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        JChehe

                        <time>7天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57aac797ba44d08f4c1cdff3">虽然Vue2.0快来了，但我也利用1.0版本搭个CNode的Web App学习一下</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/kenberkeley">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/13287948?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        kenberkeley

                        <time>8天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57a992c8ba44d08f4c1cdfb2">vue有react...传参写法么</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/kenberkeley">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/13287948?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        kenberkeley

                        <time>8天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57a992c8ba44d08f4c1cdfb2">vue有react...传参写法么</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/kenberkeley">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/13287948?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        kenberkeley

                        <time>8天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57a992c8ba44d08f4c1cdfb2">vue有react...传参写法么</a></div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/linyouhappy">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/1627891?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        linyouhappy

                        <time>8天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            在话题
                            <a href="#/topic/57a87a27476898b472247d15">一个人历时一年时间用pomelo开发的MMORPG手机网游。已开源到github。</a> 中 @了你

                        </div>
                    </div>
                </div>
            </li>
            <li flex="box:first">
                <a class="user" href="#/user/Kaijun">
                    <div class="user-headimg" style="background-image: url(&quot;https://avatars.githubusercontent.com/u/1693027?v=3&amp;s=120&quot;);"></div>
                </a>
                <div>
                    <div class="name">
                        Kaijun

                        <time>22天前</time>
                    </div>
                    <div flex="box:first">
                        <div flex="cross:center">
                            <div class="dian-true"></div>
                        </div>
                        <div>
                            回复你了的话题
                            <a href="#/topic/57936a864cddcb4326146734">vue 使用什么开发工具比较好</a></div>
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
                msg: '我的消息'
            }
        }
    }
</script>