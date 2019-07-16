<template>
  <div id="myindex" class="mt10">
    <!--<h1>Element-UI</h1>-->
    <ul>
        <li v-for="item in list1" :key="item.src">
          <router-link :to="{ name: 'news', params: { userId: params = item.title }}">
            <span class="icon"><img :src='item.src' /></span>
            <span id="">{{ item.title }}</span>
          </router-link>
        </li>
    </ul>
    <ul>
    	<li v-for="item in list2" :key="item.src">
    		<span class="icon"><img :src='item.src' /></span>
	    	<span id="">{{ item.title }}</span>
    	</li>
    </ul>
    <test></test>
  </div>
</template>

<script>
import test from '@/components/test'
import image1 from '../assets/images/icon_01.png'
import image2 from '../assets/images/icon_02.png'
import image3 from '../assets/images/icon_03.png'
import image4 from '../assets/images/icon_04.png'
import image5 from '../assets/images/icon_05.png'
import image6 from '../assets/images/icon_06.png'
import image7 from '../assets/images/icon_09.png'
import image8 from '../assets/images/icon_08.png'

export default {
  name: 'MyIndex',
  data () {
    return{
      list1: [
        { title:'按钮' , src: image1},
        { title:'保险', src: image2 },
        { title:'日期', src: image3 },
        { title:'照片', src: image4 },
      ],
      list2: [
        { title:'地图' , src: image5},
        { title:'统计', src: image6 },
        { title:'全球行', src: image7 },
        { title:'收藏', src: image8 },
      ]
    }
  },
  components: {
     test
  }
}
</script>
<style scoped>
#myindex{
	background:#fff;
}
#myindex h1{
  text-align:center;
}
.myindex-title{
	color:#333;
	font-size: 0.28rem;
	padding-left: 0.2rem;
}
p{
  color:blue;
  font-size:0.3rem;
}
ul{
	overflow: hidden;
	padding-top:0.15rem;
  padding-bottom: 0.15rem;
}
ul li{
	width:25%;
	float:left;
	font-size: 0.28rem;
	text-align: center;
	box-sizing: border-box;
	height:1.5rem;
}
.icon{
	width:0.9rem;
	height:0.9rem;
	display: block;
  margin: 0.05rem auto;
  background-size: cover;
}
.icon>img{
    width: 100%;
    height: 100%;
}
</style>

