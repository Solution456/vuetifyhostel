<template>
  <v-container grid-list-xs>
    <div class="row">
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
        <div class="col col-4">
          <FloorCard/>
        </div>
    </div>
      
       

        
        
        
          
        
    
  </v-container>
</template>

<script>

import FloorCard from '../components/Floor/FloorCard.vue'
export default {

  name:'Floor',

  components:{
    FloorCard,
  },
}
</script>

<style>

</style>