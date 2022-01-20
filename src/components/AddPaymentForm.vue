<template>
  <div>
    <button class="btn btn-outline-dark" v-on:click="show = !show">
      Add new coast
    </button>
    <transition name="fade">
      <form class="addForm" action="#" v-if="show">
        <div class="addForm-div">
           <input type="number" min="1" placeholder="Value" required  v-model="value">
<!--           <input type="text" placeholder="Type" required v-model="category">-->
          <select class="paymentSelect" v-model="category" required>
            <option value="" disabled selected>Category</option>
            <option
              :value="category"
              v-for="category of categoryList" :key="category"
              selected
            >
               {{category}}
            </option>

          </select>
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
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    value: '',
    category: '',
    date: '',
    page: '',
    show: false,
  }),
  methods: {
    resetData() {
      this.value = '';
      this.category = '';
      this.date = '';
    },
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
        value: +value,
        category: category || this.categoryList[0],
        date: date || paymentDay,
      };
      if (value > 0) {
        this.$emit('add-payment', data);
        this.resetData();
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
