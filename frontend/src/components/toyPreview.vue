<template>
  <li class="toy-preview-container">
    <span> Name: {{ toy.name }} </span>
    <span> Price: {{ toy.price }} </span>
    <span> In Stock: {{ toy.inStock }} </span>
    <span> Type: {{ toy.type }} </span>

    <el-button-group class="btn-container">
      <el-button
        class="info-btn"
        type="primary"
        @click="editToy(toy._id)"
        icon="el-icon-edit"
      ></el-button>
      <el-button
        class="info-btn"
        type="info"
        @click="showDetails(toy._id)"
        icon="el-icon"
        >ℹ</el-button
      >
      <el-button
        type="danger"
        @click="removeToy(toy._id)"
        icon="el-icon-delete"
      ></el-button>
    </el-button-group>
  </li>
</template>

<script>
export default {
  name: "toyPreview",
  props: {
    toy: Object,
  },
  methods: {
    showDetails(toyId) {
      this.$router.push(`/toy/${toyId}`);
    },
    removeToy(toyId) {
      this.$emit("removeToy", toyId);
    },
    editToy(toyId) {
      this.$router.push(`/toy/edit/${toyId}`);
    },
  },
};
</script>

<style>
</style>