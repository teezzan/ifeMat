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
    getDataFromFunction(data, func) {
      let output = [];
      for (var i = 0; i < data.length; i++) {
        output.push(func(data[i]));
      }
      return output;
    },
    fillData() {
      let xAxis = this.linspace(0.000000001, 0.000000010, 10);

      this.datacollection = {
        labels: xAxis,
        datasets: [
          {
            label: `Energy Band Gap for Different Crystal Size`,
            //backgroundColor: "rgba(75, 192, 192, 1)",
            data: this.getDataFromFunction(xAxis, (x) => {
              let h = 6.626 * 10**-34;
              let Me = 9.1095 * 10**-31;
              let q = 1.60219 * 10 **-19;
              let n1 = 1;
              let n2 = 2;
              let E1 = (n1**2 * h**2)/(8*Me*x**2 *q);
              let E2 = n2 ** 2;
              
              
              return E2 - E1; //equation for fetting Fermi probability
            }),
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