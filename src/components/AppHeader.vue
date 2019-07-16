
<template>
    <Header title="" backUrl=""></Header>
</template>

<script>
import '../assets/css/header.less'
import { Header } from 'mint-ui';
export default {
  name: 'app-header',
  props: ['headTitle'],
  data () {
    return {
      title: this.headTitle
    }
  },

  mounted(){
        this.sort();
  },
  methods: {
      sort: function(){

      }
  }
}

</script>
