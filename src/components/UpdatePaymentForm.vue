<template>
  <div>

    <transition name="fade">
      <form class="addForm" action="#" >
        <div class="addForm-div">
          <input type="number" min="1" placeholder="Value" required  v-model="value">
          <!--           <input type="text" placeholder="Type" required v-model="category">-->
          <select class="paymentSelect" v-model="category" required>
            <option value="" disabled selected style='display:none;'>Category</option>
            <option
              :value="category"
              v-for="category of categoryList" :key="category"
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
          <button class="btn btn-outline-dark" @click="addPayment">Update</button>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'UpdatePymentForm',
  props: {
    routeCategory: {
      type: String,
      defoult: '',
    },
    routeValue: {
      type: Number,
      defoult: '',
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
    id: '',
  }),
  methods: {
    ...mapMutations(['UPDATE_PAYMENT_DATA']),
    resetData() {
      this.value = '';
      this.category = '';
      this.date = '';
    },
    addPayment() {
      const {
        value, category, date, paymentDay, id,
      } = this;

      const data = {
        id,
        value: +value,
        category,
        date: date || paymentDay,
      };
      // eslint-disable-next-line no-undef
      if (data.value > 0 && data.category) {
        this.UPDATE_PAYMENT_DATA(data);
        this.resetData();
        alert('Data updated!');
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
    ...mapGetters(['categoryList', 'data']),
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDay();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  created() {
    //  this.show = this.routeCategory;
    this.value = this.data.value;
    this.category = this.data.category;
    this.date = this.data.date;
    this.id = this.data.id;
  },
};
</script>

<style scoped>

</style>
