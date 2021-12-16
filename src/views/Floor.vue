<template>
  <v-container grid-list-xs>
    <div class="row">
       <div class="col col-4">
          <floor-card></floor-card>
        </div>
        <div class="col col-4">
          <FloorCard/>
        </div>
        <div class="col col-4">
          <FloorCard/>
        </div>
        <div class="col col-4">
          <FloorCard/>
        </div>
        <div class="col col-4">
          <FloorCard/>
        </div>
        <div class="col col-4">
          <FloorCard/>
        </div>
    </div>

    <!-- <v-btn color="success" @click="getUserData"></v-btn> -->
      
       

        
        
        
          
        
    
  </v-container>
</template>

<script>

import FloorCard from '../components/Floor/FloorCard.vue'
export default {

  name:'Floor',

  components:{
    FloorCard,
  },

  computed:{
    getUserData(){
      return this.$store.dispatch('LOAD_USER')
    }
  },
}
</script>

<style>

</style>