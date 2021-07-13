<template>
  <div id="app">
    <div class="chartprop">
      <CommitChart />
    </div>
    <div class="chartprop">
      <FunctionChart />
    </div>
  </div>
</template>

<script>
import CommitChart from "./charts/CommitChart";
import FunctionChart from "./charts/FunctionChart";

export default {
  name: "App",
  components: { CommitChart, FunctionChart },
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
