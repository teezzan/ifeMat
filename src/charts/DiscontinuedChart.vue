<template>
  <div>
    <FunctionSlider :chart-data="datacollection" :options="options" />
    <input
      type="range"
      :min="this.min"
      :max="this.max"
      v-model="val"
      @change="fillData()"
    />
  </div>
</template>

<script>
import FunctionSlider from "../chartTemplates/FunctionSlider";

export default {
  components: {
    FunctionSlider,
  },
  props: {
    min: Number,
    max: Number,
  },
  data: () => {
    return {
      val: 300, //default value
      datacollection: null,
      options: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    linspace(a, b, n) {
      if (typeof n === "undefined") n = Math.max(Math.round(b - a) + 1, 1);
      if (n < 2) {
        return n === 1 ? [a] : [];
      }
      var i,
        ret = Array(n);
      n--;
      for (i = n; i >= 0; i--) {
        ret[i] = (i * b + (n - i) * a) / n;
      }
      return ret;
    },
    getDataFromFunction(args) {
      // let args = Array.from(arguments)
      let output = [];
      for (var j = 0; j < args.length; j = j + 2) {
        let data = args[j];
        let func = args[j + 1];
        for (var i = 0; i < data.length; i++) {
          output.push(func(data[i]));
        }
      }
      return output;
    },
    fillData() {
      let xAxis = this.linspace(-0.03, 0.03, 300);
      let xAxis2 = this.linspace(0.05, 0.07, 300);

      this.datacollection = {
        labels: [...xAxis, ...xAxis2],
        datasets: [
          {
            label: `Discontinued Distribution at ${this.val}K`,
            backgroundColor: "rgba(75, 192, 192, 1)",
            data: this.getDataFromFunction([
              xAxis,
              (x) => {
                return x * x;
              },
              xAxis2,
              (x) => {
                return x * x;
              },
            ]),
          },
        ],
      };
      this.options = {
        scaleFontSize: 0,
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
            },
          ],
        },
      };
    },
  },
};
</script>

<style>
</style>