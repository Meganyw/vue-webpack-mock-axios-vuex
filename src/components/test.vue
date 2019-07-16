<template>
    <div class="compute">
        <news>
            <!--我是父组件中的内容，通过插槽放入子组件！！-->
            <!--<template v-slot:header>
                <h1>具名插槽的用法</h1>
            </template>-->
            <template v-slot ="slotProps">
                {{ slotProps.user[1].firstName }}
            </template>
        </news>
        <h4>vuex测试1：Count is <span class="num">{{count}}</span></h4>
        <button class="btn_add" @click="SOME_INCREMENT"> <i class="fa fa-plus"></i> </button>
        <button class="btn_sub" @click="SOME_DECREMENT"> <i class="fa fa-minus"></i> </button>
        <a class="layui-btn" href="javascript:;" v-on:click="show_Layer">点击弹框{{num}}</a>
        <div style="height:500px;"></div>
    </div>
</template>
<script>
import News from '@/components/news'

export default {
    computed:{
        count(){
            return this.$store.state.count
        },
        num(){
            return this.$store.state.num
        }
    },
    methods:{
        SOME_INCREMENT(){
        //通过 store.commit 方法触发状态变更(mutation的方法)
            this.$store.commit('SOME_INCREMENT');
        },
        SOME_DECREMENT(){
            this.$store.commit('SOME_DECREMENT');
        },
        show_Layer(){
            this.$layer.alert("<div style='font-size:0.4rem;'>找不到对象！</div>",
                {
                  type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
                  title: '信息',
                  content: "",
                  icon: 1,
                  btn: '关闭',
                  time: 0,
                  shade: true,//是否显示遮罩
                  yes: '',
                  cancel: '',
                  tips: [0,{}],//支持上右下左四个方向，通过1-4进行方向设定,可以设定tips: [1, '#c00']
                  tipsMore: false,//是否允许多个tips
                  shadeClose: true,//点击遮罩是否关闭
                });
        }
    },
    components: {
        News
    }
}
</script>
<style>
    h4{
        font-size:0.32rem;
        text-align: center;
    }
    .btn_add,.btn_sub{
        width: 50%;
        height: 0.8rem;
        color: #fff;
        background: #fc781b;
        float: left;
        border-radius: 0.1rem;
        border: 5px solid #fff;
        box-sizing: border-box;
    }
    .num{
        color:red;
        font-size:0.4rem;
    }
    .compute{
        overflow:hidden;
    }
    .layui-btn{
        height:0.8rem;
        line-height:0.8rem;
        text-align:center;
        background-color:greenyellow;
        color:#333;
        font-size:0.4rem;
        display:block;
        clear: both;
        margin:0.1rem;
        box-sizing:border-box;
        border-radius:5px;
    }
</style>
