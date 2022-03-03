<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="black"
      dark
    >
      <v-btn to="/dashboard" :ripple="true">Dashboard</v-btn>
      <v-btn to="/about" :ripple="true">About</v-btn>

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
