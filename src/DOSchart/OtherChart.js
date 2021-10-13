// CommitChart.js
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.addPlugin({
      id: "my-plugin",
      beforeInit: function(chart) {
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
      },
    });

    this.renderChart({
      // labels: [1, 2, 3, 4, 5], // This is your x axis
      labels: [10, 20, 30, 40, 50, 60],
      datasets: [
        {
          label: "Density = √(2*π*m)/h^2)/√x^1.6021773E-22",
          function: function(x) {
            let m = 1.08 * 9.1e-31;
            let h = 6.626e-34;
            return (
              Math.sqrt((2 * Math.PI * m) / Math.pow(h, 2)) /
              Math.sqrt(x * 1.6021773e-22)
            );
          },
          data: [],
          borderColor: "rgba(143, 102, 25, 1)",
          fill: false,
        },
      ],
    });
  },
};
