<template>
  <v-app>
    <app-bar v-if="!Navigation"> </app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from './components/AppBar.vue';

export default {
  name: 'App',

  

  components: {
    AppBar
  },

  data: () => ({
    Navigation: null,
  }),

  created(){
    this.checkRoute()
  },

  methods:{
    checkRoute(){
      if(this.$route.name === 'SignIn' || this.$route.name === 'Register'){
        this.Navigation = true;
        return;
      }
      this.Navigation = false;
    }
  },

  watch: {
     $route(){
      this.checkRoute();
    }
  },
   
};
</script>
