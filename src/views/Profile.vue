<template>
  <div>
    <v-container grid-md fluid pa-0 class='container'>
      <v-layout d-flex align-center class='layoutProfile'> 
        <v-col 
          md='6'
          class='colInfo my-10'
        >
          <v-row 
          align='center'
          dense 
          justify='center'
          class='mb-10'
          >                     
            <v-avatar size='50px' class='mr-3'>
              <img 
              alt='Avatar' 
              src='https://randomuser.me/api/portraits/women/85.jpg'
              >
            </v-avatar>
            <span class='white--text'>{{ name }}</span>         
          </v-row>

          <v-row 
          align='center' 
          justify='center'
          dense
          class='mb-5'
          style='padding:0px 130px 0px'
          >
            <v-col class='mr-10' align="center">
              <v-row justify='center'>
                <h5 class='subtitle-1 white--text'>Этаж:</h5>
              </v-row>
              <v-row class='widthRow mt-4'>
                <v-text-field
                solo
                rounded
                v-model="etaj"
                class='centered-input'
                readonly
                
                >
                {{ etaj }}
                </v-text-field>
              </v-row>
            </v-col>

            <v-col align='center'>
              <v-row justify='center'>
                <h5 class='subtitle-1 white--text'>Блок:</h5>
              </v-row>
              <v-row class='widthRow mt-4'>
                <v-text-field 
                solo
                rounded
                v-model='blok'
                class='centered-input'
                readonly
                >            
                {{ blok }}
                </v-text-field>
              </v-row>
            </v-col>
          </v-row>

          <v-row 
          align='center'
          justify='center' 
          dense
          >
            <v-col align='center'>
              <v-row justify='center'>
                  <h5 class='subtitle-1 white--text'>Номер телефона:</h5>
              </v-row>
              <v-row class='widthRowPhone mt-4'>
                <v-text-field 
                solo 
                rounded
                v-model="phone"
                class='centered-input'
                readonly           
                >
                  {{ phone }}
                </v-text-field>
              </v-row>
            </v-col>           
          </v-row>
        </v-col>  
      </v-layout>

      <v-container grid-list-xs>
        <v-layout>
          <v-row 
            align='center' 
            justify='center'
            dense
            class='mt-8'
          >
            <v-col cols='auto'>
              <h4>Мои баллы:</h4>
            </v-col>
            <v-col cols='auto' align='center' class='mx-6'>
              <v-text-field
              solo
              rounded
              v-model="ballsSSO"
              class='widthRow centered-input'
              readonly
              hide-details='true'
              >
              {{ ballsSSO }}
              </v-text-field>
            </v-col>

            <v-col cols='auto' align='center'>
              <v-text-field 
              solo
              rounded
              v-model="ballsAdm"
              class='widthRow centered-input'
              hide-details='true'
              readonly
              >            
              {{ ballsAdm }}
              </v-text-field>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
      <AddEvent></AddEvent>
    </v-container>
  </div>
</template>

<script>
import AddEvent from '../components/AddEvent.vue'

export default {
  components: { 
    AddEvent 
  },
  
  name: 'Profile',
  data() {
    return {
      name: 'Эрик Аскаров',
      image: '',
      etaj: '6',
      blok: '603',
      phone: '89991003038',
      ballsSSO: 30,
      ballsAdm: 25
    }
  }
}
</script>

<style scoped>
.layoutProfile {
  width: 100%;
  justify-content: center;

  background: linear-gradient(133.61deg, rgba(0, 122, 255, 0.8) 40.89%, #0062CC 94.56%);
  border-radius: 20px;
}
.colInfo {
  margin-top:100px;
}
.centered-input >>> input{
  text-align: center;
}
.v-input >>> input {
  color:black;
}
.widthRow {
  width: 150px;
}
.widthRowPhone {
  width: 250px;
}
</style>
