<template>
  <div class="shop_btn">
    <div class="shopcar_img">
      <span class="icon-shopping_cart" @click="openShopCarList"></span>
      <span class="num" v-show="true">{{ carCount }}</span>
    </div>
    <div class="now_buy">立即购买</div>
    <div class="add_shopcar" v-show="true" @click="addCarList">加入购物车</div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default{
    data () {
      return {
        carListGoods: []
      }
    },
    props: {
      goodsDetail: {
        type: Object
      }
    },
    computed: {
      ...mapGetters([
        'carCount',
        'carList'
      ])
    },
    methods: {
      openShopCarList () {
        this.setShopCarListFullScreen(true)
      },
      ...mapMutations({
        setShopCarListFullScreen: 'SET_SHOP_CAR_FULL_SCREEN',
        setCarCount: 'SET_CAR_COUNT',
        setCarList: 'SET_CAR_LIST'
      }),
      addCarList () {
        for (let i = 0; i < this.carListGoods.length; i++) {
          if (this.carListGoods[i].id === this.goodsDetail.id) {
            alert('您的购物车中已经有该商品啦')
            return
          }
        }
        this.carListGoods.push(this.goodsDetail)
        this.setCarCount(this.carCount + 1)
        // this.setCarList(this.carListGoods)
        // console.log(this.carListGoods)
        this.$emit('addCarList', this.carListGoods)
      }
    }
  }
</script>

<style scope lang="stylus" ref="stylesheet/stylus">
  .shop_btn
    position: fixed
    bottom: 0px
    width: 100%
    height: 42px
    line-height: 42px
    border-top: 1px solid #f1f1f1
    background: #fff
    .shopcar_img
      position: relative
      float: left
      padding-top: 6px
      margin-left: 36px
      .icon-shopping_cart
        font-size: 32px
      .num
        position:absolute
        top: 0px
        left: 25px
        text-align: center
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%;
        background: rgb(240,20,20);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        width: 18px
        height: 18px
        line-height: 18px
        color:#fff
        font-size: 13px
    .add_shopcar
      float: right
      padding-right: 10px
      padding-left: 10px
      margin-right: 10px
      background: #c5b225
      color: #fff
    .now_buy
      float: right
      padding-right: 10px
      padding-left: 10px
      background: #e24141
      color: #fff
</style>
