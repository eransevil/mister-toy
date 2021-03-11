

<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "chart",
  extends: Doughnut,
  data() {
    return {
      toyTypeMap: this.$store.getters.typeMap,
      sumType: this.$store.getters.sumType,
    };
  },
  methods: {
    getAvg() {
      const toyTypeArr = Object.values(this.toyTypeMap);
      const sumTypeArr = Object.values(this.sumType);
      const AvgPrices = toyTypeArr.map((price, idx) => price / sumTypeArr[idx]);
      return AvgPrices;
    },
  },

  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: Object.keys(this.toyTypeMap),

      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: ["#f17972", "#0000FF", "#f87209"],
          data: this.getAvg(),
        },
      ],
    });
    <style></style>;
  },
};
</script>

<style>
</style>