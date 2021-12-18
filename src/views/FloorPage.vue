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
          {{Floor}} Квартира 
        </v-list-item-title>
        <!-- <span> </span> -->
      </v-list-item-content>

     
     <v-btn
     outlined
      color="indigo"
     large
     to="/floor">
      <v-icon
      style="color: rgba(25, 118, 210, 1);"
      >
      mdi-door</v-icon>
     </v-btn>
    </v-list-item>
  </v-card>
<v-card
rounded="xl"
     elevation="14"
    class="mx-auto"
    max-width=75%
    outlined>
  <div>
    <v-data-table
      :headers="headers"
      :items="AllUsersData"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      class="elevation-1"
    ></v-data-table>

    <!-- <v-btn color="success" @click="getUsers"></v-btn> -->

  </div>
</v-card>
</div>
</template>
<script>

import { mapGetters } from 'vuex'


  export default {
    name:'FloorPage',
    props:{
        'Floor':{
            Type: String,
            require:true
        }
    },
    data () {
      return {
        sortBy: 'fat',
        sortDesc: false,
        headers: [
          {
            text: 'ФИО',
            align: 'start',
            value: 'name',
          },
          { text: 'Телефон', value: 'phone' },
          { text: 'Email', value: 'email' },
          { text: 'Баллы', value: 'balls' },
        ],

       
        
        
        // El: this.getUsers
      }
    },

    computed:{
        ...mapGetters(['AllUsersData'])
        // getUsers(){

            
        //     return this.$store.dispatch('LOAD_ALL_USERS',this.Floor)
        // }
    },

    methods: {
      toggleOrder () {
        this.sortDesc = !this.sortDesc
      },
      nextSort () {
        let index = this.headers.findIndex(h => h.value === this.sortBy)
        index = (index + 1) % this.headers.length
        this.sortBy = this.headers[index].value
      },

     GetMet(){
        
        return this.$store.dispatch('LOAD_ALL_USERS',this.Floor)
      }
      },

      created(){
          this.GetMet()
      }

    

  }
</script>
<style lang="scss" scoped>


.v-application .mx-auto{
  margin-top: 15px;
  margin-bottom: 27px;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  color: rgba(25, 118, 210, 1);
}
.theme--light.v-sheet--outlined {
    border: thin solid rgba(25, 118, 210, 1);
}
.theme--light.v-icon {
    color: rgba(25, 118, 210, 1);
}
.v-btn--outlined {
    border: 0px;
}
</style>