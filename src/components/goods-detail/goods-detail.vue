<template>
  <div class="goodsDetail" v-show="fullScreen">
    <div class="detail-wapper">
      <div class="back"><a class="btn-back" @click="back()">返回上一层</a></div>
      <div class="book_img"><img></div>
      <div class="book_desc">
        <span class="name">{{goodsDetail.name}}</span>
        <p class="desc">简介：{{goodsDetail.description}}</p>
      </div>
      <div class="value">
        <h2 class="name">评价</h2>
      </div>
    </div>
    <shop-btn class="shopBtn"></shop-btn>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import ShopBtn from 'base/shop-btn/shop-btn'
  export default {
    computed: {
      ...mapGetters([
        'fullScreen',
        'goodsDetail'
      ])
    },
    methods: {
      back () {
        this.setFullScreen(false)
      },
      ...mapMutations({
        setFullScreen: 'SET_FULL_SCREEN'
      })
    },
    components: {
      ShopBtn
    }
  }
</script>

<style scope lang="stylus" ref="stylesheet/stylus">
  .goodsDetail
    position: fixed
    top: 0
    bottom: 43px
    left: 0
    right: 0
    z-index : 99
    background: #fff
    .detail-wapper
      position: absolute
      top: 0px
      bottom: 50px
      left: 0px
      right: 0px
      .back
        height: 30px
        line-height: 30px
        padding-left: 6px
        font-size: 10px
      .book_img
        height: 130px
        border:1px solid #f1f1f1
      .book_desc
        margin-top: 10px
        padding-left: 6px
        margin-bottom: 10px
        .name
          display: block
          margin-bottom: 6px
        .desc
          font-size: 14px
      .value
        .name
          height: 30px
          line-height: 30px
          padding-left: 10px
          background: #f1f1f1

</style>
