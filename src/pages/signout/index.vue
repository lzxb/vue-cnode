<template>
  <div></div>
</template>
<script>

  import { mapModules } from 'vuet'

  export default {
    mixins: [
      mapModules({ self: 'user-self' })
    ],
    mounted () {
      this.self.signout()
    }
  }

</script>
<style lang="less" scoped>
</style>
