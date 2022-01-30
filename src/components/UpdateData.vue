<template>
<div @click="OpenModalWindowPayment">
  <i class="fas fa-pen-alt"></i>
  Редактировать
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'UpdateData',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations(['SET_DATA', 'ADD_CATEGORY_LIST']),
    OpenModalWindowPayment() {
      this.$modal.show({
        title: 'Update payment ',
        content: 'UpdatePaymentForm',
      });
      this.ADD_CATEGORY_LIST(this.data.category);
      this.SET_DATA(this.data);
    },
  },
};
</script>

<style scoped>
.fa-pen-alt{
  padding: 5px;
}
</style>
