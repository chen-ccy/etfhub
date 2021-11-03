<template>
                <el-table
                :data="optionData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                class="eltable"
                style="width:'600px'"
                size="mini" fit=false show-header=false border
                >
                <el-table-column
                  label="基金名称"
                  prop="name"
                  align="center"
                  width="100">
                    <template scope="scope">
                        <el-input size="mini" v-model="scope.row.name" class="etf-name"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                  label="基金金额"
                  prop="value"
                  align="center"
                  width="100">
                    <template scope="scope">
                        <el-input size="mini" v-model="scope.row.value"  class="etf-value"></el-input>
                    </template>                  
                </el-table-column>
                <el-table-column
                  align="right"
                  width="100">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索"
                      />
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
</template>

<script>
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

<style>

</style>