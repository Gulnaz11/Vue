<template>
<div>
  <div class="header"><h1>My personal costs</h1></div>
  <PaymentDisplay class="paymentDisplay" :items="paymentsList"  />
<!--  <ModalWindowPayment-->
<!--    v-if="showModel"-->
<!--    @close="paymentModelHide"-->
<!--  />-->
<!--  <button class="btn btn-outline-dark" v-on:click="paymentModelShow">-->
<!--    Add Payment-->
<!--  </button>-->
  <button class="btn btn-outline-dark" @click="addPayment">
    Add payment
  </button>
  <!--  <AddPaymentForm-->
<!--    :categoryList="categoryList"-->
<!--    :routeCategory="routeObject.category"-->
<!--    :routeValue="routeObject.value"-->
<!--    @add-payment="addPayment"-->
<!--    @add-category="addCategory"-->
<!--  />-->

</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import PaymentDisplay from '@/components/PaymentDisplay.vue';
// import AddPaymentForm from '@/components/AddPaymentForm.vue';
// import ModalWindowPayment from '../components/ModalWindowPayment.vue';

export default {
  name: 'DashboardPage',
  data: () => ({
    routeObject: {
      category: '',
      value: '',
    },
    showModel: false,
  }),
  components: {
    PaymentDisplay,
    // ModalWindowPayment,
  },
  props: {
    modalSetting: Object,
    default: () => ({}),
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA', 'ADD_CATEGORY_LIST', 'SET_DATA']),
    ...mapActions(['fetchData', 'fetchCategoryList']),
    // addPayment(data) {
    // eslint-disable-next-line no-param-reassign,radix
    // data.page = parseInt(this.paymentsList.length / 4 + 1);
    // this.paymentsList.push(data);
    // this.ADD_PAYMENT_DATA(data);
    // },
    addPayment() {
      this.$modal.show({
        title: 'Add new payment ',
        content: 'AddPaymentForm',
      });
    },
    addCategory(category) {
      this.ADD_CATEGORY_LIST(category);
    },
    paymentModelShow() {
      // eslint-disable-next-line no-unused-expressions
      this.modalSettings = {
        title: 'Add new payment ',
        content: 'addPaymenForm',
        // eslint-disable-next-line no-sequences
      },
      this.showModel = true;
    },
    paymentModelHide() {
      this.showModel = false;
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
    this.SET_DATA(this.routeObject);
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$modal);
    this.$modal.show({});
    this.$modal.hide();
  },
};
</script>

<style scoped>

</style>
