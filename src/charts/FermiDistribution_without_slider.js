import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
function linspace(a,b,n) {
      if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
      if(n<2) { return n===1?[a]:[]; }
      var i,ret = Array(n);
      n--;
      for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
      console.log(ret);
      return ret;
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
    let xAxis = linspace(-0.03, 0.03, 1000);
    // console.log(xAxis, kT);


    this.renderChart({
      labels: xAxis, // This is your x axis
      datasets: [{
        label: "T = 300K", // Name it as you want
        function:  (x)=> {
          // return x;
          return (1 / (1 + Math.exp(x / kT)));
        },
        data: [], // Don't forget to add an empty data array, or else it will break
        borderColor: "rgba(75, 192, 192, 1)", //color
        fill: false
      },
      {
        label: "T= 600K",
        function:  (x)=> { 
          let kt_600 = (600/300)*kT
          return (1 / (1 + Math.exp(x / kt_600)));
          // return x;
        },
        data: [],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false
      }]
    })
  }
}
