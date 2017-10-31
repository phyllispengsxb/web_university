<template>
  <div class="goods">
    <scroll class="menu-wrapper">
      <ul>
        <li class="menu-item"
            v-for="(item, index) in books"
            :data-index="index"
            @touchstart.stop.prevent="touchStart"
            :class="{'current' : currentIndex === index }"
        >
          {{item.name}}
        </li>
      </ul>
    </scroll>
    <scroll class="books-wrapper"
            ref="listview"
            :data="books"
            :listenScroll="listenScroll"
            @scroll ="scroll"
            :probeType="probeType"
    >
      <ul>
        <li class="book-list"
            v-for="(group, index) in books"
            ref="listgroup"
            >
          <h2 class="title">{{group.name}}</h2>
          <ul class="bookDetail">
            <li v-for="item in group.book"
                class="book-item"
                @click="selectItem(item)"
            >
              <div class="icon">
                <img class="img" width="57" height="57" />
              </div>
              <div class="content">
                <h2 class="name">{{item.name}}</h2>
                <p class="price">{{item.price}}元</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
    <div v-show="fixedTitle" class="list-fixed" ref="fixed">
      <h1 class="fixed-title">{{ fixedTitle }}</h1>
    </div>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import {getData} from 'common/js/dom'
  import {mapMutations} from 'vuex'
  const ERR_OK = 0
  const TITLE_HEIGHT = 25
  export default {
    data () {
      return {
        books: [],
        currentIndex: 0,
        scrollY: -1,
        diff: -1
      }
    },
    created () {
      this.$http.get('api/books').then((res) => {
        res = res.body
        if (res.errno === ERR_OK) {
          this.books = res.books
          console.log(this.books)
          this.$nextTick(() => {
            this._calculateHeight()
          })
        }
      })
      this.listHeight = []
      this.probeType = 3
      this.listenScroll = true
    },
    methods: {
      touchStart (e) {
        let anchorIndex = getData(e.target, 'index')
        this._scrollTo(anchorIndex)
      },
      refresh () {
        this.$refs.listview.refresh()
      },
      scroll (pos) {
        this.scrollY = pos.y
        // console.log(this.scrollY)
      },
      _calculateHeight () {
        this.listHeight = []
        let height = 0
        const group = this.$refs.listgroup
        this.listHeight.push(height)
        for (let i = 0; i < group.length; i++) {
          let item = group[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        console.log(this.listHeight)
      },
      _scrollTo (index) {
        this.scrollY = -this.listHeight[index]
        this.$refs.listview.scrollToElement(this.$refs.listgroup[index], 0)
      },
      selectItem (books) {
        this.setGoodsDetail(books)
        this.setFullScreen(true)
      },
      ...mapMutations({
        setGoodsDetail: 'SET_GOODS_DETAIL',
        setFullScreen: 'SET_FULL_SCREEN'
      })
    },
    watch: {
      scrollY (newY) {
        const listHeight = this.listHeight
        // 当滚动到顶部，newY大于0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素上线

        this.currentIndex = listHeight.length - 2
      },
      diff (newVal) {
        let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },
    computed: {
      fixedTitle () {
        if (this.scrollY > 0) {
          return ''
        }
        return this.books[this.currentIndex] ? this.books[this.currentIndex].name : ''
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scope lang="stylus" ref="stylesheet/stylus">
  .goods
    position:absolute
    display: flex;
    overflow: hidden;
    top: 84px;
    bottom: 0px;
    width:100%;
    .menu-wrapper
      flex:0 0 96
      width:96px;
      background: #f7f7f7;
      height:100%;
      .menu-item
        display: table;
        height: 54px;
        width: 100%;
        line-height: 54px;
        padding:0 12px;
      .current
        position: relative;
        margin-to: -1px
        z-index: 10
        background:#fff;
        font-weight: 700
    .books-wrapper
      flex:1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size:$font-size-small
        color:rgb(147,153,159)
        background-color: #f3f5f7
      .book-item
        position:relative
        display:flex
        margin: 18px;
        padding-bottom: 18px
        border-bottom: 1px solid rgba(7,17,27,0.1)
        font-size: $font-size-small-s
        .content
          margin-left:6px;
          width: 100%
          .name
            margin-bottom: 6px
            line-height: 14px
            font-size: 14px
            color: rgb(7,17,27)
          .price
            position: absolute
            bottom: 16px
            right: 6px
            line-height: 14px
            font-size:14px;
      .book-item:last-child
        border-bottom:none
        margin-bottom: 0px
    .list-fixed
      position:absolute
      top: -1px
      left: 96px
      width: 100%
      .fixed-title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size:$font-size-small
        color:rgb(147,153,159)
        background-color: #f3f5f7
</style>
