import * as types from './mutation-types'

const mutations = {
  [types.SET_GOODS_DETAIL] (state, goodsDetail) {
    state.goodsDetail = goodsDetail
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_SHOP_CAR_FULL_SCREEN] (state, flag) {
    state.shopCarListFullScreen = flag
  }
}
export default mutations
