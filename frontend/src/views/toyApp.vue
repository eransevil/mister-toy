<template>
  <section class="toy-app-container">
    <toy-filter />

    <el-button type="primary" plain
      ><a href="#addtoy" class="slide-btn"> Add</a></el-button
    >

    <toy-list
      v-if="toysToShow && toysToShow.length"
      :toys="toysToShow"
      @removeToy="removeToy"
    />
    <div v-else-if="toysToShow && !toysToShow.length" class="no-toys">
      No toys to show
    </div>
    <!-- <img  src="../assets/img/loading.gif" /> -->
    <el-table v-else class="loading" v-loading="loading" style="width: 100%">
      dsd</el-table
    >

    <div class="block">
      <el-pagination
        @current-change="setPage"
        class="test"
        layout="prev, pager, next"
        :total="50"
      >
      </el-pagination>
    </div>

    <h2>Add Toy</h2>
    <form id="add-toy" @submit.prevent="addToy" class="add-toy-form">
      <el-input placeholder="Name" v-model="toyToEdit.name"></el-input>
      <el-input placeholder="Price" v-model="toyToEdit.price"></el-input>
      <el-input placeholder="Type" v-model="toyToEdit.type"></el-input>
      <el-button @click="addToy"  icon="el-icon-check" circle></el-button>
    </form>
  </section>
</template>

<script>
import toyList from "../components/toyList.vue";
import toyFilter from "../components/toyFilter.vue";
import { toyService } from "../services/toy.service.js";
export default {
  name: "toyApp",
  data() {
    return {
      toyToEdit: toyService.getEmptyToy(),
      loading: true,
    };
  },
  computed: {
    toysToShow() {
      return this.$store.getters.toysForDisplay;
    },
  },
  methods: {
    setPage(pageIdx) {
      console.log(pageIdx);
      this.$store.commit({ type: "setPage", pageIdx });
    },

    removeToy(toyId) {
      this.$store
        .dispatch({ type: "removeToy", toyId })
        .then(() => {
          // showMsg('toy removed')
        })
        .catch((err) => {
          // showMsg('Cannot remove toy', 'danger')
        });
    },
    addToy() {
      const toy = JSON.parse(JSON.stringify(this.toyToEdit));
      console.log(toy)
      this.$store
        .dispatch({ type: "addToy", toy })
        .then(() => {
          // showMsg('toy added')
        })
        .catch((err) => {
          // showMsg('Cannot add toy', 'danger')
        });
      this.toyToEdit = toyService.getEmptyToy();
    },
  },
  created() {},

  components: {
    toyList,
    toyFilter,
  },
};
</script>

<style>
</style>