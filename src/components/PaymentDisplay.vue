<template>
  <div>

    <v-container >
      <v-row>
        <v-col cols="1">#</v-col>
        <v-col cols="4">Date</v-col>
        <v-col cols="4">Category</v-col>
        <v-col cols="2">Value</v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row
        v-for="(item, index) in items[page]"
        :key="index"
      >
        <v-col>{{ item.id}}</v-col>
        <v-col>{{ item.date}}</v-col>
        <v-col>{{ item.category}}</v-col>
        <v-col>{{ item.value}}</v-col>
        <v-col>
          <v-menu
          bottom
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="black">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="content">
            <UpdateData class="Menu" :item="item"/>
            <DeleteData class="Menu" :data="item"/>
          </v-list>
        </v-menu></v-col>

      </v-row>

    </v-container>
    <v-pagination v-model="page" :length="Object.keys(items).length"></v-pagination>
  </div>
</template>

<script>
import UpdateData from './UpdateData.vue';
import DeleteData from './DeleteData.vue';

export default {
  name: 'PaymentDisplay',
  // eslint-disable-next-line vue/no-unused-components
  components: { DeleteData, UpdateData },
  data: () => ({
    active: ['', 'active'],
    page: 1,
    showMenu: [],
  }),
  props: {
    items: {
      type: Object([]),
      default: () => ([]),
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showContextMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style  lang="scss" scoped>
.item{
border: 1px solid black;
}
.fa-ellipsis-v:hover{
  color: grey;
}
.content{
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  justify-content: center;
}
.Menu:hover{
  background-color: gainsboro;
}
.MenuBtn{
  font-size: 13px;
  height: 26px !important;
}
</style>
