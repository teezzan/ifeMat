<template>
  <div id="app">
    <div class="chartprop">
      <FermiDistribution />
    </div>
    <div class="chartprop">
      <FunctionChart />
    </div>
    <div class="chartprop">
      <FunctionSlider />
    </div>
  </div>
</template>

<script>
import FunctionChart from "./charts/FunctionChart";
import FermiDistribution from "./charts/FermiDistribution";
import FunctionSlider from "./charts/FunctionSlider.vue";

export default {
  name: "App",
  components: { 
    FermiDistribution, 
    FunctionChart, 
    FunctionSlider 
    },
};
</script>

<style>
#app {
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
