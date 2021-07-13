// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    function makeArr(startValue, stopValue, cardinality) {
      var arr = [];
      var step = (stopValue - startValue) / (cardinality - 1);
      for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
      }
      return arr;
    }

    this.addPlugin({
      id: 'my-plugin',
      beforeInit: function (chart) {
        // We get the chart data
        var data = chart.config.data;

        // For every dataset ...
        for (var i = 0; i < data.datasets.length; i++) {

          // For every label ...
          for (var j = 0; j < data.labels.length; j++) {

            // We get the dataset's function and calculate the value
            var fct = data.datasets[i].function,
              x = data.labels[j],
              y = fct(x);
            // Then we add the value to the dataset data
            data.datasets[i].data.push(y);
          }
        }
      }
    });

    //get an array of equally spaced numbers
    let kT = 0.00257;
    let xAxis = makeArr(-0.3, 0.3, 0.001);


    this.renderChart({
      labels: xAxis, // This is your x axis
      datasets: [{
        label: "T = 300K", // Name it as you want
        function: function (x) {
          return (1 / (1 + Math.exp(x / kT)));
        },
        data: [], // Don't forget to add an empty data array, or else it will break
        borderColor: "rgba(75, 192, 192, 1)", //color
        fill: falsekT
      },
      {
        label: "T= 600",
        function: function (x) { 
          let kt_600 = (600/300)*kT
          return (1 / (1 + Math.exp(x / kt_600)));
        },
        data: [],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false
      }]
    })
  }
}
