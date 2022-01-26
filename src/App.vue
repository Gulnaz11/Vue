<template>
  <div id="app">
    <header class="header">
     <nav>
        <router-link class="router-link" to="dashboard">Dashboard</router-link>
        <router-link class="router-link" to="about">About</router-link>

     </nav>
    </header>
    <button @click="goToPage('notfound')">Go to NotFound</button>
    <main class="main">
      <router-view/>
    </main>
    <ModalWindowPayment
      v-if="showModal"
      :settings="modalSettings"
    />
  </div>
</template>

<script>

import ModalWindowPayment from './components/ModalWindowPayment.vue';

export default {
  name: 'App',
  components: { ModalWindowPayment },
  data: () => ({
    page: 'dashboard',
    showModal: false,
    modalSettings: {},
  }),
  methods: {
    goToPage(page) {
      this.$router.push(page);
    },
    modalOpen(settings) {
      this.modalSettings = settings;
      this.showModal = true;
    },
    modalClose() {
      this.showModal = false;
      this.modalSettings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on('show', this.modalOpen);
    this.$modal.EventBus.$on('hide', this.modalClose);
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
.header{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.router-link{
  margin: 0 5px;
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
.displayTr {
  display: contents;
}
</style>
