

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
                  bottom:300
              },
              tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
              },
              series: [
                {
                  type: 'pie',
                  data: optionData,
                  id: 'pie',
                  radius: '30%',
                  center: ['50%', '25%'],
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