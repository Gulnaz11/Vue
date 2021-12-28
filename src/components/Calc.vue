<template>
<div>
  <div class="main">
    <label for="op1">
      <input type="number" id="op1" v-model.number="op1">
    </label>
    <label for="op2">
      <input type="number" id="op2" v-model.number="op2">
    </label>
    = {{result}}
  </div>
  <div class="keyboard">
    <button @click="result=op1+ op2">+</button>
    <button @click="sub">-</button>
    <button @click="div">/</button>
    <button @click="mult">*</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'CalculatorComp',
  data: () => ({
    result: 0,
    op1: 0,
    op2: 0,
  }),
  methods: {
    sub() {
      this.result = this.op1 - this.op2;
    },
    div() {
      this.result = this.op1 / this.op2;
    },
    mult() {
      this.result = this.op1 * this.op2;
    },
  },
};
</script>

<style scoped>

</style>
