import { Pie, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'PieChart',
  extends: Pie,
  props: {
    chartData: {
      type: Object,
      default: {},
    },
  },
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData);
  },
};
