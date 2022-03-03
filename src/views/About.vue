<template>
  <div>
    About Page
    <button class="btn btn-outline-dark" @click="authModelOpen">
      Open auth
    </button>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    authModelOpen() {
      this.$modal.show({
        title: 'Authorisation',
        content: 'AuthComp',
      });
    },
  },
};
</script>

<style scoped>

</style>
