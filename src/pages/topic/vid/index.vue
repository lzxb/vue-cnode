<style lang="less" scoped>

</style>
<template>
    <div>
        <v-header title="主题">
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content style="bottom: 0;">
            
        </v-content>
    </div>
</template>
<script>
    import util from 'util'
    import { mapState } from 'vuex'
    import routeData from 'route-data'

    export default {
        mixins: [routeData],
        computed: mapState({ user: (state) => state.user}),
        routeData() {
            return {
                data: {}
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                var { vid } = this.$route.params
                util.get(`/api/v1/topic/${vid}`, {}, ({ data, success }) => {
                    if(success) return this.data = data
                })
            }
        }
    }
</script>