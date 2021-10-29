<template>
  <div  class="home">
      <!-- <div id="box">
        <ul id="ul_image" >
            <li style="background-image: url(~@/assets/image/0.png);" class="current">
                
                <a href="主页.html"><div class="image_text"><h2>走进基金</h2>
                    <p>带您走进基金的世界</p></div></a>
                    
                
            </li>

            <li style="background-image: url(~@/assets/image/3.png);">
                <a href="收益计算.html"> <div style="margin-left: 700px;" class="image_text"><h2>收益计算</h2>
                    <p>体验基金的超凡收益</p></div></a>
                    
                
            </li>

            <li style="background-image: url(~@/assets/image/7.png);">
              <a href="配对游戏.html">  <div class="image_text"><h2>配对游戏</h2>
                    <p>以游戏形式了解基金</p></div></a>
                    
                
            </li>

            

            <li style="background-image: url(~@/assets/image/5.png);">
                <a href="年度基金.html"> <div style="color: black;" class="image_text"><h2>年度基金</h2>
                    <p>见识年度基金的风采</p></div></a>
                    
                
            </li>

            <li style="background-image: url(~@/assets/image/4.png);">
                <a href="常见问题.html"><div  class="image_text" style="color: black;">
                    <h2>常见问题</h2>
                    <p>为您解决基金相关疑惑</p></div></a>
                    
                
            </li>

            <li style="background-image: url(~@/assets/image/0.png);">
                
                <div class="image_text"><h2>走进基金</h2>
                    <p>带您走进基金的世界</p></div>
                    
                
            </li>
            
        </ul>
        <span id="leftSpan">&lt;</span><span id="rightSpan">&gt;</span>
    </div> -->
    <etfListVue :etfList="etfList" />
    <!-- <div id="first_center" >
        <div style="margin-left: 200px;">
            <p class="center_text">基金，英文是fund，广义是指为了某种目的而设立的具有一定数量的资金。主要包括信托投资基金、公积金、保险基金、退休基金，各种基金会的基金。</p>
            <p class="center_text">从会计角度透析，基金是一个狭义的概念，意指具有特定目的和用途的资金。我们提到的基金主要是指证券投资基金。</p>
        </div>
        <br>
        <div class="fourTitle">
                <div class="titleDiv" style="background-image: url('~@/assets/image/5.png');">
                    <h2>货币基金</h2>
                    <p>专门投向风险小的货币市场工具</p>
                    <a target="_blank"  href="https://baike.baidu.com/item/%E8%B4%A7%E5%B8%81%E5%9F%BA%E9%87%91/495006?fr=aladdin">了解更多</a>
                    
                </div>
                <div class="textDiv">
                    <p class="titleText">货币基金资产主要投资于短期货币工具（一般期限在一年以内，平均期限120天），如国债、央行票据、商业票据、银行定期存单、政府短期债券、企业债券（信用等级较高）、同业存款等短期有价证券。
                        实际上，上述这些货币市场基金投资的范围都是一些高安全系数和稳定收益的品种，所以对于很多希望回避证券市场风险的企业和个人来说，货币市场基金是一个天然的避风港，在通常情况下既能获得高于银行存款利息的收益，但货币基金并不保障本金的安全。（但在事实上由于基金性质决定了货币基金在现实中极少发生本金的亏损。一般来说货币基金被看作现金等价物。）</p>
                </div>
                
          </div>
    <div class="fourTitle">
        <div class="titleDiv" style="background-image: url('~@/assets/image/1.png');background-position:40% 70%">
                    <h2>债劵基金</h2>
                    <p>专门投资于债券的基金</p>
                    <a target="_blank" href="https://baike.baidu.com/item/%E5%80%BA%E5%88%B8%E5%9F%BA%E9%87%91/261070">了解更多</a>
                    
                </div>
                <div class="textDiv">
                    <p class="titleText">债券是政府、金融机构、工商企业等机构直接向社会借债筹措资金时，向投资者发行，并且承诺按一定利率支付利息并按约定条件偿还本金的债权债务凭证。
                        根据中国证监会对基金类别的分类标准，基金资产80%以上投资于债券的为债券基金。债券基金也可以有一小部分资金投资于股票市场，另外，投资于可转债和打新股也是债券基金获得收益的重要渠道。
                        在国内，债券基金的投资对象主要是国债、金融债和企业债。通常，债券为投资人提供固定的回报和到期还本，风险低于股票，所以相比较股票基金，债券基金具有收益稳定、风险较低的特点。</p>
                </div>
    </div>
    <div class="fourTitle">
            <div class="titleDiv" style="background-image: url('~@/assets/image/2.png');">
                <h2>混合基金</h2>
                <p>同时投资于股票、债券和货币市场等工具</p>
                <a target="_blank" href="https://baike.baidu.com/item/%E6%B7%B7%E5%90%88%E5%9F%BA%E9%87%91">了解更多</a>
                
            </div>
            <div class="textDiv" >
                <p class="titleText">混合基金与开放基金很相似，但它不以基金股份作为投资载体，而是提供一种可以以净资产价格买卖的基金单位。银行或保险公司会提供大量不同的混合基金供信托或退休帐户选择。例如，货币市场基金、债券基金和普通股基金。
                    混合基金根据资产投资比例及其投资策略再分为偏股型基金（股票配置比例50%-70%，债券比例在20%-40%）、偏债型基金（与偏股型基金正好相反）、平衡型基金（股票、债券比例比较平均，大致在40%-60%左右）和配置型基金（股债比例按市场状况进行调整）等。
                </p>
            </div>
    </div>
    <div class="fourTitle">
        <div class="titleDiv" style="background-image: url('~@/assets/image/3.png');">
            <h2>股票基金</h2>
            <p>投资于股票市场的基金</p>
            <a target="_blank" href="https://baike.baidu.com/item/%E8%82%A1%E7%A5%A8%E5%9E%8B%E5%9F%BA%E9%87%91?fromtitle=%E8%82%A1%E7%A5%A8%E5%9F%BA%E9%87%91&fromid=260968">了解更多</a>
            
        </div>
        <div class="textDiv">
            <p class="titleText">随着2015年8月8日股票型基金仓位新规的生效，所谓股票型基金，是指股票型基金的股票仓位不能低于80%。
                按股票种类分，股票型基金可以按照股票种类的不同分为优先股基金和普通股基金。优先股基金是一种可以获得稳定收益、风险较小的股票型基金，其投资对象以各公司发行的优先股为主，收益主要来自于股利收入。而普通股基金以追求资本利得和长期资本增值为投资目标，风险要较优先股基金高。
                按基金投资分散化程度，可将股票型基金分为一般普通股基金和专门化基金，前者是指将基金资产分散投资于各类普通股票上，后者是指将基金资产投资于某些特殊行业股票上，风险较大，但可能具有较好的潜在收益。
                按基金投资的目的，可将股票型基金分为资本增值型基金、成长型基金及收入型基金。资本增值型基金投资的主要目的是追求资本快速增长，以此带来资本增值，该类基金风险高、收益也高。
            </p>
        </div>
    </div>
    <br><br><br>
    <div  style="float: right;font-size:15px">
  <p>想了解更多？请查看常见问题</p>
    <input type="button" value="常见问题" style="float: right;width: 100px;height: 50px;background-color: cornflowerblue;border-radius: 5px;"></div>
    
    
    </div>   <br><br><br>    -->
  </div>
</template>

<script>
import etfListVue from './childHome/etfList.vue'
// @ is an alias to /src


export default {
  name: 'home',
  data () {
    return {
      etfList:[{title:'货币基金',shortDesc:'专门投向风险小的货币市场工具',url:'5.png',href:'https://baike.baidu.com/item/%E8%B4%A7%E5%B8%81%E5%9F%BA%E9%87%91/495006?fr=aladdin',
                longDesc:`货币基金资产主要投资于短期货币工具（一般期限在一年以内，平均期限120天），如国债、央行票据、商业票据、银行定期存单、政府短期债券、企业债券（信用等级较高）、同业存款等短期有价证券。
                        实际上，上述这些货币市场基金投资的范围都是一些高安全系数和稳定收益的品种，所以对于很多希望回避证券市场风险的企业和个人来说，货币市场基金是一个天然的避风港，在通常情况下既能获得高于银行存款利息的收益，但货币基金并不保障本金的安全。（但在事实上由于基金性质决定了货币基金在现实中极少发生本金的亏损。一般来说货币基金被看作现金等价物。）`},
                        {title:'债劵基金',shortDesc:'专门投资于债券的基金',url:'1.png',href:'https://baike.baidu.com/item/%E5%80%BA%E5%88%B8%E5%9F%BA%E9%87%91/261070',
                longDesc:`债券是政府、金融机构、工商企业等机构直接向社会借债筹措资金时，向投资者发行，并且承诺按一定利率支付利息并按约定条件偿还本金的债权债务凭证。
                        根据中国证监会对基金类别的分类标准，基金资产80%以上投资于债券的为债券基金。债券基金也可以有一小部分资金投资于股票市场，另外，投资于可转债和打新股也是债券基金获得收益的重要渠道。
                        在国内，债券基金的投资对象主要是国债、金融债和企业债。通常，债券为投资人提供固定的回报和到期还本，风险低于股票，所以相比较股票基金，债券基金具有收益稳定、风险较低的特点。`},
                        {title:'混合基金',shortDesc:'同时投资于股票、债券和货币市场等工具',url:'2.png',href:'https://baike.baidu.com/item/%E6%B7%B7%E5%90%88%E5%9F%BA%E9%87%91',
                longDesc:`混合基金与开放基金很相似，但它不以基金股份作为投资载体，而是提供一种可以以净资产价格买卖的基金单位。银行或保险公司会提供大量不同的混合基金供信托或退休帐户选择。例如，货币市场基金、债券基金和普通股基金。
                    混合基金根据资产投资比例及其投资策略再分为偏股型基金（股票配置比例50%-70%，债券比例在20%-40%）、偏债型基金（与偏股型基金正好相反）、平衡型基金（股票、债券比例比较平均，大致在40%-60%左右）和配置型基金（股债比例按市场状况进行调整）等。`},
                        {title:'股票基金',shortDesc:'投资于股票市场的基金',url:'3.png',href:'https://baike.baidu.com/item/%E8%82%A1%E7%A5%A8%E5%9E%8B%E5%9F%BA%E9%87%91?fromtitle=%E8%82%A1%E7%A5%A8%E5%9F%BA%E9%87%91&fromid=260968',
                longDesc:`随着2015年8月8日股票型基金仓位新规的生效，所谓股票型基金，是指股票型基金的股票仓位不能低于80%。
                按股票种类分，股票型基金可以按照股票种类的不同分为优先股基金和普通股基金。优先股基金是一种可以获得稳定收益、风险较小的股票型基金，其投资对象以各公司发行的优先股为主，收益主要来自于股利收入。而普通股基金以追求资本利得和长期资本增值为投资目标，风险要较优先股基金高。
                按基金投资分散化程度，可将股票型基金分为一般普通股基金和专门化基金，前者是指将基金资产分散投资于各类普通股票上，后者是指将基金资产投资于某些特殊行业股票上，风险较大，但可能具有较好的潜在收益。
                按基金投资的目的，可将股票型基金分为资本增值型基金、成长型基金及收入型基金。资本增值型基金投资的主要目的是追求资本快速增长，以此带来资本增值，该类基金风险高、收益也高。`}]
    }
  },
  components: {
      etfListVue
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

  #leftSpan{
      position: absolute;
      left: 0px;
      top: 50%;
      display: inline-block;
      display: inline-block;
      transform: translateY(-50%);
  }

  #rightSpan{
      position: absolute;
      right: 0px;
      top : 50%;
      display: inline-block;
      transform: translateY(-50%);
  }

  #ul_image li{
      position: absolute;
      left: 0;
      top: 0;
      display: none;
      font-size: 25px;
      /* display: inline-block; */
      width: 1520px;
      height: 350px;
      vertical-align: top;
      
      background-size: 1520px;
      background-position: 0% 50%; 
      list-style: none;
  }

  #ul_image{
      position: relative;
      width: 1520px;
      font-size: 0px;
      position: absolute;
  }
  

  .image_text{
      color: white;
      font-size:30px;
      width: 500px;
      height: 100px;
      
      margin: 40px 50px 50px 50px;
      
  }
  li a{
      display: block;
      width: 1520px;
      height: 350px;
  }
  #ul_image .current{
      display: block;
  }
    
</style>
