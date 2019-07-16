<template>
	<div id="mine">
        <Header title="个人中心" backUrl="/"></Header>
        <div class="content">
            <div class="headerImg">
                <img class="fl" src="../assets/images/header.jpeg" alt="" @click="sendParams()">
                <span class="fl name">Song_yw</span>
                <span class="fr renzheng">实名认证</span>
            </div>
            <ul class="new" id="v-for-object">
                <li class="newList mt10">
                    <span class="fl list">全部订单</span>
                    <span class="fr orderid">
                        查看详情
                        <i class="fa fa-angle-right fa-fw"></i>
                    </span>
                </li>
            </ul>
            <div class="icon-list mt10">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="fa fa-star-o"></i>
                            <p class="icon-name">我的收藏</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="fa fa-list-alt"></i>
                            <p class="icon-name">我的订单</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="fa fa-user-plus"></i>
                            <p class="icon-name">推荐好友</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="fa fa-map-marker"></i>
                            <p class="icon-name">收货地址</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="fa fa-money"></i>
                            <p class="icon-name">资金流水</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="fa fa-barcode"></i>
                            <p class="icon-name">商家中心</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="ul-list">
                <ul class="operationList mt10">
                    <li class="five">
                        <span class="icon"><i class="fa fa-credit-card fa-fw"></i></span>
                        <span class="name">待支付</span>
                    </li>
                    <li class="five">
                        <span class="icon"><i class="fa fa-inbox fa-fw"></i></span>
                        <span class="name">待发货</span>
                    </li>
                    <li class="five">
                        <span class="icon"><i class="fa fa-truck fa-fw"></i></span>
                        <span class="name">待收货</span>
                    </li>
                    <li class="five">
                        <span class="icon"><i class="fa fa-envelope-open-o fa-fw"></i></span>
                        <span class="name">评价管理</span>
                    </li>
                    <li class="five">
                        <span class="icon"><i class="fa fa-rmb fa-fw"></i></span>
                        <span class="name">售后管理</span>
                    </li>
                </ul>
                <ul class="operationList mt10" id="v-for-object">
                    <li class="four" v-for="(value, key, index) in object">
                        <span class="icon">{{value.list}}</span>
                        <span class="name">
                            {{value.number}}
                        </span>
                    </li>
                </ul>
                <ul class="new mt10 mine" id="v-for-object">
                    <li class="newList" v-for="(value, key, index) in object1">
                        <img :src="value.img" alt="" />
                        <span class="fl list">{{value.list}}</span>
                        <span class="fr orderid">
                            <i class="fa fa-angle-right fa-fw"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>

<script>
import icon01 from '../assets/images/icon-item-001.png'
import icon02 from '../assets/images/icon-item-002.png'
import icon03 from '../assets/images/icon-item-003.png'
import icon04 from '../assets/images/icon-item-004.png'
import icon05 from '../assets/images/icon-item-005.png'
import icon06 from '../assets/images/icon-item-006.png'

export default {
    data () {
        return {
            headTitle: '个人中心',
            object: [
                {list: '0', number: '我的收藏'},
                {list: '2222', number: '我的积分'},
                {list: '3', number: '优惠券'},
                {list: '67', number: '礼品卡'}
            ],
            object1: [
                {list: '会员福利社' ,img: icon01},
                {list: '我的权益' ,img: icon02},
                {list: '我的产品库' ,img: icon03 },
                {list: '帮助中心' ,img: icon04},
                {list: '设置' ,img: icon05},
                {list: '关于我们' ,img: icon06}
            ],

        }
    },
    mounted(){

    },
    methods: {
        sendParams: function(){
            var time = Date.parse(new Date());
            var date = new Date(time);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            var timer = Y+M+D+h+m+s
            this.$router.push({//路由传参数 path和query， name和params ，俩组配合使用
                path: '/personal',
                query: {
                    id: timer,
                    name: $('.name').html()
                }
            })
        }
    }
}
</script>
