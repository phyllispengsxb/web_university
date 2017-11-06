<template>
  <div id="app">
    <w-header class="w-header"></w-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import WHeader from 'components/w-header/w-header'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      WHeader,
      Tab
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
</style>
