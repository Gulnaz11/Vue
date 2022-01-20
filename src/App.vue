<template>
  <div id="app">
<!--    <MyCounter v-if="show"/>-->
<!--    <button @click="show=!show">hide / show</button>-->
    <header>
      <div class="header"><h1>My personal costs</h1></div>
    </header>

    <main class="main">
<!--      <div>Total: {{paymentsListTotalAmount}}</div>-->
      <PaymentDisplay class="paymentDisplay" :items="paymentsList"  />
      <AddPaymentForm
        :categoryList="categoryList"
        @add-payment="addPayment"/>
    </main>

  </div>
</template>

<script>
// import MyCounter from './components/Counter.vue';

import { mapMutations, mapActions, mapGetters } from 'vuex';
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddPaymentForm from './components/AddPaymentForm.vue';

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentDisplay,
    // MyCounter,
  },
  data: () => ({
    // counter: 0,
    // show: true,
    // paymentsList: [],
  }),
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    ...mapActions(['fetchData', 'fetchCategoryList']),
    // fetchData() {
    //   return [
    //     {
    //       date: '17.01.2022',
    //       category: 'Food',
    //       value: 300,
    //       page: 1,
    //     },
    //     {
    //       date: '18.01.2022',
    //       category: 'Food',
    //       value: 500,
    //       page: 1,
    //     },
    //     {
    //       date: '18.01.2022',
    //       category: 'Transport',
    //       value: 200,
    //       page: 1,
    //     },
    //   ];
    // },
    // eslint-disable-next-line no-unused-vars
    addPayment(data) {
      // eslint-disable-next-line no-param-reassign,radix
      // data.page = parseInt(this.paymentsList.length / 4 + 1);
      // this.paymentsList.push(data);
      this.ADD_PAYMENT_DATA(data);
    },
  },
  computed: {
    ...mapGetters(['paymentsList', 'paymentsListTotalAmount', 'categoryList']),
  },
  created() {
    // this.paymentsList = this.fetchData();
    console.log(this.$store);
    // this.$store.dispatch('fetchData');
    // this.SET_PAYMENTS_LIST(paymentsList);
    this.fetchData();
    this.fetchCategoryList();
    // const paymentsList = [
    //   {
    //     date: '17.01.2022',
    //     category: 'Food',
    //     value: 300,
    //     page: 1,
    //   },
    //   {
    //     date: '18.01.2022',
    //     category: 'Food',
    //     value: 500,
    //     page: 1,
    //   },
    //   {
    //     date: '18.01.2022',
    //     category: 'Transport',
    //     value: 200,
    //     page: 1,
    //   },
    // ];
    // this.$store.commit('SET_PAYMENTS_LIST',paymentsList);
    // this.$store.dispatch('fetchData');
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrap{
  width:1140px;
  box-sizing: border-box;
  margin: 0 auto;
}
nav{
  display: flex;
  justify-content: center;
}
.page-link{
  color: black ;
}
.page-link:hover{
  color: black ;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.btn{
margin-top: 18px;
}
.addForm{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.addForm-div{
  border: 1px solid black;
  padding: 15px;
}
.paymentSelect{
  width: 202px;
  height: 30px;
}
.page-item {
  text-decoration: none;
}
</style>
