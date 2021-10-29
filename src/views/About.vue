<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'about',
  data(){
    return {
      a:111111,
      obj:{
        a:5555,
        b:88888
      }
    }
  },
  watch:{
    a:{
      handler(nv,ov){
        console.log(nv,ov);
      },
      immediate:true
    },
    'obj.a':{
      handler(nv,ov){
        console.log(nv,ov);
      },
      // deep:true
    }
  }
}
</script>
