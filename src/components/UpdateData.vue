<template>
  <v-dialog>
    <template v-slot:activator="{ on }">
      <v-btn class="MenuBtn" color="milk"
             v-on="on"
      >
        <v-icon>{{ icons.mdiPencil }}</v-icon>
        Редактировать
      </v-btn>
    </template>
    <v-card>
     <UpdatePaymentForm :item="item"/>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
import {
  mdiPencil,
} from '@mdi/js';
import UpdatePaymentForm from './UpdatePaymentForm.vue';

export default {
  name: 'UpdateData',
  // eslint-disable-next-line vue/no-unused-components
  components: { UpdatePaymentForm },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    showModal: false,
    icons: {
      mdiPencil,
    },
  }),
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
.MenuBtn{
  font-size: 13px;
  height: 26px !important;
}
</style>
