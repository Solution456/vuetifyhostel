<template>
  <v-container grid-list-xs>
    <div class="row">
       <div class="col col-4" v-for="i in 6" :key="i">
          <floor-card :user = 'UserData' :id = 'i'>{{UserData.Floor * 100 + i}}</floor-card>
        </div>
        
    </div>
    
  </v-container>
</template>

<script>

import FloorCard from '../components/Floor/FloorCard.vue'
import {mapGetters} from 'vuex'
export default {

  name:'Floor',

  components:{
    FloorCard,
  },

  data(){
    return {
      i:1,
    }
  },

  computed:{
    ...mapGetters(['UserData'])
  },
}
</script>

<style>

</style>