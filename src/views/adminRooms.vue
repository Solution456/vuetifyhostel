<template>
<div class="text-center">
     <v-card 
    rounded="xl"
     elevation="14"
    class="mx-auto"
    max-width=75%
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-content
      >
         <v-list-item-title class="text-h5 mb-1"
         >
          {{floor}} этаж 
        </v-list-item-title>
      </v-list-item-content>

     <v-btn
     outlined
      color="indigo"
     large
     :to="{name:'AdminStage'}">
      <v-icon
      style="color: rgba(25, 118, 210, 1);"
      >
      mdi-stairs</v-icon>
     </v-btn>
    </v-list-item>
  </v-card>
<v-card
rounded="xl"
   elevation="24"
   class="mx-auto"
  max-width=85%
    outlined>
    <v-container grid-list-xs>
    <div class="row">
       <div class="col col-4" v-for="i in 6" :key="i">
          <admin-floor-card> {{floor*100+i}} </admin-floor-card>  
        </div>
    </div>
    </v-container>        
</v-card>
</div>
</template>

<script>

import adminFloorCard from '../components/admin/adminFloorCard.vue'
export default {

  name:'Floor',
  props:{
    "floor":{type:String, require: true}
  },
  data(){
    return{
      i:1
    }
  },

  components:{
    adminFloorCard,
  },
}
</script>

<style>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  color: rgba(25, 118, 210, 1);
}
.v-application .mx-auto{
  margin-top: 15px;
  margin-bottom: 27px;
}
.theme--light.v-icon {
    color: rgba(25, 118, 210, 1);
}
.v-btn--outlined {
    border: 0px;
}
</style>