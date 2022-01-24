<template>
  <div>
    {{routeData.value}}
    {{routeData.category}}
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
          <button @click="show2=!show2">+</button>
           <input type="text" placeholder="Date" v-model="date">
           <br>
          <form action="#" v-show="show2">
          <input type="text" placeholder="Add Category" v-model="newCategory">
            <button @click="AddCategory">Add</button>
          </form>
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
    routeData: {
      type: Object,
      defoult: () => {},
    },
  },
  data: () => ({
    value: '',
    category: '',
    date: '',
    page: '',
    newCategory: '',
    show: false,
    show2: false,
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
        alert('New cost added!');
      }
    },
    AddCategory() {
      if (this.newCategory) {
        this.$emit('add-category', this.newCategory);
        this.show2 = false;
        alert(`${this.newCategory} add to Category!`);
        this.newCategory = '';
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
