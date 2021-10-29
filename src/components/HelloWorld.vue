<template>
  <div class="hello">
    <span v-fonn></span>
    <input type="text" v-debounce='inputEvent' ref="inp" value="111">
    <span>{{msg}}</span>
    <div @mousemove="mouseEvent" id="div1"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
      fn: this.throttle(function(){
        console.log(arguments[0]);
      },2000)
    }   
  },
  directives: {
    debounce:{
      bind(){
        console.log('bind');
      },
      inserted(el,binding){
        let timer = null
        el.addEventListener('keyup',()=>{
          if(timer){
             clearTimeout(timer)
          }           
            timer = setTimeout(()=>{
              binding.value()
            },500)         
        })
      },
    }
  },
  methods: {
    inputEvent(){
      console.log(this.$refs.inp.value);
      this.msg=this.$refs.inp.value
    },
    mouseEvent(){
      let nn = 11
      let mm = 22
      this.fn(nn,mm)
    },
    throttle(fn,wait){
      let timer = null

      return function(...arg){
        if(!timer){
          timer = setTimeout(()=>{
            timer = null
            fn.apply(this,arg)
          },wait)
      }
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#div1{
  background-color: antiquewhite;
  width: 300px;
  height: 300px;
}
</style>
