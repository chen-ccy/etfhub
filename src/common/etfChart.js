

import * as echarts from 'echarts';

export function etfChart(optionData){

        let chartDom = document.getElementsByClassName('chart')[0]
        let myChart = echarts.init(chartDom);
        setTimeout(function () {
            var option = {
              title: {
                    text: '基金实盘',
                    left: 'center'
                  },
              legend: {
                  left:30,
                  top:100,
                  padding: 10,
                  orient :'vertical',
                  textStyle:{
                    fontSize : 16
                  } 
              },
              tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)",
                extraCssText:"fontSize: px"
              },
              series: [
                {
                  type: 'pie',
                  data: optionData,
                  id: 'pie',
                  radius: '65%',
                  center: ['50%', '55%'],
                  emphasis: {
                    focus: 'self'
                  },
                  label: {
                    formatter: '{b}: {c} ({d}%)'
                  },
                }
              ]
            };
            myChart.setOption(option);
          });
    }



    // function etfModfiy(){
        
    // }