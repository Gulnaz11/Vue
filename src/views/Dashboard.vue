<template>
<div>
  <div class="header"><h1>My personal costs</h1></div>
  <PaymentDisplay class="paymentDisplay" :items="paymentsList"  />
  <AddPaymentForm
    :categoryList="categoryList"
    :routeCategory="routeObject.category"
    :routeValue="routeObject.value"
    @add-payment="addPayment"
    @add-category="addCategory"
  />
</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import PaymentDisplay from '@/components/PaymentDisplay.vue';
import AddPaymentForm from '@/components/AddPaymentForm.vue';

export default {
  name: 'DashboardPage',
  data: () => ({
    routeObject: {
      category: '',
      value: '',
    },
  }),
  components: {
    PaymentDisplay,
    AddPaymentForm,
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA', 'ADD_CATEGORY_LIST']),
    ...mapActions(['fetchData', 'fetchCategoryList']),
    addPayment(data) {
      // eslint-disable-next-line no-param-reassign,radix
      // data.page = parseInt(this.paymentsList.length / 4 + 1);
      // this.paymentsList.push(data);
      this.ADD_PAYMENT_DATA(data);
    },
    addCategory(category) {
      this.ADD_CATEGORY_LIST(category);
    },
  },
  computed: {
    ...mapGetters(['paymentsList', 'categoryList']),
  },
  beforeCreate() {
  },
  created() {
    this.fetchData();
    this.fetchCategoryList();
    this.routeObject.category = this.$route.params.category;
    this.routeObject.value = +this.$route.query.value;
    this.ADD_CATEGORY_LIST(this.routeObject.category);
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>

</style>
