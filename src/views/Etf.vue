<template>
  <div class="etf">
  
    <div class="etf-chart">
      <div class="chart-head">

          <div class="etf-table">
              <el-table
                :data="optionData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                size="mini" border
                >
                <el-table-column
                  label="基金名称"
                  prop="name"
                  align="center"
                  width="300">
                    <template scope="scope">
                        <el-input size="mini" v-model="scope.row.name" width="50" class="etf-name"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                  label="基金金额"
                  prop="value"
                  align="center"
                  width="300">
                    <template scope="scope">
                        <el-input size="mini" v-model="scope.row.value" width="50"  class="etf-value"></el-input>
                    </template>                  
                </el-table-column>
                <el-table-column
                  align="right"
                  width="200">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      placeholder="输入关键字搜索"
                      />
                  </template>
                  <template slot-scope="scope">
                    <el-button
                      @click="handleEdit(scope.$index, scope.row)">11111</el-button>
                    <el-button
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">dsgdsgh</el-button>
                  </template>
                </el-table-column>
              </el-table>
          </div>

          <div class="etf-input">
              
              <el-input
              type="text"
              placeholder="请输入基金名称"
              v-model="etfName"
              show-word-limit
              @keyup.enter.native="etfModfiy"></el-input>
              <el-input
              type="text"
              placeholder="请输入基金金额"
              v-model="etfValue"
              show-word-limit
              @keyup.enter.native="etfModfiy"></el-input>
              </el-input>
              <el-button type="primary">确定</el-button>

                  
          </div>
      </div>
    
      <div class="chart">

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {etfChart} from '@/common/etfChart.js'
import {getEtfData} from '@/network/request'

export default {
  name: 'etf',
  data(){
      return {
          optionData:[
            {name:'蓝筹',value: 56.5},
            {name:'农银', value: 51.1},
            {name:'白酒', value: 40.1},
            {name:'中欧', value: 25.2}],
          etfName:'',
          etfValue: '',
          input1:'',
          search: '',
          etfdata: ''
          // charDom: charDom,
          //etfChart: etfChart
      }
  },
  created(){
    getEtfData().then(res=>{
      this.etfdata=res.data
      console.log(res);
  })
  },
  mounted(){
     etfChart(this.optionData)
  },
  methods:{
      etfModfiy(){
          let name = this.etfName
          let val = this.etfValue
          console.log(name,val);
          let exist = this.optionData.find((item)=>{
              if(item.name==name){
                  item.value=val
                  return true
              }
          })
          if(!exist){
            let obj = {}
            obj.name = name
            obj.value = val
            this.optionData.push(obj)
          }
          etfChart(this.optionData)
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.optionData[index].name=row.name
        this.optionData[index].value=parseInt(row.value)
        etfChart(this.optionData) 
      },
      handleDelete(index, row) {
        this.optionData.splice(index,1)
        etfChart(this.optionData) 
      }
      
  }
}
</script>


<style scoped lang="less">
  @borderColor : #C0C4CC;
      /* background-color:#F2F6FC ; */
   .etf{
    margin: 0px auto;
    width: 100%;
    height: 1000px;
    background-color: #F2F6FC;
    padding-top: 50px;
  }
  .etf-chart{
    margin-top: 50px;
  }
  .chart-head{
    display: flex;
    width: 1200px;

    .etf-input {   
      flex: 2;
      margin-left: 50px;
      text-align: center;
      border: 1px solid @borderColor;
      padding: 30px;
      /deep/ input[type=text]{
        width: 250px;
        height: 40px;   
        margin: 0px 0px 30px 0px;           
      }
      .el-button{
        width: 250px;
      } 
    }
  }


  /deep/ input[type=text]{
    background-color: white;
  }
  .chart{
      width: 1000px;
      height: 600px;
      margin: 50px auto;
      border: 1px solid #eee;
      font-size: 16px;
  }
  .el-table{
    margin-left: 250px;
    flex: 4;
    text-align: center;
    font-size: 16px;
    padding: 0;
    width: 810px;
   /deep/ table{
      margin: 0px;
    }
  /deep/ .el-table__row{
    height: 30px !important;
  }
  /deep/ .el-table__cell{
    width: 200px;
  }
    
  /deep/ td{
    padding: 0 !important;
    height: 50px ;
    width: 100px ;
    
  }
  /deep/ input[type=text]{
    width: 150px ;
    margin: 0;
    background-color: white;
    border: none;
    font-size: 16px
  }
/deep/ .el-table__header{
  // padding: 0px !important;
} 
  .el-button{
    width: 50px;
    color: blue
  }
  // .etf-name{
  //   width: 50px;
  // }
  // .etf-value{
  //   width: 50px;
  // } 

}


</style>