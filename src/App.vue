<template>
  <div id="app">
<!--    <MyCounter v-if="show"/>-->
<!--    <button @click="show=!show">hide / show</button>-->
    <header>
      <div class="header"><h1>My personal costs</h1></div>
    </header>

    <main class="main">

       <PaymentDisplay class="paymentDisplay" :items="paymentsList"  />
      <AddPaymentForm @add-payment="addPayment"/>
    </main>

  </div>
</template>

<script>
// import MyCounter from './components/Counter.vue';

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
    counter: 0,
    show: true,
    paymentsList: [],
  }),
  methods: {
    fetchData() {
      return [
        {
          date: '17.01.2022',
          category: 'Food',
          value: 300,
        },
        {
          date: '18.01.2022',
          category: 'Food',
          value: 500,
        },
        {
          date: '18.01.2022',
          category: 'Transport',
          value: 200,
        },
      ];
    },
    addPayment(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
margin-bottom: 18px;
}
</style>
