<template>
  <div id="news">
     <!--<div class="demo-alert-box">
      <strong>Error!</strong>
      <slot>插槽后备内容</slot>
    </div>
    <header>
      <slot name="header"></slot>
    </header>-->
    <div class="demo-alert-box">
      <slot v-bind:user="user">
          {{user[0].lastName}}
      </slot>
    </div>

  </div>
</template>

<script>

export default {
  name: 'news',
  data () {
    return {
      msg: '页面加载于 ' + new Date().toLocaleString(),
      user: [
        {lastName:'yanwei'},
        {firstName:'song_我是插槽过来的,我是为了验证git的'}
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped>
#news{
  /*padding-top:0.9rem;*/
}
.demo-alert-box{
  font-size:0.3rem;
  background:#f19f9f;
  border:1px solid #eee;
  color:#fff;
  padding:5px;
}

</style>

