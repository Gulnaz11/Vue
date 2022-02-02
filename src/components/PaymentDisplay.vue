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
          <v-list>
            <UpdateData class="Menu" :data="item"/>
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
.contextMenu{
  position: absolute;
  width: 40px;
  //z-index: 1;
}
.content{
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 3px;
  border: 1px solid black;
  /* top: 19px; */
  right: 115px;
  width: 128px;
  font-size: 12px;
  z-index: 10;
  /* z-index: 1; */
}
.Menu:hover{
  background-color: gainsboro;
}
</style>
