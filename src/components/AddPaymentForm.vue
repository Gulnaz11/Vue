<template>
  <div>
    <button class="btn btn-outline-dark" v-on:click="show = !show">
      Add new coast
    </button>
    <transition name="fade">
      <form class="addForm" action="#" v-if="show">
        <div class="addForm-div">
           <input type="number" min="1" placeholder="Amount" required  v-model="value">
           <input type="text" placeholder="Type" required v-model="category">
           <input type="text" placeholder="Date" v-model="date">
           <br>
           <button class="btn btn-outline-dark" @click="addPayment">Add</button>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: '',
    category: '',
    date: '',
    show: false,
    show2: true,
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
      if (data.category && data.value >= 1) {
        this.$emit('add-payment', data);
      }
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
