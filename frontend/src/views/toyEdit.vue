<template>
  <form @submit.prevent="saveToy" v-if="toy" class="toy-edit-container">
    <input type v-model="toy.name" />
    <input type v-model="toy.price" />
    <input type v-model="toy.type" />
    <input type v-model="toy.inStock" />
    <button>SAVE</button>
  </form>
</template>

<script>
import { toyService } from "../services/toy.service.js";
export default {
  name: "toyEdit",
  data() {
    return {
      toy: null,
    };
  },
  methods: {
    saveToy() {
      this.$store
        .dispatch({ type: "addToy", toy: this.toy })
        .then(() => this.$router.push(`/toy/${this.toy._id}`));
    },
  },

  created() {
    // to bring from store??
    const id = this.$route.params.toyId;
    toyService
      .getById(id)
      .then((toy) => (this.toy = JSON.parse(JSON.stringify(toy))));
  },
};
</script>

<style>
</style>