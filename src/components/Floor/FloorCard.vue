<template>
<v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
  <v-card
    height="200"
    class="mx-auto white--text"
    rounded="xl"
    link
    :to="{name:'FloorPage', params:{Floor:user.Floor * 100 + id}}"
    color="rgba(0, 122, 255, 0.75)"
    >
    <v-container fluid fill-height>
        <v-layout column wrap align-center justify-center>
             <v-icon
                 large
                 dark
                >mdi-door</v-icon>

        <v-card-subtitle
        class="text-center">
          <slot> Floor</slot>          
        </v-card-subtitle>
        </v-layout>
       
    </v-container>
        
      
  </v-card>
</v-flex>
</template>

<script>
export default {
    name: 'FloorCard',
    props:{
      'user':{
        Type: Object,
        require:true
      },
      'id':{
        Type: Number,
        require:true
      }
    },

}
</script>

<style lang="scss" scoped>

</style>