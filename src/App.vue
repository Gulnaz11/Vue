<template>
  <div id="app">
<!--    <MyCounter v-if="show"/>-->
<!--    <button @click="show=!show">hide / show</button>-->
    <header class="header">
     <nav>
<!--       <a href="/#dashboard" class="router-link">Dashboard</a>-->
<!--       <a href="/#about" class="router-link">About</a>-->
<!--       <a href="/#notfound" class="router-link">NotFound</a>-->
        <router-link class="router-link" to="dashboard">Dashboard</router-link>
        <router-link class="router-link" to="about">About</router-link>

<!--        <router-link class="router-link" to="notfound">NotFound</router-link>-->

     </nav>
    </header>
    <button @click="goToPage('notfound')">Go to NotFound</button>
    <main class="main">
      <router-view/>
    </main>

  </div>
</template>

<script>

// import DashboardPage from './views/Dashboard.vue';
// import AboutPage from './views/About.vue';
// import NotFound from './views/NotFound.vue';

export default {
  name: 'App',
  // components: { NotFound, AboutPage, DashboardPage },
  data: () => ({
    page: 'dashboard',
  }),
  methods: {
    goToPage(page) {
      this.$router.push(page);
    },
    // setPage() {
    //   this.page = window.location.hash.slice(1);
    //   console.log(this.page);
    // },
    // pushHistory(event) {
    //   console.log(event);
    //   event.preventDefault();
    //   if (!event.target.classList.contains('router-link')) return;
    //   window.history.pushState({}, '', event.target.href);
    //   this.setPage();
    // },
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$router);
    // window.addEventListener('hashchange' , this.setPage);
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
