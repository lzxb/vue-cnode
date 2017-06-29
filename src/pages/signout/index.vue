<template>
  <div></div>
</template>
<script>

  import { mapRules } from 'vuet'

  export default {
    mixins: [
      mapRules({ manual: 'user-self' })
    ],
    mounted () {
      this.$self.signout()
      this.$router.replace('/')
    }
  }

</script>
<style lang="less" scoped>
</style>
