<template>
<div style="width: 1536px;height: 600px;">
    
        <div id="word" class="asize_div">
            <h2>名词</h2>
        </div>
    
    
<table border="1">
    <tr>
        <td class="allTd" id="td1"><span></span></td>
        <td class="allTd" id="td2"><span></span></td>
        <td class="allTd" id="td3"><span></span></td>
        <td class="allTd" id="td4"><span></span></td>
        <td class="allTd" id="td5"><span></span></td>
    </tr>
    <tr>
        <td class="allTd" id="td6"><span ></span></td>
        <td class="allTd" id="td7"><span></span></td>
        <td class="allTd" id="td8"><span></span></td>
        <td class="allTd" id="td9"><span></span></td>
        <td class="allTd" id="td10"><span></span></td>
    </tr>
    <tr>
        <td class="allTd" id="td11"><span></span></td>
        <td class="allTd" id="td12"><span></span></td>
        <td class="allTd" id="td13"><span></span></td>
        <td class="allTd" id="td14"><span></span></td>
        <td class="allTd" id="td15"><span></span></td>
    </tr>
    <tr>
        <td class="allTd" id="td16"><span></span></td>
        <td class="allTd" id="td17"><span></span></td>
        <td class="allTd" id="td18"><span></span></td>
        <td class="allTd" id="td19"><span></span></td>
        <td class="allTd" id="td20"><span></span></td>
    </tr>
</table>

    <div class="asize_div" id="notice">
        <h2>配对游戏</h2>
        <p>点击“查看所有”查看所有名词位置。点击“开始游戏”，计时开始，连着俩次点击同概念名词，会使俩格同时显示，将所有格子的名词显示，游戏结束</p>
    </div>

    <div id="bottom_div" >
        
        <input type="button" id="disAll" value="显示所有">
        <span id="disTime">时间：0秒</span>
        <input type="button" id="startTime" value="开始游戏">
    </div>

</div>  
</template>

<script>
export default {
  name:'game'
}
</script>

<style>
    
    *{
        
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a{
        text-decoration: none;
        color: white;
    }

    table{
        
        margin: 100px auto 0px 100px;
        background-color: rgb(243, 221, 193);
        display: inline-block;
    }
    td{
        width: 100px;
        height: 100px;
        text-align: center;
    }
    table span{
        display: none;
    }

    .clkdis{

        display: inline-block;
    }

    .notdis{

        display: none;
      }

      .isdis{
        display: inline-block;
      }

      #bottom_div{
        border: 1px solid;
          width: 1500px;
          height: 100px;
          margin: 10px auto;
          text-align: center;
          padding-top:5px ;
          line-height: 100px;
      }

      #bottom_div input{
          width: 100px;
          height: 50px;
          border-radius: 15px;
          background-color: navajowhite;
          
          
          
      }

      #bottom_div span{
          display: inline-block;
          width: 185px;
          height: 50px;
          border: 1px solid;
          margin: 50px;
          margin-top: 0px;
          text-align: center;
          line-height: 50px;
          
      }

      #startTime{
          margin-left: 2px;
      }

      #word{
        
          
        
        margin-top: 100px;
        margin-left: 100px
        
      }
      #word h2{
          margin:5px 0px 0px 125px;
      }
      #word p{
          margin: 5px auto;
          width: 200px;
          height: 30px;
          border: 1px solid;
          text-align: center;
          line-height: 30px;
        
      }

      .asize_div{
        width: 300px;
          height: 410px;
          border: 1px solid;
          display: inline-block;
        vertical-align: top;
      }

      #notice{
        margin-left: 100px;
        margin-top: 100px;
      }
      #notice h2{
          margin:10px 0px 0px 110px;
      }

      #notice p{
          padding: 10px;
      }
      
</style>