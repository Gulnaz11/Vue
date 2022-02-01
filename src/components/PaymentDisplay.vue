<template>
  <div>
<!--  <table class="table">-->
<!--&lt;!&ndash;   {{ items }} {{ $attrs}}&ndash;&gt;-->
<!--    <thead class="thead-dark">-->
<!--    <tr>-->
<!--      <th scope="col">#</th>-->
<!--      <th scope="col">Date</th>-->
<!--      <th scope="col">Category</th>-->
<!--      <th scope="col">Value</th>-->
<!--      <th></th>-->
<!--    </tr>-->
<!--    </thead>-->
<!--    <tbody v-for = '(object, i) in items' :key="i" >-->

<!--      <div class="displayTr" v-if="i==page">-->
<!--        <tr class="item-row" v-for = '(item, index) in object' :key="index">-->
<!--          <td>{{item.id}} </td>-->
<!--          <td>{{ item.date}} </td>-->
<!--          <td> {{item.category }} </td>-->
<!--          <td>  {{item.value}} </td>-->
<!--          <td class="contextMenu" >-->
<!--            <i class="fas fa-ellipsis-v" @click="showMenu[item.id]=!showMenu[item.id]">-->
<!--            </i>-->
<!--          <div v-show="showMenu[item.id]" class="content">-->
<!--            <UpdateData class="Menu" :data="item"/>-->
<!--            <DeleteData class="Menu" :data="item"/>-->
<!--          </div>-->
<!--          </td>-->
<!--    </tr>-->
<!--      </div>-->
<!--    </tbody>-->
<!--  </table>-->
    <v-container>
      <v-row>
        <v-col cols="1">#</v-col>
        <v-col cols="4">Date</v-col>
        <v-col cols="4">Category</v-col>
        <v-col cols="2">Value</v-col>
      </v-row>
      <v-row
        v-for="(item, index) in items[1]"
        :key="index"
      >
        <v-col>{{ item.id}}</v-col>
        <v-col>{{ item.date}}</v-col>
        <v-col>{{ item.category}}</v-col>
        <v-col>{{ item.value}}</v-col>
        <v-col>
          <i class="fas fa-ellipsis-v" @click="showMenu[item.id]=!showMenu[item.id]">-->
          </i>
          <div v-show="showMenu[item.id]" class="content">
          <UpdateData class="Menu" :data="item"/>
          <DeleteData class="Menu" :data="item"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><button @click='PreviousPage' class="page-link" >
          Previous
          </button></li>

           <li v-for = '(object, i) in items' :key="i"  class="page-item" v-bind:class="active[i]">
             <button @click='Page' :value="i" class="page-link">
               {{ i }}
             </button>
           </li>

        <li class="page-item"><button @click='NextPage' class="page-link" >
          Next
          </button></li>
      </ul>
    </nav>
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
    page: '1',
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
    PreviousPage() {
      if (this.page > 1) {
        // eslint-disable-next-line no-plusplus
        this.page--;
        // eslint-disable-next-line no-plusplus,no-restricted-syntax,guard-for-in
        for (const i in this.items) {
          // eslint-disable-next-line eqeqeq
          if (i == this.page) this.active[i] = 'active';
          else this.active[i] = '';
        }
      }
    },
    Page() {
      // eslint-disable-next-line no-restricted-globals
      this.page = event.srcElement.value;
      // eslint-disable-next-line no-plusplus,no-restricted-syntax,guard-for-in
      for (const i in this.items) {
        // eslint-disable-next-line eqeqeq
        if (i == this.page) this.active[i] = 'active';
        else this.active[i] = '';
      }
    },
    NextPage() {
      if (this.page < Object.keys(this.items).length) {
        // eslint-disable-next-line no-plusplus
        this.page++;
        // eslint-disable-next-line no-plusplus,no-restricted-syntax
        for (const i in this.items) {
          if (+i === this.page) this.active[i] = 'active';
          else this.active[i] = '';
        }
      }
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
