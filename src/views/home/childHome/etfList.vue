<template>
  <div>
    <div class="etfList">
      <div class="etfItem"  v-for="(item,key) in etfList" :key="key">
        <div class="titleDiv" 
        :style="{ 'background-image': 'url(' + require('../../../assets/image/'+item.url) + ')','background-repeat':'no-repeat','background-position':'40% 70%' }"
        >
            <h2>{{item.title}}</h2>
            <p>{{item.shortDesc}}</p>
            <a target="_blank"  :href="item.href">了解更多</a>            
        </div>
        <div class="textDiv">
            <p class="titleText">{{item.longDesc}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  data(){
    return {
      etfdata:null
    }
  },
  props:{
    etfList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  created(){
  },
  methods:{
    GetUrl(url)
    {
      return require(url)
    }
  }
}
</script>

<style> 
a{
      text-decoration: none;
      color: white;
  }

  #first_center{
      padding: 50px;
  }

  .titleDiv{
      
      width: 300px;
      height: 250px;
      background-color: silver;
      padding: 30px 0px 0px 30px;
      display: inline-block;
      background-image: url("../../../assets/image/5.png");
  }

  .titleDiv a{
      display: block;      
      bottom: 40px;
      left: 30px;
      width: 90px;
      height: 30px;
      color: white;
      background-color: rgb(251, 101, 26);
      text-decoration: none;
      text-align: center;
      line-height: 30px;
      border-radius: 2px;
      margin-top: 130px 
  }

  .textDiv{
      width: 900px;
      height: 280px;
      display: inline-block;
      background-color: white;
      
      vertical-align: top;
  }

  .titleText{
      padding: 50px;
      
  }

  .fourTitle{
      margin-top: 20px;
      margin-left: 100px ;
      
  }

  #box{
      width: 1520px;
      height: 350px;
      position: relative;
      
      
  }

  #box span{
      color: white;     
      border: 1px solid;
      font-size: 55px;
      display: none;
      cursor: pointer;
  }

  .isdis{
      display: inline-table;
  }

  .image_text{
      color: white;
      font-size:30px;
      width: 500px;
      height: 100px;
      
      margin: 40px 50px 50px 50px;
      
  }


</style>