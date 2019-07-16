// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './store/index';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/mine.less'
Vue.use(MintUI)

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//vue-layer
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

/*引入echarts*/
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//axios
import axios from 'axios'
Vue.prototype.$axios = axios;// 将axios配置成vue的原型

//touch
import touch from 'vue-directive-touch';
Vue.use(touch);

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/*路由发生变化修改页面title*/
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


/*定义公共头部 Header 组件*/
Vue.component('Header', {
  data: function () {
    return {
      count: 0
    }
  },
  props: ['title', 'backUrl'],
  template: '<div id="app-header" class="header"><router-link :to="backUrl"><div class="back"><i class="fa fa-chevron-left fa-fw"></i>返回</div></router-link><div class="title">{{title}}</div><div class="sao"><i class="fa fa-plus"></i></div></div>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

Vue.filter('getYMD', function(input) {
    return input.split(' ')[0];
})