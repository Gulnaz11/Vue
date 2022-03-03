<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Data" />
    <v-select
    v-model="category"
    :items="categoryList"
    label="Category"
    >
    </v-select>
    <v-dialog v-model="dialog"  width="500">
      <template v-slot:activator="{ on }">
        <v-btn  v-on="on" ><v-icon>mdi-plus</v-icon></v-btn>
      </template>
    <v-card>
      <v-text-field v-model="newCategory"/>

    </v-card>  <v-btn @click="AddCategory"> Add category </v-btn>
    </v-dialog>
    <v-text-field v-model="value" label="Value"/>
    <v-btn @click="addPayment"  >Add</v-btn>
  </v-card>
<!--  <div>-->

<!--    <transition name="fade">-->
<!--      <form class="addForm" action="#" >-->
<!--        <div class="addForm-div">-->
<!--           <input type="number" min="1" placeholder="Value" required  v-model="value">-->
<!--&lt;!&ndash;  <input type="text" placeholder="Type" required v-model="category">&ndash;&gt;-->
<!--          <select class="paymentSelect" v-model="category" required>-->
<!--            <option value="" disabled selected style='display:none;'>Category</option>-->
<!--            <option-->
<!--              :value="category"-->
<!--              v-for="category of categoryList" :key="category"-->
<!--            >-->
<!--               {{category}}-->
<!--            </option>-->

<!--          </select>-->
<!--          <button @click="show2=!show2">+</button>-->
<!--           <input type="text" placeholder="Date" v-model="date">-->
<!--           <br>-->
<!--          <form action="#" v-show="show2">-->
<!--          <input type="text" placeholder="Add Category" v-model="newCategory">-->
<!--            <button @click="AddCategory">Add</button>-->
<!--          </form>-->
<!--          <br>-->
<!--           <button class="btn btn-outline-dark" @click="addPayment">Add</button>-->
<!--        </div>-->
<!--      </form>-->
<!--    </transition>-->
<!--  </div>-->
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AddPaymentForm',
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
    dialog: false,
  }),
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA', 'ADD_CATEGORY_LIST']),
    resetData() {
      this.value = '';
      this.category = '';
      this.date = '';
    },
    addPayment() {
      const {
        value, category, date, paymentDay,
      } = this;

      const data = {
        value: +value,
        category,
        date: date || paymentDay,
      };
      // eslint-disable-next-line no-undef
      if (data.value > 0 && data.category) {
        this.ADD_PAYMENT_DATA(data);
        this.$parent.showModel = false;
        this.resetData();
        alert('New cost added!');
      }
    },
    AddCategory() {
      if (this.newCategory) {
        this.ADD_CATEGORY_LIST(this.newCategory);
        this.dialog = false;
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
  //   this.value = this.data.value;
    if (this.routeValue) this.value = this.routeValue;
    this.category = this.routeCategory;
    this.date = this.paymentDay;
    console.log(this.date);
  },
};
</script>

<style scoped>

</style>
