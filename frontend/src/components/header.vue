<template>
  <section class="header-container">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">Home</router-link></el-menu-item
      >
      <el-menu-item index="4">
        <router-link to="/toy">Toys</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">Dashboard</template>
        <el-menu-item index="2-1" @click="movePage('/dashboard')"
          >Doughnut Chart
        </el-menu-item>
        <el-menu-item disabled index="2-2">In progress</el-menu-item>
      </el-submenu>
    </el-menu>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    movePage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
</style>