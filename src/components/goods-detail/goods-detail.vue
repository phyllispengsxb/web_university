<template>
  <transition name="slide">
    <book-list></book-list>
  </transition>
</template>

<script>
  import BookList from 'components/goods-list/goods-list'
  export default {
    components: {
      BookList
    }
  }
</script>

<style scope lang="stylus" ref="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
