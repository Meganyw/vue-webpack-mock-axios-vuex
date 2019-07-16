import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Category from '@/components/category.vue'
import ShoppingCart from '@/components/shoppingCart.vue'
import Mine from '@/components/mine.vue'
import Personal from '@/components/personal.vue'
import News from '@/components/news.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉浏览器地址栏中的#
  routes: [
    {
      path: '/',
      component: Hello,
      meta: {
        title: '首页入口',
        index: 0
      }
    },
    {
      path: '/home',
      component: Hello,
      meta: {
        title: '首页入口',
        index: 1
      }
    },
    {
      path: '/cate',
      component: Category,
      meta: {
        title: '分类',
        index: 2,
        keepAlive: true
      }
    },
    {
      path: '/cart',
      component: ShoppingCart,
      meta: {
        title: '购物车',
        index: 3,
        keepAlive: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        title: '个人中心',
        index: 4
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: {
        title: '个人资料',
        index: 5
      }
    },
    {
      path: '/news/:userId',
      name: 'news',
      component: News,
      meta: {
        title: '新闻资料',
        index: 6
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})



