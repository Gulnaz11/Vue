<template>
  <div class="small">
    <pie-chart :chartData="datacollection"/>

  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import PieChart from '../charts/PieChart';
// import PieChart from './PieChart.vue';

export default {
  name: 'ChartComp',
  components: {
    PieChart,
  },
  data: () => ({
    colors: [],
    datacollection: {},
    paymentValue: [],
  }),
  methods: {
    getRandomInt() {
      const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(1, 100);
      const g = randomBetween(30, 200);
      const b = randomBetween(90, 220);
      return `rgb(${r},${g},${b})`; // Collect all to a css color string
    },
  },
  mounted() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.categoryList.length; i++) {
      this.colors.push(this.getRandomInt());
      this.paymentValue[i] = 0;
    }
    const amountOfPages = Object.keys(this.paymentsList).length;
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= amountOfPages; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < Object.keys(this.paymentsList[i]).length; j++) {
        this.categoryList.forEach((el, index) => {
          if (el === this.paymentsList[i][j].category) {
            this.paymentValue[index] += +this.paymentsList[i][j].value;
          }
        });
      }
    }
    this.categoryList.splice(this.categoryList.length - 1, 1);
    this.datacollection = {
      labels: this.categoryList,
      datasets: [
        {
          label: 'Payments',
          backgroundColor: this.colors,
          data: this.paymentValue,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(['paymentsList', 'categoryList']),
  },
};
</script>

<style>
</style>
