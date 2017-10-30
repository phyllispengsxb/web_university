<template>
  <div class="w-header">
    <div class="w-title">前端大学</div>
    <div class="search"><input placeholder="请输入搜索关键词"/></div>
    <div class="w-admin">admin</div>
  </div>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .w-header
    display: flex
    height: 44px
    line-height: 44px
    padding-left:10px;
    font-size: 0
    .w-title
      flex: 1
      font-size: $font-size-medium-x
    .search
      text-align: right
      input
        flex: 1
        border: none
        border-radius: 4px
        margin-top: 10px
        padding: 4px
        font-size: $font-size-small
        color: #B7BBBF
        background: #F3F5F7
    .w-admin
      flex: 1
      padding-right:10px;
      text-align: right
      font-size: $font-size-medium
</style>
