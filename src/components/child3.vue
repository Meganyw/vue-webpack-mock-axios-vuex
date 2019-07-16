<template>
    <div id="shoppingCart">
        <ul class="new" id="v-for-data">
            <li class="newList mt5" v-for="(value, key, index) in data">
                <img :src="value.profile_image" alt="" />
                <span>{{value.name}}</span>
                <span class="time">{{value.created_at}}</span>
                <div class="list-content">
                    <span class="fl list">{{value.text}}</span>
                    <img :src="value.image1" alt="" />
                </div>
                <div class="display">
                    <span class="bottom">--- {{value.name}}</span>
                    <div class="display-name">
                        <i class="fa fa-heart fa-fw"></i><span>{{value.love}}</span>
                        <i class="fa fa-thumbs-up fa-fw"></i><span>{{value.favourite}}</span>
                        <i class="fa fa-weixin fa-fw"></i><span>{{value.comment}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios'

export default {
    name: 'app',

    data() {
      return {
        msg: 'mint-ui-example',
        data :[],
        title:'热门段子',
        backUrl: '/'
      };
    },
    mounted(){
        this.submitForm()
    },
    methods: {

        submitForm () {
            this.$axios({
                method:"get",
                url:'/api/v2/satinApi',
                data:{
                    type:"5",
                    page:"10"
                },
                headers:{'Content-Type' :'application/x-www-form-urlencoded'}
            })
            .then(res => {
                if (res.status === 200 ){
                    console.log(res);
                    this.data = res.data.data;
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        reversedmsg: function(){
            return this.msg.split('').reverse().join('')
        }
    }
};
</script>

<style>
.orderid{
    display:block;
}
.time{
    font-size:0.24rem;
    float:right;
}
.display,.list-content{
    clear: both;
    display:block;
}
.list-content>img{
    width:100%;
    height:100%;
}
.list-content .list{
    line-height:0.48rem;
}
.bottom{
    float: right;
    color:#acacac;
}
.display-name{
    float:left;
    color:#acacac;
}
.name>span{
    margin-right:0.2rem;
}
.fa-heart{
    color:red;
}
.fa-thumbs-up{
    color:#ffbd01;
}
.fa-weixin{
    color:#61d2eb;
}
</style>