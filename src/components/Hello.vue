
<template>
  <div id="hello">
    <div class="">
      <div class="div-input">
        <input type="text" class="search-input">
        <i class="fa fa-search"></i>
      </div>
      <Header backUrl="/"></Header>
      <div id="scrollBg"></div>
    </div>
  	<div class="content">
      <div class="focus">
      <!-- focus begin -->
        <section class="my-swiper">
            <swiper :options="swiperOption" v-if="swiperList.length">
                <swiper-slide  class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id">
                    <img class="my-swp-img" :src="slide.img" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
      <!-- focus end -->
      </div>
      <my-index></my-index>
    </div>
  </div>
</template>

<script>
import '@/api/mock/images'
import api from '@/api/axios/api'
import MyIndex from '@/components/MyIndex.vue'
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'hello',
  data() {
    return {
      swiperList :[],
      title:'热门段子',
      backUrl: '/',
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        loop: true,
        initialSlide: 0,
        pagination: { el: '.swiper-pagination' }, // 分页按钮
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          //console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  },
  mounted () {
    this.bannerInfo();
    this.scroll();
  },
  methods: {
    //轮播图初始化
    bannerInfo() {
    //通过接口获取图片数据
      api.api('/images/list')
      .then(res => {
        this.swiperList = res;
      });
    },
    scroll() {
      $(window).bind('scroll', function() {
        var len = $(this).scrollTop();
        if (len > 0 ) {
          $('#scrollBg').stop().slideDown(100);
        } else {
          $('#scrollBg').stop().slideUp(100);
        }
      })
    }
  },
  components: {
    MyIndex,
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
#hello{
  width:100%;
}
.content img{
  width:100%;
  height:200px;
}
.div-input{
  position: fixed;
  top: 5px;
  left: 50%;
  width: 4rem;
  margin-left: -2rem;
  height: 0.6rem;
  border: 2px solid #fff;
  z-index: 99999;
  border-radius: 10px;
}
input.search-input{
  height: 0.6rem;
  width: 85%;
  padding: 0 10px;
  box-sizing: border-box;
  background: transparent;
  float: left;
  margin-left: 30px;
  color:#fff;
  font-size: 16px;
}
.fa-search{
  font-size: 0.5rem;
  display: inline-block;
  position: absolute;
  left: 7px;
  top: 3px;
  z-index: 999999;
  color: #fff;
}
#scrollBg {
    width: 100%;
    height: 45px;
    line-height: 45px;
    background:rgba(64, 64, 64, 0.89);
    display: none;
    z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
    z-index: 1002;
}
</style>

