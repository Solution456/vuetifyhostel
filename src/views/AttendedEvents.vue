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
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            Посещенные мероприятия
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card
      rounded="xl"
      elevation="14"
      class="mx-auto"
      max-width=75%
      outlined
    >
      <div>
        <v-data-table
          :headers="headers"
          :items="Object.values(listEvents['events'])"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          class="elevation-1"
        ></v-data-table>
      </div>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data() {
    
    return {
      headers: [
          {
            text: 'Название',
            align: 'start',
            value: 'nameEvents',
          },
          { text: 'Дата', value: 'dateEvents' },
        ],
    }
  },
  
  computed: {

  ...mapGetters(['listEvents'])
      

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
      getAr(){
        
        return this.listEvents
      }
    }
    
}
</script>
