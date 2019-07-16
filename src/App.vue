<template>
  <div id="app">
    <div class="">
        <keep-alive>
           <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import store from './store/index';

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import './assets/css/common.css'

export default {
  name: 'app',
  store,
  data () {
    return {
      headTitle: '标题',
      transitionName:''
    }
  },
  methods: {

  },
  mounted () {
    $(document).ready(function(){
        function stopScrolling( touchEvent ) {
            touchEvent.preventDefault();
        }
    });
    document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    })
    document.addEventListener('gesturestart', function(event) {
      event.preventDefault()
    })
    document.addEventListener('dblclick', function (event) {
        event.preventDefault();
	  })
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
        //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > 0){
            if( to.meta.index < from.meta.index){
                this.transitionName = 'slide-right';
            }else{
                this.transitionName = 'slide-left';
            }
        }else if(to.meta.index == 0 && from.meta.index > 0){
            this.transitionName = 'slide-right';
        }

        //当然，如果你没有需要设置索引值为0的页面可以直接用着一段
        if( to.meta.index < from.meta.index){
              this.transitionName = 'slide-right';
        }else{
              this.transitionName = 'slide-left';
        }
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

