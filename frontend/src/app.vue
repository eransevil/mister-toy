
<template>
  <div class="container">
    <my-header />
    <router-view />
  </div>
</template>

<script>
import myHeader from "./components/header.vue";
export default {
  name: "vueApp",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  components: {
    myHeader,
  },
};
</script>

