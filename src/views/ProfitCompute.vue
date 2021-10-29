<template>
  <div>
      <div id="fdiv">
      <div style="display: inline-block;vertical-align:bottom;width: 340px;height: 800px;">
          <div id="explain">
                  <h3 style="margin:10px 0px 0px 50px"><p>名词解释</p>  </h3>
                  <p style="padding: 5px;"></p>
                  </div>
                  <img  style="vertical-align: bottom; display: inline-block; width: 100px;margin:350px 0px 0px -20px;" src="~@/assets/image/倾斜问号.png" alt="">
          </div>
      
      <form action="" name="frist">
          <h2>复利计算器</h2><br><br>
          <label class="form_label" for="rate">年化收益率</label><input type="text" placeholder="请输入百分比(%)"  id="rate"><img src="~@/assets/image/问号.png" alt=""> <br>
          <label class="form_label" for="year">投资年数</label><input type="text" placeholder="请输入投资年数" id="year"><img src="~@/assets/image/问号.png" alt=""><br>
          <label class="form_label" for="onemoney">只投资一次金额</label><input type="text" placeholder="请输入金额(元)" id="onemoney"><img src="~@/assets/image/问号.png" alt=""><br>
          <label class="form_label" for="money">每年固定投资金额</label><input type="text" placeholder="请输入金额(元)" id="money" ><img src="~@/assets/image/问号.png" alt=""><br>
          <label class="form_label" for="omoney">一次的累计金额</label><input  type="text" placeholder="点击“查看惊喜”显示"   class="inpm" disabled id="omoney"><img src="~@/assets/image/问号.png" alt=""><br>
          <label class="form_label" for="nowmoney">多次的累计金额</label><input  type="text" placeholder="点击“查看惊喜”显示" class="inpm" disabled id="nowmoney"><img src="~@/assets/image/问号.png" alt=""><br>
          <input class="inpBtn" type="button" value="查看惊喜"  onclick="return tomoney()">
          <input class="inpBtn" type="button" value="清空数值"  onclick="delAll()">
          <p>*鼠标悬浮在相应文本框上，查看名词解释</p>
          <p>*实际上，年化收益率会随各种因素而变化</p>
          <p style="margin-right: 35px;">不可能每年固定不变，此处仅供参考</p>
          <input type="button" class="dis-data" value="显示每年详细数据" onclick="disData()">
      </form>
        
    </div>
    
   

<div id="disall"  class="" >
    <!-- <h3>一次投资金额每年增长明细</h3>

    <h3 style="margin-left: 260px;"> 多年投资金额每年增长明细</h3>
    
    
    <div id="oneTime"  class="moneyDisplay">
        
    </div>

    <div id="manyTime" class="moneyDisplay" >
        
    </div> -->

  </div>
  <input type="button" style="display: none;" class="dis-data" value="收起每年详细数据" onclick="hideData()">

  </div>
</template>

<script>
export default {

}
</script>

<style>
    a{
        text-decoration: none;
        color: white;
    }


    #fdiv h2{
        margin-top: 50px;
    }

    form img{
        width: 50px;
        vertical-align: middle;
        margin-right: 50px ;
    }

    form{
        
        display: inline-block;
        
        background-color:rgb(252, 252, 232);
        width: 700px;
        min-height: 700px;
        margin: 50px auto 0px auto;
        border: 2px solid lightgoldenrodyellow;
        text-align: center;
        padding: 10px 30px 15px 20px;
    }

      input[type=text]{
          padding-left: 16px;
          background-color: rgb(250, 233, 231);
          border-radius: 5px;
        width: 300px;
        height: 35px;
        margin: 25px 35px 15px 60px;
    }
    #fdiv .inpBtn{
        margin: 15px 150px 10px 50px;
        width: 90px;
        height: 50px;
        border-radius: 30px;
    }



    #disall{
        
        /* font-size: 0px; */
        width: 1200px;
        margin: 30px auto;
        min-height: 500px;
        display: none;
        
    }


    #disall h3{
        font-size: 20px;
        display: inline-block;
        margin-left: 130px;
        
    }

    #oneTime{
        text-align: right;
        border-right:1px solid lightyellow;
    }

    #manyTime{
        text-align: left;
        border-left:1px solid lightyellow;
    }

    .moneyDisplay{
        font-size: 20px;
        width: 499px;
        min-height: 500px;
        display: inline-block;
        text-align: center;
        background: lightblue;
        
    }

    .dis-data{
        width: 700px;
        height: 30px;
        display: block;
        margin: 25px auto 5px auto  ;
    }

    form p{
        text-align: right;
    }






        #explain{
            
            background-color: wheat;
            width: 200px;
            height: 200px;
            border-radius:25px ;
            display: inline-block;
            margin: 300px 0px 0px 20px;
  
        }

        .form_label{
            display: inline-block;
            width: 150px;
            height: 30px;
            text-align: right;
        }

        table{
            background-image: url('~@/assets/image/P2.jpg');
            border: 1px solid;
        }

        #disall td{
            width: 400px;
            height: 50px;
            border: 1px solid;
            text-align: center;
        }
    

</style>