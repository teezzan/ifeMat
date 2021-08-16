import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {

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
