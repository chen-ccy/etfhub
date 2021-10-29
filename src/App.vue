<template>
  <div id="app">
    <nav-bar :titleArr='titleArr' id="nav"></nav-bar>
    <router-view/>
  </div>
</template>
 
<script>

import NavBar from '@/components/common/NavBar'

export default {
    data () {
    return {
      titleArr:[
        {title:'主页',path:'/home'},
        {title:'收益计算',path:'/profitCompute'},
        {title:'配对游戏',path:'/game'},
        {title:'基金实盘',path:'/etf'},
        {title:'常见问题',path:'/question'}
        ]
    }
  },
  components: {
    NavBar
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>
