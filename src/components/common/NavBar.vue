<template>
  <div>
    <div class="titleArr">
        <div v-for="(item,index) in titleArr" class="titleItem"  @click="tabClick(item.path,index)">
          <a :class="{active: index == itemIndex}">{{item.title}}</a>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      itemIndex:0
    }
  },
  props: {
    titleArr:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    tabClick(path,index){
      this.$router.push(path)
      this.itemIndex=index
    }
  }
}
</script>

<style>
.titleArr{
  display: flex;
  height: 64px;
  line-height: 64px;
  background-color: black;
}
.titleItem{
  flex:1;
  text-align: center;
}
.titleItem a{
  color: white;
  cursor: pointer;
}
.titleItem a:hover{
  color: orange;
}
.titleItem .active{
  color: orange;
}
</style>