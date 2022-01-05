<template>
<div>
  <div class="main">
    <label for="op1">
      <input type="number" id="op1" v-model.number="op1">
    </label>
    <label for="op2">
      <input type="number" id="op2" v-model.number="op2">
    </label>
    = {{result}} <br/>
    Fibonacci1 = {{fib1}} <br/>
    Fibonacci 2= {{fib2}}
  </div>
  <div class="error" v-show="error">
    Ошибка: {{error}}
  </div>
  <div class="messages">
    <template v-if="result<0">Отрицательный результат</template>
    <template v-else-if="result<100">Результат в первой сотне</template>
    <template v-else>Результат больше 100</template>
  </div>
<!--  <div class="collection" v-for="(item,index) in collection" :key="item">-->
<!--  {{index+1}}) {{item}}-->
<!--  </div>-->
  <div class="keyboard">
    <button
      v-for="operator in operator"
      @click="calculate(operator)"
      :title="operator"
      :key="operator"
    >
      {{operator}}
    </button>
  </div>
  <div class="logs">
    {{logs}}
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
    error: '',
    operator: ['+', '-', '/', '*', '^', '//'],
    collection: [1, 2, 3, 4],
    logs: {},
  }),
  methods: {
    sum() {
      this.result = this.op1 + this.op2;
      console.log('Methods');
    },
    sub() {
      this.result = this.op1 - this.op2;
    },
    div() {
      // eslint-disable-next-line no-unused-vars
      const { op2, op1 } = this;

      if (op2 === 0) this.error = 'На ноль делить нельзя';
      else this.result = this.op1 / this.op2;
    },
    mult() {
      this.result = this.op1 * this.op2;
    },
    pow() {
      // eslint-disable-next-line no-restricted-properties
      this.result = Math.pow(this.op1, this.op2);
    },
    intDiv() {
      // eslint-disable-next-line no-unused-vars
      const { op2, op1 } = this;
      if (op2 === 0) this.error = 'На ноль делить нельзя';
      // eslint-disable-next-line radix
      else this.result = parseInt(this.op1 / this.op2);
    },
    calculate(operation) {
      this.error = '';
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
        case '^': this.pow(); break;
        case '//': this.intDiv(); break;
      }

      // this.logs[Date.now()] = `${this.op1} ${operation}  ${this.op2}`;
      // this.logs = { ...this.logs, [Date.now()]: `${this.op1} ${operation}  ${this.op2}` };
      // Vue.set();
      this.$set(this.logs, Date.now(), `${this.op1} ${operation}  ${this.op2}`);
    },

    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
  },
  computed: {
    fib1() {
      return this.fib(this.op1);
    },
    fib2() {
      return this.fib(this.op2);
    },
  },
};
</script>

<style scoped>
 *{
   padding: 2px;
   margin: 2px;
 }
 button {
   min-width: 35px;
   height: 35px;
 }
</style>
