<template>
  <v-card class="text-left pa-8" >
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
    <v-btn @click="addPayment"  >Update</v-btn>
  </v-card>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'UpdatePymentForm',
  props: {
    item: {
      type: Object,
      defoult: () => ({}),
    },
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
    id: '',
  }),
  methods: {
    ...mapMutations(['UPDATE_PAYMENT_DATA', 'ADD_CATEGORY_LIST']),
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
    this.value = this.item.value;
    this.ADD_CATEGORY_LIST(this.item.category);
    this.category = this.item.category;
    this.date = this.item.date;
    this.id = this.item.id;
  },
};
</script>

<style scoped>

</style>
