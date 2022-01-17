<template>
  <div>
    <input type="text" placeholder="Amount" v-model="value">
    <input type="text" placeholder="Type" v-model="category">
    <input type="text" placeholder="Date" v-model="date">
    <button @click="addPayment">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: '',
    category: '',
    date: '',
  }),
  methods: {
    addPayment() {
      // const data = {
      //   value: this.amount,
      //   category: this.type,
      //   date: this.date || this.paymentDay,
      // };
      const {
        value, category, date, paymentDay,
      } = this;
      const data = {
        value,
        category,
        date: date || paymentDay,
      };
      this.$emit('add-payment', data);
    },
  },
  computed: {
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDay();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
};
</script>

<style scoped>

</style>
