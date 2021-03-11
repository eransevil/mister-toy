
<template>
  <section class="filter-container">
    <el-select v-model="filterBy.type" @change="setFilter" placeholder="Type">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-input
      class="search-input"
      placeholder="Search ..."
      @input="setFilter"
      v-model="filterBy.name"
    ></el-input>

    <div class="radio-btn-container">
      <el-radio-group v-model="filterBy.inStock">
        <el-radio-button value="all" v-model="filterBy.inStock" label="all">
          All</el-radio-button
        >
        <el-radio-button value="true" v-model="filterBy.inStock" label="true">
          In Stock</el-radio-button
        >
      </el-radio-group>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      filterBy: {
        name: "",
        inStock: true,
        type: "all",
      },
      options: [
        {
          value: "all",
          label: "All",
        },
        {
          value: "Funny",
          label: "Funny",
        },
        {
          value: "Educational",
          label: "Educational",
        },
        {
          value: "Adult",
          label: "Adult",
        },
      ],
      value: "",
      radio1: "New York",
      radio2: "New York",
    };
  },
  methods: {
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.commit({ type: "filterToy", filterBy });
      this.$store.dispatch({ type: "loadToys" });
    },
  },
  watch: {
    "filterBy.inStock"() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.commit({ type: "filterToy", filterBy: filterBy });
      this.$store.dispatch({ type: "loadToys" });
    },
  },
};
</script>

<style>
</style>