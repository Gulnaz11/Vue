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
    <tbody>
    <tr class="item-row" v-for = '(item, index) in items' :key="index">

      <td v-show='item.page==page' class="item-row item-element">{{index+1}} </td>
      <td v-show='item.page==page' class="item-row item-element">{{ item.date}} </td>
      <td v-show='item.page==page' class="item-row item-element"> {{item.category }} </td>
      <td v-show='item.page==page' class="item-row item-element">  {{item.value}} </td>

    </tr>
    </tbody>
  </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><button @click='PreviousPage' class="page-link" >
          Previous
          </button></li>
        <li class="page-item" v-bind:class="active[0]">
          <button @click='Page' value="1" class="page-link">
          1
          </button>
        </li>
        <li class="page-item" v-bind:class="active[1]">
          <button @click='Page' value='2' class="page-link">
          2
          </button>
        </li>
        <li class="page-item" v-bind:class="active[2]">
          <button @click='Page' value='3' class="page-link">
          3
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
    active: ['active'],
    page: '1',
  }),
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
  methods: {
    PreviousPage() {
      if (this.page > 1) {
        // eslint-disable-next-line no-plusplus
        this.page--;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i <= 3; i++) {
          if (i === this.page - 1) this.active[i] = 'active';
          else this.active[i] = '';
        }
      }
    },
    Page() {
      // eslint-disable-next-line no-restricted-globals
      this.page = event.srcElement.value;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= 3; i++) {
        if (i === this.page - 1) this.active[i] = 'active';
        else this.active[i] = '';
      }
    },
    NextPage() {
      if (this.page < 3) {
        // eslint-disable-next-line no-plusplus
        this.page++;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i <= 3; i++) {
          if (i === this.page - 1) this.active[i] = 'active';
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
