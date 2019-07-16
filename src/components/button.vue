<template>
    <div class="button">
        <div>
            <h1 style="text-align:center;">element-ui</h1>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </div>
    </div>
</template>
<script>
import { Button, Select } from 'element-ui';

export default {
  name: 'First',
  data () {

  },
  components: {

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
