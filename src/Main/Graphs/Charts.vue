<template>
  <div id="chart">
    <div class="chartprop">
      <FermiDistribution :max="600" :min="100" />
    </div>
    <div class="chartprop">
      <FunctionChart />
    </div>
    <div class="chartprop">
      <Dos />
    </div>
    <div class="chartprop">
      <OtherChart />
    </div>
  </div>
</template>

<script>
import FunctionChart from "../../chartTemplates/FunctionChart";
import FermiDistribution from "../../charts/FermiDistribution.vue";
import Dos from "../../DOSchart/Dos.vue";
import OtherChart from "../../DOSchart/OtherChart";
export default {
  name: "Charts",
  components: {
    FermiDistribution,
    FunctionChart,
    Dos,
    OtherChart,
  },
};
</script>

<style>
#chart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 254px;
}
.chartprop {
  max-width: 700px;
  max-height: 500px;
}
</style>
