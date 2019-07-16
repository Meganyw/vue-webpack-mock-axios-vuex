<template>
	<div id="shoppingCart">
        <Header title="限时购" backUrl="/"></Header>
        <div class="content">
            <div class="adImg"><img src="../assets/images/ad-001.png" alt="" /></div>
            <ul  id="v-for-dataList">
                <li class="limit-item mt10" v-for="(value, key, index) in dataList">
                    <a href="javascript:;" class="limit-item-list">
                        <div class="limit-item-img">
                            <img :src="value.img" alt="" />
                        </div>
                        <div class="limit-item-display">
                            <span class="name">{{value.name}}</span>
                            <span class="shui">包税</span>
                            <div class="limit-item-info">
                                <div class="price">
                                    <span class="new">{{value.newprice}}</span>
                                    <span class="old">{{value.oldprice}}</span>
                                </div>
                                <div class="process">
                                    <span class="qiang">马上抢</span>
                                    <p><span class="shouchu">已售出{{value.sale}}%</span><mt-progress :value="value.sale" :bar-height="8"></mt-progress></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <i class="fa fa-angle-up" @click="toTop"></i>
	</div>
</template>

<script>

// 引入mockjs
import '@/api/mock/shopList'
import api from '@/api/axios/api'

  export default {
    data() {
        return {
            dataList: []
        };
    },
    mounted(){

    },
    created() {
        this.setNewsApi();
    },
    methods:{
        setNewsApi: function() {
            api.api('/shop/detailList')
            .then(res => {
                this.dataList = res;
            });
        },
        toTop() {
            //document.documentElement.scrollTop = document.body.scrollTop = 0;
            $('body,html').animate({scrollTop:0},500);
            return false;
        }
    }
  };
</script>

<style>
.adImg img{
    width:100%;
}
.limit-item{
    padding:0.2rem;
    background:#fff;
    overflow:hidden;
}
.limit-item-list{
    border-bottom: 1px solid #ccc;
}
.limit-item-img{
    float:left;
}
.limit-item-img img{
    width:2.1rem;
    height:2.1rem;
    margin-right:0.2rem;
}
.limit-item-display{
    font-size:0;
}
.limit-item-display .name{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
}
.limit-item-display span{
    font-size: 0.28rem;
    color: #333;
}
.limit-item-display .shui{
    color: red;
    font-size: 0.24rem;
    border: 1px solid red;
    padding: 0 0.1rem;
    margin:0.1rem 0;
    display:inline-block;
}
.limit-item-display .price{
    float:left;
}
.limit-item-display .price .old{
    display:block;
    color:#ccc;
    text-decoration:line-through;
    margin-top: 0.1rem;
    font-size: 0.24rem;
}
.limit-item-display .price .new{
    display:block;
    color:red;
    font-weight:bold;
}
.limit-item-display .process{
    float:right;
    display:block;

}
.limit-item-display .process>p{
    clear:both;
}
.limit-item-display .process .qiang{
    position: relative;
    color: #fff;
    background: #ff4859;
    border-radius: 24px;
    padding:0.1rem 0.3rem;
    display: inline-block;
    text-align: center;
    font-size:0.24rem;
    float: right;
}
.limit-item-display .process .shouchu{
    float:left;
    color:#ccc;
    font-size:0.24rem;
    margin-right:0.2rem;

}
.limit-item-display .process .mt-progress{
    float: left;
    width: 1.5rem;
    height: 0.36rem;
    line-height: 0.36rem;
}
.limit-item-display .process .mt-progress-progress{
    background:#ff4859;
    border-radius:0.5rem;
    height:8px !important;
}
.limit-item-display .process .mt-progress-runway{
    height:8px !important;
    border-radius:0.5rem;
}
.fa-angle-up{
    font-size: 0.5rem;
    position: fixed;
    bottom: 1.2rem;
    right: 0.2rem;
    color: #f40;
    border:1px solid #f40;
    border-radius:50%;
    width:0.8rem;
    height:0.8rem;
    text-align:center;
    line-height:0.8rem !important;
    background: #fff;
}
</style>