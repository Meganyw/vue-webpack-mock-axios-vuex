<template>
    <div>
        <Header title="个人资料" backUrl="/mine"></Header>
        <div class="content">
            <mt-field label="用户名" v-bind:placeholder="name1" v-model="username" autocomplete="off"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" autocomplete="new-password"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" autocomplete="new-password" style="position:absolute;z-index:-1; "></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="验证码" v-model="captcha">
                <img src="../assets/images/img.png" height="45px" width="100px">
            </mt-field>
            <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
            <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
            <mt-field label="自我介绍" v-bind:placeholder="msg" type="textarea" rows="4" v-modal="introduction"></mt-field>
        </div>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
export default {
    data () {
        return {
            msg: '',
            name1:''
        }
    },
    mounted(){
        this.sort();
    },
    methods: {
        sort: function(){
            this.id = this.$route.query.id ;//接受路由传递的参数
            this.name = this.$route.query.name ;
            this.msg = this.id;
            this.name1 = this.name;
        }
    }
}

</script>

<style>
.timer{
    font-size:0.32rem;
    color:red;
}
</style>