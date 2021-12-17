
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
          Этажи 
        </v-list-item-title>
      </v-list-item-content>

     
      <v-btn
     outlined
      color="indigo"
     large>
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
  <v-container
    fluid
    class="pa-0"
  >
    <v-row align="center">
      <v-col
        
      >
        <div class="text-center">
          <div class="my-2">
            <v-btn

            large
              rounded
              color="primary"
              dark
            >
              3 этаж
             </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              7 этаж
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
                rounded
                color="primary"
                dark
              >
                11 этаж
              </v-btn>
            </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              15 этаж
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col
  
      >
        <div class="text-center">
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              4 этаж
             </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              8 этаж
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
                rounded
                color="primary"
                dark
              >
                12 этаж
              </v-btn>
            </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              16 этаж
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col

      >
        <div class="text-center">
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              5 этаж
             </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              9 этаж
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
                rounded
                color="primary"
                dark
              >
                13 этаж
              </v-btn>
            </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              17 этаж
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="text-center">
          <div class="my-2">
      
            <v-btn
            large
            
              rounded
              color="primary"
              dark
            >
              6 этаж
             </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              10 этаж
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            large
                rounded
                color="primary"
                dark
              >
               14 этаж
              </v-btn>
            </div>
          <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              18 этаж
            </v-btn>
          
          </div>
        
        </div>

      </v-col>
    </v-row>
    <v-row align="center"
    >
      <v-col>
      <div class="my-2">
            <v-btn
            large
              rounded
              color="primary"
              dark
            >
              19 этаж
            </v-btn>
          </div>
      </v-col>
    </v-row>

  </v-container>
  </v-card>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.v-application .mx-auto{
  margin-top: 15px;
  margin-bottom: 27px;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  color: rgba(25, 118, 210, 1);
}
.v-btn:not(.v-btn--round).v-size--large{
  padding: 1px 35px;
}
.theme--light.v-sheet--outlined {
    border: thin solid rgba(25, 118, 210, 1);
}
.row + .row {
    margin-top: -32px;
}
.theme--light.v-icon {
    color: rgba(25, 118, 210, 1);
}
.v-btn--outlined {
    border: 0px;
}

</style>