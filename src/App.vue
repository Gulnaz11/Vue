<template>
  <div id="app">
    <MyCounter v-if="show"/>
    <button @click="show=!show">hide / show</button>
  </div>
</template>

<script>
import MyCounter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    MyCounter,
  },
  data: () => ({
    counter: 0,
    show: true,
  }),
  methods: {
    increase(step, event) {
      this.counter += step;
      console.log(event);
    },
    restCounter() {
      this.counter = 0;
    },
    blur() {
      console.log('blur');
    },
    focus() {
      console.log('focus');
    },
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
</style>
