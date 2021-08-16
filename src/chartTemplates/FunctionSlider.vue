<template>
  <div>
    <FunctionSlider :chart-data="datacollection" />
    <input type="range" min="0" max="100" v-model="val" @change="fillData()"/>
  </div>
</template>

<script>
import FunctionSlider from "./FunctionSlider";

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
      val: 5,
      datacollection: null,
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
      let xAxis = this.linspace(-this.val, this.val, 10);

      this.datacollection = {
        labels: xAxis,
        datasets: [
          {
            label: "f(x) = X^2",
            backgroundColor: "#f87979",
            data: this.getDataFromFunction(xAxis, (x) => {
              return x ** 2;
            }),
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>