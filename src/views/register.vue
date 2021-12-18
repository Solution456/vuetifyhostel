<template>
  <div class="signIn">
    
    <v-container grid-list-xs>
      <v-layout align-center justify-center flex-column>
        <v-alert 
              type="warning"
              :value = "error">
              {{error}}
          </v-alert>
         <v-card
            class="mt-12"
            color="transparent"
            flat
            max-width="650px"
          >
          
          <v-card-text>
            <v-form
              v-model='valid'>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      
                      v-model="email"
                      background-color="white"
                      height=".5em"
                      dense
                      filled
                      rounded
                      color="primary"
                      prepend-inner-icon="mdi-account"
                      name="Email"
                      label="E-mail"
                      type="email"
                      required
                      
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="6">
                      <v-text-field
                        
                        v-model="password"
                        background-color="white"
                        color="primary"
                        filled
                        height=".5em"
                        dense
                        rounded
                        prepend-inner-icon="mdi-lock"
                        name="password"
                        label="Пароль"
                        id="password"
                        type="password"
                        required
                        
                      ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                    >
                      <v-text-field
                        v-model="Name"
                        background-color="white"
                        color="primary"
                        filled
                        height=".5em"
                        dense
                        rounded
                        prepend-inner-icon="mdi-card-account-details"
                        name="Name"
                        label="Имя"
                        id="name"
                        type="text"
                        required
                        
                      ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                      <v-text-field
                        v-model="SecondName"
                        background-color="white"
                        color="primary"
                        filled
                        height=".5em"
                        dense
                        rounded
                        prepend-inner-icon="mdi-card-account-details"
                        name="SecondName"
                        label="Фамилия"
                        id="secondname"
                        type="text"
                        required
                        
                      ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                      <v-text-field
                        v-model="Floor"
                        background-color="white"
                        color="primary"
                        filled
                        height=".5em"
                        dense
                        rounded
                        prepend-inner-icon="mdi-home-floor-3"
                        name="Floor"
                        label="Этаж"
                        id="floor"
                        type="text"
                        required
                        
                      ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    md="4">
                      <v-text-field
                
                        v-model="Home"
                        background-color="white"
                        color="primary"
                        filled
                        height=".5em"
                        dense
                        rounded
                        prepend-inner-icon="mdi-home-minus"
                        name="Home"
                        label="Квартира"
                        id="home"
                        type="text"
                        required
                        
                      ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4">
                      <v-text-field
                        v-model="Phone"
                        background-color="white"
                        color="primary"
                        filled
                        height=".5em"
                        dense
                        rounded
                        prepend-inner-icon="mdi-phone-in-talk"
                        name="Phone"
                        label="Телефон"
                        id="phone"
                        type="text"
                        required
                        
                      ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4">
                      <v-select
                        :items="items"
                        v-model="Permission"
                        label="Permisions"
                        dense
                        rounded
                        solo
                      ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions text  style="justify-content:center">
            
            <v-btn 
              class="px-12"
              rounded
              x-large
              @click.prevent="register"
              :disabled="processing"
            >r e g i s t e r</v-btn>
          </v-card-actions>
           
         </v-card>
      </v-layout>
        
    </v-container>
    <div class="bg-sg"></div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      email:null,
      password:null,
      Name:null,
      SecondName:null,
      Floor:null,
      Home:null,
      Phone:null,
      Permission:null,
      valid: false,
      items: ['Староста', 'Студент','Admin'],

    }
  },

  computed:{
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    },
    error(){
      return this.$store.getters.getError
    },

    processing(){
      return this.$store.getters.getProcessing
    }
  },


  methods: {
    register(){
      this.$store.dispatch('REGISTER',{email:this.email, password:this.password,
      Name:this.Name, SecondName:this.SecondName, Floor:this.Floor,Home:this.Home,Phone:this.Phone,Permissions:this.Permission,})
    }
  }

}
</script>

<style lang="scss" scoped>
  .v-btn{
    background:linear-gradient(93.68deg, #007AFF 4.78%, #6447F5 89.93%);
    color:white;
  }
  .intext-white input{
    color: white !important;
  }
  .signIn{
    
    position: relative;
    z-index: 99;
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
                
        position: relative;
        width: 150px;
        height: 150px;
                
        box-sizing: border-box;
        background: linear-gradient(133.61deg, rgba(0, 122, 255, 0.8) 40.89%, #0062CC 94.56%);;
        $border: 2px;
        color: #fff;
        background-clip: padding-box;
        border: solid $border transparent;
        border-radius: 25px;
        margin-bottom: 50px;
               
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin: -$border;
            border-radius: inherit;
            background: linear-gradient(127.98deg, #FFFFFF 9.62%, #6447F5 81.5%);

        }
                
        h3{
          padding-top: 45px;
        }

        h4{
                    
            text-align: center;
            font-weight: 300;
            font-size: 20px;
            line-height: 20px;
            display: flex;
            align-items: center;
            letter-spacing: 0.18em;
            padding-bottom: 5px;
                    
        }

    }

    .text-field-size{
      width: 50%;
    }
    
    .bg-sg{
      position: absolute;
      top: 0;
      z-index: -1;
      background-size: cover;
      background: linear-gradient(133.61deg, rgba(0, 122, 255, 0.8) 40.89%, #0062CC 94.56%);
      width: 100%;
      height: 400px;
      border-radius: 0px 0px 20px 20px;
    }
  }
</style>