<template>
  <div>
  <table class="table">
<!--   {{ items }} {{ $attrs}}-->
    <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Category</th>
      <th scope="col">Value</th>
    </tr>
    </thead>
    <tbody v-for = '(object, i) in items' :key="i" >

      <div class="displayTr" v-if="i==page">
        <tr class="item-row" v-for = '(item, index) in object' :key="index">
          <td>{{item.id}} </td>
          <td>{{ item.date}} </td>
          <td> {{item.category }} </td>
          <td>  {{item.value}} </td>
    </tr>
      </div>
    </tbody>
  </table>
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
export default {
  name: 'PaymentDisplay',
  data: () => ({
    active: ['', 'active'],
    page: '1',
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

<style module lang="scss">
.item{
border: 1px solid black;
}

</style>
