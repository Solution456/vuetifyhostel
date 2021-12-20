<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width='400px'
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class='py-5 mt-6'
          style='background: linear-gradient(93.68deg, #007AFF 4.78%, #6447F5 89.93%)'
          v-bind="attrs"
          v-on="on"
        >
          <span class='button white--text'>
            Добавить мероприятие
          </span>
        </v-btn>
      </template>
      <v-card align='center' height="600px">
        <v-container 
          grid-list-xs 
          class=' container pa-0'
          style='background: linear-gradient(133.61deg, rgba(0, 122, 255, 0.8) 40.89%, #0062CC 94.56%)'
        >
          <v-col class='ma-auto'>
            <v-row justify='center' class='mt-10'>
              <span class='white--text'>
                <h2>Добавление мероприятия</h2>
              </span>
            </v-row>
            
            <v-row class='mt-16'>
              <v-col>
                <span class='white--text'>
                  Название мероприятия
                </span>

                <v-text-field
                  solo
                  rounded
                  class='centered-input widthNameEvent'
                  hide-details='true'
                  v-model='nameEvents'
                >
                  
                </v-text-field>
              </v-col>  
            </v-row>

            <v-row class='mt-2'>
              <v-col>
                <span class='white--text'>
                  Дата
                </span>
                <v-text-field
                  solo
                  rounded
                  type="date"
                  class='centered-input widthDate'
                  hide-details='true'
                  v-model='dateEvents'
                >
                  
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>  
        </v-container>

        <v-row class='mt-10'>
          <v-col class='pa-0'>
            <span style='color:#007AFF'>
              Фото
            </span>
            <p>
              <v-file-input
                align-center
                style="max-width: 200px"
                outlined
                dense
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                v-model='fileEvents'
              ></v-file-input>
            </p>
          </v-col>
        </v-row>
          
        <v-card-actions class='mt-16'>
          <v-btn
            color="primary"
            text
            @click="addEvents()"
            class='mx-auto'
          >
            <v-icon size="32px">mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props:{
      'floor':{
        type:String,
        require:true
      }
    },
    data: () => ({
      dialog: false,
      nameEvents: null,
      dateEvents: null,
      fileEvents: null,
      imgUrl: null
    }),

    methods: {
      addEvents() {
        this.dialog = false
        console.log(this.fileEvents)
        console.log('yes')

        return this.$store.dispatch('LOAD_USER_EVENTS', {nameEvents: this.nameEvents, dateEvents: new Date(this.dateEvents), Floor:this.floor, fileEvents: this.fileEvents})
      },

    }
  }
</script>
<style scoped>

.container {
  border-radius: 20px;
}
.centered-input >>> input{
  text-align: center;
}
.v-input >>> input {
  color:black;
}
.widthNameEvent {
  width: 300px;
}
.widthDate {
  width: 200px;
}
</style>