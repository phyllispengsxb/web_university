<template>
  <div v-show="shopCarListFullScreen" class="shop-car-list">
    <div><span @click="back" class="back">返回</span></div>
    <ul>
      <li>
        <div><img></div>
        <div class="desc">
          <p>这是一本很牛的书fdfdf</p>
          <span class="price">19.9元</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'shopCarListFullScreen'
      ])
    },
    methods: {
      back () {
        this.setShopCarListFullScreen(false)
      },
      ...mapMutations({
        setShopCarListFullScreen: 'SET_SHOP_CAR_FULL_SCREEN'
      })
    }
  }
</script>

<style scope lang="stylus" ref="stylesheet/stylus">
  .shop-car-list
    position:absolute
    top: 0
    bottom: 0
    left: 0px
    right: 0
    background: #fff
    .back
      height: 30px
      line-height: 30px
      padding-left: 6px
      font-size: 10px
</style>
