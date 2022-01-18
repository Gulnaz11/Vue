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

      <td class="item-row item-element">{{index+1}} </td>
      <td class="item-row item-element">{{ item.date}} </td>
      <td class="item-row item-element"> {{item.category }} </td>
      <td class="item-row item-element">  {{item.value}} </td>

    </tr>
    </tbody>
  </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
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

<style module lang="scss">
.item{
border: 1px solid black;
}

</style>
