import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    min: Number,
    max: Number,
  },
  mounted() {
    function linspace(a, b, n) {
      if (typeof n === "undefined") n = Math.max(Math.round(b - a) + 1, 1);
      if (n < 2) { return n === 1 ? [a] : []; }
      var i, ret = Array(n);
      n--;
      for (i = n; i >= 0; i--) { ret[i] = (i * b + (n - i) * a) / n; }
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

    xAxis = linspace(this.min || 1, this.max || 100, 0.01)

    this.renderChart({
      labels: [1, 2, 3, 4, 5], // This is your x axis
      datasets: [{
        label: "f(x) = x", // Name it as you want
        function: function (x) { return x },
        data: [], // Don't forget to add an empty data array, or else it will break
        borderColor: "rgba(75, 192, 192, 1)", //color
        fill: false
      },
      {
        label: "f(x) = x²",
        function: function (x) { return x * x },
        data: [],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false
      }]
    })
  }
}
