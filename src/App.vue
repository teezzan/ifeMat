<template>
  <div id="app">
    <CommitChart />
  </div>
</template>

<script>
import CommitChart from "./charts/CommitChart";

export default {
  name: "App",
  components: { CommitChart },
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
}
</style>
