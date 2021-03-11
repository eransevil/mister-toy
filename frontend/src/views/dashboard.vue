<template>
  <section class="dahboard-container">
    <h1>Average price by type</h1>
    <chart class="doughnut-char" />
  </section>
</template>

<script>
import chart from "../components/chart.vue";
export default {
  name: "Dashboard",
  mounted() {
  },
  components: {
    chart,
  },
}; 
</script>

<style scoped>
.doughnut-char {
  width: 35%;
}
</style>