<template>
    <div class="p5">
        <p class="titlebg">
            <span class="fl title"><i class="fa fa-list-ol fa-fw"></i>排名</span>
            <span class="fr title paixu" mode="0">搜索热度<i class="fa fa-fire fa-fw red"></i></span>
        </p>
        <ul class="new" id="v-for-object">
            <li class="newList" v-for="(value, key, index) in object">
                <span class="fl list">{{value.list}}</span>
                <span class="fr orderid">
                    {{value.number}}
                    <i class="fa fa-arrow-circle-o-up fa-fw red"></i>
                </span>
            </li>
        </ul>
        <div id="box mt10">
            <div class="search">
                <i class="fa fa-search fa-fw"></i>
                <input type="text" class="searchBox" v-model="searchVal" placeholder="请输入搜索内容">
                <!-- <button class="btn">搜 索</button> -->
            </div>
            <table class="goodsheet">
                <tr>
                    <th>商品名</th>
                    <th>单价
                        <span @click="orderFn('price', false)">↑</span>
                        <span @click="orderFn('price', true)">↓</span>
                    </th>
                    <th>销量
                        <span @click="orderFn('sales', false)">↑</span>
                        <span @click="orderFn('sales', true)">↓</span>
                    </th>
                </tr>
                <tr v-for='(item, key) in list'>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.sales}}万</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import api from '@/api/axios/api'
import '@/api/mock/goodsList'

export default {
    data () {
        return {
            msg: '',
            object: [
                {list: 'Uber司机杀人后', number: '34546'},
                {list: '百胜中国拒绝收购', number: '23234'},
                {list: '俄罗斯被坑怕了', number: '76768'},
                {list: '公安部通缉王世君', number: '438362'}
            ],
            goodsList:[],
            searchVal: '',    //默认输入为空
            letter: '',       //默认不排序
            original: false   //默认从小到大排列
        }
    },
    mounted(){
        this.sort();
        this.setNewsApi();
    },
    methods: {
        sort: function(){
            $(".paixu").click(function() {
                var orderIdArray = [];
                var idIndex = [];
                var mode = $(this).attr("mode");
                var orderid = $(".orderid");

                orderid.each(function(i) {
                    var id = parseInt($(this).html());
                    idIndex[id] = i;        //orderid的序号
                    orderIdArray.push(id);  //orderid的值
                });

                if(mode == 1) {
                    $(this).attr("mode", 0);
                    $(this).html("搜索热度最高<i class='fa fa-free-code-camp fa-fw red'></i>");
                    orderIdArray = orderIdArray.sort(function(a, b){return (a < b) ? 1 : -1}); //从大到小排序
                } else if(mode == 0) {
                    $(this).attr("mode", 1);
                    $(this).html("搜索热度最低<i class='fa fa-free-code-camp fa-fw red'></i>");
                    orderIdArray = orderIdArray.sort(function(a, b){return (a > b) ? 1 : -1}); //从小到大排序
                }

                var list = $("#v-for-object").find("li");
                var _length = orderIdArray.length;

                for (var i=0; i<_length; i++)
                {
                    $("#v-for-object").append(list.eq(idIndex[orderIdArray[i]]));
                }
            });
        },
        orderFn: function(letter,original){
            this.letter = letter;       //排序字段 price or sales
            this.original = original;   //排序方式  up or down
        },
        setNewsApi: function() {
            api.api('/shop/goodsList')
            .then(res => {
                this.goodsList = res;
            });
        }
    },
    //通过计算属性过滤数据
    computed:{
        //在state中定义变量num,测试vuex
        num() {
            return this.$store.state.num
        },
        list: function(){

            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i < this.goodsList.length;i++){
                //for循环数据中的每一项（根据name值）
                if(this.goodsList[i].name.search(this.searchVal) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.goodsList[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要letter不为空，说明要进行排序
            if(this.letter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.original){
                        return b[_this.letter] - a[_this.letter];
                    }else{
                        return a[_this.letter] - b[_this.letter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        }
    }
}
</script>

<style>

.fl{float:left;}
.fr{float:right;}
.p10{padding:5px;}
.red{color:red;}
.title{
    font-size: 0.32rem;
}
.titlebg{
    background:#fff;
    height:0.8rem;
    line-height:0.8rem;
    margin-top:0.1rem;
    padding:0 0.1rem;
    border-bottom: 1px solid #cecece;
}
.newList{
    display:block;
    overflow:hidden;
    line-height:1rem;
    padding:0 0.2rem;
    font-size:0.28rem;
    background:#fefefe;
    border-bottom:1px solid #f3f3f3;
}
.newList .list{
    color: #525252;
}
.newList .orderid{
    color: #a6a6a6;
}
.search{
    width: 100%;
    text-align: center;
    margin: 0.2rem 0;
    overflow:hidden;
}
.searchBox{
    width: 96%;
    height: 40px;
    outline: none;
    text-indent: 10px;
    margin: 0 2%;
    float: left;
    padding-left: 0.5rem;
    font-size: 0.32rem;
    box-sizing: border-box;
}
.search>i{
    font-size: 0.52rem;
    float: left;
    height: 40px;
    line-height: 40px;
    position: absolute;
    left: 0.2rem;
    color: #0089ff;
}
.btn{
    width: 25%;
    height: 40px;
    cursor: pointer;
    font-size: 0.32rem;
    float:left;
    background: #0095ff;
    color: #fff;
    border-radius: 5px;
}
.goodsheet{
    width: 100%;
    height: auto;
    border: 1px solid #eee;
    font-size: 0.28rem;
    background:#fff;
}
.goodsheet tr td,
.goodsheet tr th{
    width: 33.3333%;
    border: 1px solid #eee;
    padding: 5px 10px;
    text-align: center;
}
.goodsheet tr th span{
    background: #ff9900;
    padding: 0 6px;
    color: #fff;
    cursor: pointer;
}
</style>