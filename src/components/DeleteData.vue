<template>
  <v-btn class="MenuBtn" @click="DeleteData">
    <v-icon>{{ icons.mdiDelete }}</v-icon>
    Удалить
  </v-btn>
</template>

<script>
import { mapMutations } from 'vuex';
import {
  mdiDelete,
} from '@mdi/js';

export default {
  name: 'DeleteData',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      icons: {
        mdiDelete,
      },
    };
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
