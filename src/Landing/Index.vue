<template>
  <div>
    <Home />
    <About />
  </div>
</template>

<script>
import Home from "./Pages/Home.vue";
import About from "./Pages/About.vue";
export default {
  name: "Index",
  components: {
    Home,
    About,
  },
};
</script>
