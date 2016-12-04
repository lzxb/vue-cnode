<style lang="less" scoped>
    .about {
        padding: 10px;
        line-height: 22px;
        dt {
            line-height: 28px;
            font-weight: bold;
        }
    }
</style>
<template>
    <div>
        <v-header title="关于">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content style="bottom: 0">
            <div class="about">
                <dl>
                    <dt>前言</dt>
                    <dd>
                        项目灵感的最初来源是来自<a>@shinygang</a>的Vue-cnodejs，感谢cnodejs社区提供的API。
                    </dd>
                    <dt>技术栈</dt>
                    <dd>
                        项目基于vue2、vue-router、vuex、flex.css、ES6进行开发，使用了webpack、babel编译。
                    </dd>
                    <dt>感悟</dt>
                    <dd>
                        在vue-cnode升级vue2的时候，在公司内部已经有两个正式项目使用vue2， 遇到的一个最难的问题，就是如何能在页面后退时还原数据和滚动条位置， 虽然vue2内置了keep-alive组件，vue-router也提供了scrollBehavior方法进行设置，
                        但是仍然无法满足需求，后来阅读vue-router的源码发现， 每个页面都会自动在history.state对象中存储一个对应的key值， 便利用这个特性实现了页面后退时，数据和滚动条还原， 不过目前只是实现了页面的顶级组件还原，如果需要对顶级组件下的子组件实现数据还原，
                        可以利用$options._scopeId来实现。哈哈，具体如何实现就要靠大家自己发挥想象力了
                    </dd>
                    <dt>源码</dt>
                    <dd>
                        <a href="https://github.com/lzxb/vue-cnode" target="_blank">https://github.com/lzxb/vue-cnode</a>
                    </dd>
                    <dt>反馈</dt>
                    <dd>
                        <a href="https://github.com/lzxb/vue-cnode/issues" target="_blank">https://github.com/lzxb/vue-cnode</a>
                    </dd>
                    <dt>版本</dt>
                    <dd>
                        v2.0 beta
                    </dd>
                </dl>
            </div>
        </v-content>
    </div>
</template>
<script>
    
</script>