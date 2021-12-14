<template>
  <v-app align='center' >
    <v-app-bar
      color="#c5eff7"
    >
      <div class="d-flex align-center">
        <strong>Bluwm</strong>
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <home/>
    </v-main>

     <v-footer
     color="#c5eff7"
    padless
    >
        <v-col
        color="primary lighten-1"
        class=" text-center"
        cols="12">
          {{ new Date().getFullYear() }} — <strong>Bluwm</strong>
        </v-col>
    </v-footer>

  </v-app>
</template>

<script>
import home from './views/home';

export default {
  name: 'App',

  components: {
    home,
  },

  data: () => ({
    //
  }),
};
</script>
