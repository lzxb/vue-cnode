<style lang="less" scoped>
</style>
<template>
</template>
<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNOUT } from 'store/user'

  export default {
    mounted () {
      this.USER_SIGNOUT()
      this.$router.push('/')
    },
    methods: mapActions([USER_SIGNOUT])
  }

</script>
