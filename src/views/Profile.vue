<template>
  <div>
    <v-container grid-list-xs>
      <v-layout flex-column align-center justify-center>
        <v-col class="infoProfile">
          <v-row align="center">
            <v-avatar size="36px" class="mr-3">
              <img
                alt="Avatar"
                src="https://randomuser.me/api/portraits/women/85.jpg">
            </v-avatar>
            <strong>name</strong> 
          </v-row>

          <v-row>
            <v-col 
              cols="12" 
              sm="6"
            >
              <v-text-field 
                value="" 
                label="Этаж"
                class="text" 
                readonly
              ></v-text-field>
            </v-col>

            <v-col 
              cols="12" 
              sm="6"
            >
              <v-text-field 
                value="" 
                label="Блок"
                class="text" 
                readonly
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12" 
              sm="6"
            >
              <v-text-field
                value=""
                label="Номер телефона"
                class="text"
                
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style>
.infoProfile {
  margin-top: 91px;
}
.text {

}
</style>
