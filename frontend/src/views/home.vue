<template>
  <div class="home">
    <hello-world msg="You got a friend in Vue... " />
    <img class="toy-logo" src="../assets/img/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import helloWorld from "@/components/helloWorld.vue";

export default {
  name: "home",
  components: {
    helloWorld,
  },
};
</script>
