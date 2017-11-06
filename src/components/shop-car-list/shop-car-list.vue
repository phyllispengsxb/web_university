<template>
  <transition name="slide">
    <div v-show="shopCarListFullScreen" class="shop-car-list">
      <div class="top-back"><span @click="back" class="back">返回上一级</span></div>
      <div class="goods-list-title"><h2 class="list-title">商品信息</h2></div>
      <div class="alert" v-show="totalPrice===0">暂无选中商品哦</div>
      <ul class="goods-list">
        <li class="goods-list-desc clearfix" v-for="book in carListGoods">
          <img class="goods-img">
          <div class="desc">
            <div class="name">{{book.name}}</div>
            <div class="price">{{book.price}}</div></div>
          <div><a class="delete">删除</a></div>
        </li>
      </ul>
      <div class="shop_btn">
        <div class="shopcar_img">
          <span class="icon-shopping_cart"></span>
          <span class="num" v-show="true">{{carCount}}</span>
        </div>
        <div class="total_price">共<span class="money">{{totalPrice}}</span>元</div>
        <div class="now_buy">立即购买</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    props: {
      carListGoods: {
        type: Array
      }
    },
    computed: {
      ...mapGetters([
        'shopCarListFullScreen',
        'carCount',
        'carList'
      ]),
      totalPrice () {
        let total = 0
        this.carListGoods.forEach((book) => {
          total += book.price
        })
        return total
      }
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
    .top-back
      .back
        height: 30px
        line-height: 30px
        padding-left: 10px
        font-size: 10px
    .goods-list-title
      height: 46px
      line-height: 46px
      border-top:1px solid #f1f1f1
      border-bottom:1px solid #f1f1f1
      text-align center
    .alert
      height: 200;
      line-height: 200px;
      text-align: center;
    .goods-list
      border-bottom:1px solid #f1f1f1
      .goods-list-desc
        width: 100%
        position: relative
        padding: 10px
        border-bottom:1px solid #f1f1f1
        .goods-img
          float: left
          margin-right:10px
          height: 80px
          width: 80px
          border:1px solid #f1f1f1
        .desc
          float:left
          .name
            float:left
            margin-top: 10px
            margin-bottom: 10px
        .delete
          position:absolute
          bottom: 16px
          right: 30px
          color: #9e030b
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
    .total_price
      margin-left: 30px
      float: left
      .money
        margin-left: 6px
        margin-right: 6px
        color: #e24141
    .now_buy
      float: right
      padding-right: 10px
      padding-left: 10px
      background: #e24141
      color: #fff
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s

    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
</style>
