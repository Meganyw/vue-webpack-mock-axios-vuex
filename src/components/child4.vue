<template>
    <div id="demo">
        <div>
            <p class="headerTab" v-on:click="show = !show">
                <i class="fa fa-angle-double-right fa-fw" style="float:left;"></i>
                按体裁分类:
                <i v-if="show" class="fa fa-chevron-circle-up"></i>
                <i v-if="!show" class="fa fa-chevron-circle-down"></i>
            </p>
            <transition name="fade">
                <ul v-if="show" class="list">
                    <li class="newList" v-for="(value, key, index) in object">
                        <span class="fl list">{{value.name}}</span>
                        <span class="fr"><i class="fa fa-chevron-right"></i></span>
                    </li>
                </ul>
            </transition>
        </div>
        <div id="myChart" :style="{width: '100%', height: '300px',background: '#fefefe',marginTop: '0.1rem'}"></div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        object: [
          {name: '小说'},
          {name: '散文'},
          {name: '诗歌'},
          {name: '戏剧'}
        ]
      }
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title : {
                    text: '热点文章按体裁分类统计',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['小说','散文','诗歌','戏剧']
                },
                series : [
                    {
                        name: '分类名称',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'小说'},
                            {value:310, name:'散文'},
                            {value:234, name:'诗歌'},
                            {value:135, name:'戏剧'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ],
                 color: ['#FFFF33','#FF9966','#FFCC66','#33FF99']
            });
        }
      }
  }
</script>

<style>
#demo{
    width:100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.headerTab{
    font-size:0.32rem;
    height:0.8rem;
    line-height:0.8rem;
    background: #f8f8f8;
    padding: 0 0.2rem;
    border-top: 1px solid #ddd;
}
.headerTab i,.list i{
    float:right;
    line-height:0.8rem;
}
.list li{
    line-height:1rem;
    font-size:0.32rem;
    padding: 0 0.2rem;
    background:#fff;
}
</style>