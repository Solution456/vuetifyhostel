<template>
  <v-container grid-list-xs>
    <v-row class="align">
      <v-col
        cols="12"
        md="6">
        <h2 class="ma-4">Ближайшие мероприятия</h2>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="alignContent">
          
          <load-event-dialog></load-event-dialog>
      </v-col>
    </v-row>
    
     <v-layout row wrap>
       <div class="col" v-for="event in CloseEvents" :key="event.id">
         <event-card :event="event"></event-card>
       </div>
     </v-layout>

      <h2 v-if="OtherEvents != null" class="ma-4">Другие мероприятия</h2>
      <v-layout row wrap>
       <div class="col col-4" v-for="event in OtherEvents" :key="event.id">
         <event-card :event="event"></event-card>
       </div>
     </v-layout>

  </v-container>
  
</template>

<script>
import EventCard from '../components/Events/EventCard.vue'
import LoadEventDialog from '../components/Events/LoadEventDialog.vue'

export default {
  components: {
    EventCard,
    LoadEventDialog,
  },

  computed: {
    events(){
      return this.$store.getters.getEvents
    },

    CloseEvents(){
      let events = this.events

      let SortEvents = []
      if(events){
          SortEvents =  events.sort((a, b) => new Date(b.date) - new Date(a.date))
      }

     let TwoFilterEvents = SortEvents.slice(0,2);
     
     

      return TwoFilterEvents
    },

    OtherEvents(){
      let events = this.events
      let SortEvents = []
      if(events){
        SortEvents =  events.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
      if(SortEvents.length > 2){
        let arr = SortEvents.slice(0,2)
        let OtherEvents = SortEvents.filter(f => arr.indexOf(f) < 0)
        return OtherEvents
      }
      else
        return null
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .align{
    align-items: center;
  }
  .alignContent{
    text-align: end;
  }
</style>
