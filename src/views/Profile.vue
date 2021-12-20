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
            <v-avatar size='50px' class='mr-3' @click='changeAvatar'>
              <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
              
                <v-img :src='UserData.avatar'> </v-img>
                
            
            </v-avatar>
            <span class='white--text'>{{ UserData.Name + ' ' + UserData.SecondName }}</span>         
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
                v-model="UserData.Floor"
                class='centered-input'
                readonly
                
                >
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
                v-model='UserData.Home'
                class='centered-input'
                readonly
                >
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
                v-model="UserData.Phone"
                class='centered-input'
                readonly           
                >
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
              v-model="UserData.balls"
              class='widthRow centered-input'
              readonly
              hide-details='true'
              >
              }
              </v-text-field>
            </v-col>

          </v-row>
        </v-layout>
      </v-container>
      <AddEvent :floor = 'UserData.Floor'></AddEvent>
    </v-container>
  </div>
</template>

<script>
import AddEvent from '../components/AddEvent.vue'
import { mapGetters } from "vuex"
export default {
  components: { 
    AddEvent 
  },
  
  name: 'Profile',
  data() {
    return {
      img: null
    }
  },
  methods: {
    changeAvatar() {
      return(console.log(this.$refs.fileInput.click()))
    },
    onFilePicked(event){
      const files = event.target.files
      let fileName = files[0].name
      if(fileName.lastIndexOf('.') <= 0){
          return alert('Please add valid file!')
      }
      const fileReaders = new FileReader()
      fileReaders.addEventListener('load', () =>{
          this.imgUrl = fileReaders.result
      })
      fileReaders.readAsDataURL(files[0])
      this.img = files[0]
      return this.$store.dispatch('LOAD_AVATAR', {img: this.img, id: this.UserData.uid})
    } 
  },

  computed: {
    ...mapGetters(['UserData'])
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
