<template>
  <div @click="DeleteData"><i class="fas fa-trash-alt"></i>Удалить</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'DeleteData',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations(['DELETE_PAYMENT_DATA']),
    DeleteData() {
      this.DELETE_PAYMENT_DATA(this.data);
    },
  },
};
</script>

<style scoped>
.fa-trash-alt{
  padding: 5px;
}
</style>
