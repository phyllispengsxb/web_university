import Vue from 'vue'
import Router from 'vue-router'
import News from 'components/news/news'
import Books from 'components/books/books'
import Vidio from 'components/vidio/vidio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/vidio',
      component: Vidio
    }
  ]
})
