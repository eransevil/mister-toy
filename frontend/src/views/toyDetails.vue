<template >
  <section v-if="toy" class="toy-details-container">
    <p class="toy-details">name: {{ toy.name }}</p>
    <p class="toy-details">price: {{ toy.price }}</p>
    <p class="toy-details">type: {{ toy.type }}</p>
    <p class="toy-details">in Stock: {{ toy.inStock }}</p>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";
export default {
  name: "toyDetails",
  data() {
    return {
      toy: null,
    };
  },

  created() {
    const _id = this.$route.params.toyId;
    toyService.getById(_id).then((toy) => {
      this.toy = toy;
    });
  },
};
</script>

