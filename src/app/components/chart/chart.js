/**
 * Created by Iryna_Petrenko1 on 8/16/2017.
 */
import Highcharts from "highcharts";
export  default class Chart{
  constructor(){
    console.log(Highcharts);
    this.chart=null;
    this.initChart();
    this.init();

  }
  initChart(){
    this.chart = Highcharts.chart('container', {
      title: {
        text: 'Chart.update'
      },
      colors: ['#fff', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
        '#FF9655', '#FFF263', '#6AF9C4'],
      chart: {
        backgroundColor: "#2a3f50"
      },

      subtitle: {
        text: 'Plain'
      },

      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
      }],

      plotOptions:{
        column:{
          borderWidth:"0"
        }
      }


    });

  }
  init(){
    $('#plain').click(function () {
      this.chart.update({
        chart: {
          inverted: false,
          polar: false
        },
        subtitle: {
          text: 'Plain'
        }
      });
    });

    $('#inverted').click(function () {
      this.chart.update({
        chart: {
          inverted: true,
          polar: false
        },
        subtitle: {
          text: 'Inverted'
        }
      });
    });

    $('#polar').click(function () {
      this.chart.update({
        chart: {
          inverted: false,
          polar: true
        },
        subtitle: {
          text: 'Polar'
        }
      });
    });
  }

}





