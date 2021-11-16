<template>
  <v-app>
    <app-bar v-if="!Navigation"> </app-bar>
    <v-main>

      <router-view/>
     
    </v-main>
  </v-app>
</template>

<script>

import AppBar from './components/AppBar.vue';
import firebase from 'firebase/compat/app'

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
    let vm = this
    firebase.auth().onAuthStateChanged((user) => {
      vm.$store.dispatch('STATE_CHANGED', user)
});
  },

  computed:{
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    },
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
    },

    isUserAuthenticated(val){
      if(val === false){
        this.$router.push('/signin')
      }
    }
  },
   
};
</script>
