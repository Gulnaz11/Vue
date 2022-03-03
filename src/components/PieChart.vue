<script>
import { Pie, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'PieChart',
  extends: Pie,
  props: {
    chartData: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
    },
  },
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData);
    console.log(`this chart data=${this.chartData}`);
  },
};
</script>

<style scoped>

</style>
