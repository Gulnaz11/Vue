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
<!--    Fibonacci1 = {{fib1}} <br/>-->
<!--    Fibonacci 2= {{fib2}}-->
  </div>
  <div class="error" v-show="error">
    Ошибка: {{error}}
  </div>

<!--  <div class="messages">-->
<!--    <template v-if="result<0">Отрицательный результат</template>-->
<!--    <template v-else-if="result<100">Результат в первой сотне</template>-->
<!--    <template v-else>Результат больше 100</template>-->
<!--  </div>-->
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

  <div class="board">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру </label>
    <div class="numbers" v-show="checked">
      <button
        v-for="number in numbers"
        :value="number"
        @click="write(number)"
        :key="number"
      >
        {{number}}
      </button>
      <br>
      <input type="radio" checked id="one" value=1 v-model="picked" >
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" value=2 v-model="picked">
      <label for="two">Операнд 2</label>
    </div>
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
    checked: 0,
    picked: 0,
    error: '',
    operator: ['+', '-', '/', '*', '^', '//'],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '<-'],
    collection: [1, 2, 3, 4],
    logs: {},
  }),
  methods: {
    write(number) {
      if (this.picked === '1') {
        if (number === '<-') {
          // eslint-disable-next-line radix
          if (this.op1 >= 0) this.op1 = parseInt(this.op1 / 10);
        }
        // eslint-disable-next-line radix
        this.op1 += number.toString();
        // eslint-disable-next-line radix
        this.op1 = parseInt(this.op1);
      }
      if (this.picked === '2') {
        if (number === '<-') {
          // eslint-disable-next-line radix
          if (this.op2 >= 0) this.op2 = parseInt(this.op2 / 10);
        }
        this.op2 += number.toString();
        // eslint-disable-next-line radix
        this.op2 = parseInt(this.op2);
      }
    },

    calculate(operation) {
      this.error = '';
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.result = this.sum; break;
        case '-': this.result = this.sub; break;
        case '/': this.result = this.div; break;
        case '*': this.result = this.mult; break;
        case '^': this.result = this.pow; break;
        case '//': this.result = this.intDiv; break;
      }

      // this.logs[Date.now()] = `${this.op1} ${operation}  ${this.op2}`;
      // this.logs = { ...this.logs, [Date.now()]: `${this.op1} ${operation}  ${this.op2}` };
      // Vue.set();
      // this.$set(this.logs, Date.now(), `${this.op1} ${operation}  ${this.op2}`);
    },

    // fib(n) {
    //   return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    // },
  },
  computed: {
    sum() {
      return this.op1 + this.op2;
    },
    sub() {
      return this.op1 - this.op2;
    },
    // eslint-disable-next-line consistent-return
    div() {
      // eslint-disable-next-line no-unused-vars
      const { op2, op1 } = this;

      if (op2 === 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.error = 'На ноль делить нельзя';
        return 0;
      }
      // eslint-disable-next-line radix
      return this.op1 / this.op2;
    },
    mult() {
      return this.op1 * this.op2;
    },
    pow() {
      // eslint-disable-next-line no-restricted-properties
      return Math.pow(this.op1, this.op2);
      // eslint-disable-next-line no-unreachable
    },
    // eslint-disable-next-line consistent-return
    intDiv() {
      // eslint-disable-next-line no-unused-vars
      const { op2, op1 } = this;
      if (op2 === 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.error = 'На ноль делить нельзя';
        return 0;
      }
      // eslint-disable-next-line radix
      return parseInt(this.op1 / this.op2);
    },

    // fib1() {
    //   return this.fib(this.op1);
    // },
    // fib2() {
    //   return this.fib(this.op2);
    // },
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
