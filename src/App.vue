<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Let's calculate!"/>
<!--    <button @click="increase(2,$event)">  Increase</button>-->
<!--    <button @click="restCounter">Delete</button>-->
<!--    {{counter}}-->
<!--    <label for="test">test-->
<!--    <input-->
<!--      id="test"-->
<!--      name=""-->
<!--      type="test"-->
<!--      @blur="blur"-->
<!--      @focus="focus"-->
<!--    >-->
<!--    </label>-->
    <CalculatorComp  />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CalculatorComp from './components/Calc.vue';

export default {
  name: 'App',
  components: {
    CalculatorComp,
    HelloWorld,
  },
  data: () => ({
    counter: 0,
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
