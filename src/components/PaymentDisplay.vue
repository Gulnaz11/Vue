<template>
  <div>
<!--   {{ items }} {{ $attrs}}-->
    <div v-for = '(item, index) in items' :key="index">{{index+1}} - {{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
