<template>
  <div class="contentCategory">

    <div class="tabTitle" id="v-for-object1">
      <a href="javascript:void(0)" v-for="(value, key, index) in object1"  @click="active(key , 'child'+(key+1) ,$event)" :class="{active: key == ins}" class="tabList from-middle">{{value.list}}</a>
    </div>

    <transition :name="transitionName">
      <div :is="currentView"></div>
    </transition>
  </div>
</template>

<script>
 // 导入子组件
 import child1 from '@/components/child1'
 import child2 from '@/components/child2'
 import child3 from '@/components/child3'
 import child4 from '@/components/child4'
import '../assets/css/common.css'
 export default {
   data () {
     return {
        ins: 0,
        currentView: 'child1', // 默认选中第一项
        object1: [
            {list: '热点新闻',child:'child1'},
            {list: 'mock新闻',child:'child2'},
            {list: '热门段子',child:'child3'},
            {list: '热门文章',child:'child4'}
        ],
        transitionName:''
      }
   },
   methods: {
      active (num, tabItem, e) {
        this.currentView = tabItem
        var thisDom = e.currentTarget
        this.ins = num
      }
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
     child1,
     child2,
     child3,
     child4
   }
 }
</script>
<style>
.tabTitle{
  height:0.7rem;
  line-height:0.7rem;
  border-radius: 5px;
  background:#fff;
  position: fixed;
  top: 0.9rem;
  width: 100%;
}
.tabList{
  width: 25%;
  font-size: 0.3rem;
  display: inline-block;
  float: left;
  text-align: center;
  color:#333;
}
.from-middle.active{
  color: #0095ff;
}
</style>