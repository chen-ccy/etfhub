<template>
  <div class="etf">
    <div class="etf-chart">
      <div class="chart-head">

          <div class="etf-input">
              
              <el-input
              type="text"
              placeholder="请输入基金名称"
              v-model="etfName"
              maxlength="10"
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

          <div class="etf-table">
              <el-table
                :data="optionData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="60%">
                <el-table-column
                  label="基金名称"
                  prop="name"
                  align="center">
                    <template scope="scope">
                        <el-input size="mini" v-model="scope.row.name" class="etf-name"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                  label="基金金额"
                  prop="value"
                  align="center">
                    <template scope="scope">
                        <el-input size="mini" v-model="scope.row.value"  class="etf-value"></el-input>
                    </template>                  
                </el-table-column>
                <el-table-column
                  align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索"/>
                  </template>
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
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

export default {
  name: 'etf',
  data(){
      return{
          optionData:[
            {name:'蓝筹',value: 56.5},
            {name:'农银', value: 51.1},
            {name:'白酒', value: 40.1},
            {name:'中欧', value: 25.2}],
          etfName:'',
          etfValue: '',
          input1:'',
          search: ''
          // charDom: charDom,
          //etfChart: etfChart
      }
  },
  created(){
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

<style scoped>
 *{
      padding: 0;
      margin: 0;
  }

      /* background-color:#F2F6FC ; */
  .etf{
    width: 1200px;
  }
  .etf-chart{

    height: 800px;
    background-color: #F2F6FC;
    border: 1px solid;
  }
  .chart-head{
    width: 1200px;
    /* display: flex;
    justify-items: center; */
  }
  .etf-table{
    width: 60%;
    padding: 10px;
    margin: 0 auto;
  }
  .etf-input{
      width: 800px;
      height: 50px;
      margin: 0 auto;
  }
  .el-table .etf-name{
    width: 200px;
  }
  .el-table .etf-value{
    width: 100px;
  }
  .etf-input .el-input{
      width: 200px;   
      margin: 10px;        
  }
  .etf-input .el-button{

  }
  .chart{
      width: 100%;
      height: 700px;
      border: 1px solid;
  }

</style>