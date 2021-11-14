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
            color="transparent"
            flat
          >
          
          <v-card-text>
            <v-form>
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
                label="Email"
                type="email"
                required
              ></v-text-field>
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
                label="password"
                id="password"
                type="password"
                required
              ></v-text-field>
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
      this.$store.dispatch('REGISTER',{email:this.email, password:this.password})
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