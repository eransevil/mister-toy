<template>
  <ul class="toylist-container">
    <toy-preview
      v-for="toy in toys"
      :key="toy._id"
      :toy="toy"
      @removeToy="removeToy"
    />
  </ul>
</template>

<script>
import toyPreview from "../components/toyPreview.vue";
export default {
  name: "toyList",
  props: {
    toys: Array,
  },
  methods: {
    removeToy(toyId) {
      this.$emit("removeToy", toyId);
    },
  },
  components: {
    toyPreview,
  },
};
</script>

<style>
</style>