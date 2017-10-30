<template>
  <div class="tab">
    <router-link tab="div" class="tab-item" to="/news"><span class="tab-link">资讯</span></router-link>
    <router-link tab="div" class="tab-item" to="/books"><span class="tab-link">图书</span></router-link>
    <router-link tab="div" class="tab-item" to="/vidio"><span class="tab-link">视频</span></router-link>
  </div>
</template>

<script>

</script>

<style scope lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    .tab-item
      flex: 1
      text-align:center
      padding-top: 10px
      padding-bottom: 10px
      border-top:1px solid #f7f7f7
      border-bottom:1px solid #f7f7f7
      .tab-link
        font-size: $font-size-medium
      &.router-link-active
        background: #b1b1b1
        color: #fff;
</style>
