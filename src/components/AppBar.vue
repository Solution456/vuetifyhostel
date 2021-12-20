<template>
<div>
         
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>HostelApp</v-toolbar-title>

    </v-app-bar>

    <v-navigation-drawer 
      app 
      v-model="drawer"
      :mini-variant.sync = "mini"
      permanent>
        <v-list>
            <v-list-item
            class="px-2">
                <v-list-item-avatar>
                    <v-img :src="UserData.avatar"></v-img>
                </v-list-item-avatar>

            </v-list-item>

            <v-list-item v-show="mini" class="px-2 d-none d-sm-flex"> 
                <v-list-item-content>
                    <v-list-item-title class="text-h6">

                        {{UserData.Name + ' ' + UserData.SecondName}}

                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list> 
        

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="`menuItems${i}`"
          link
          :to='item.route'
        >
          <v-list-item-icon>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-if="isUserAuthenticated"
          link
          @click.prevent="signout">
          <v-list-item-icon>
            <v-icon >mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
  
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: 'AppBar',
    data() {
        return{
            drawer: true,
            mini: true,
        }
        
    },
    computed: {
        ...mapGetters(['UserData']),
        isUserAuthenticated(){
          return this.$store.getters.isUserAuthenticated
        },
        menuItems(){
            let vm = this
            console.log(vm.UserData.Permissions)
            console.log(this.isUserAuthenticated)
            if(this.isUserAuthenticated & vm.UserData.Permissions == 'Студент'){
              return [
                {
                    icon: 'mdi-calendar',
                    title: 'Мероприятия',
                    route: '/events',
                },

                {
                    icon: 'mdi-calendar-heart',
                    title: 'Посещенные мероприятия',
                    route: '/attendedevents',
                },
                {
                    icon: 'mdi-account-box',
                    title: 'Profile',
                    route: '/profile',
                }
                ]
            }
            else if(this.isUserAuthenticated & vm.UserData.Permissions == 'Староста'){
              return [
                {
                    icon: 'mdi-door',
                    title: 'Мой этаж',
                    route: '/floor',
                },
                {
                    icon: 'mdi-file-tree-outline',
                    title: 'Заявки на баллы',
                    route: '/task',
                },
                {
                    icon: 'mdi-calendar',
                    title: 'Мероприятия',
                    route: '/events',
                }]
            }
            else if(this.isUserAuthenticated){
              return [
                
                {
                    icon: 'mdi-calendar',
                    title: 'Мероприятия',
                    route: '/events',
                },
         
                {
                    icon: 'mdi-home-assistant',
                    title: 'Этажи',
                    route: '/adminStage',
                }]
            }
            return 1
               
        },
        ...mapGetters(['UserData'])
    },

    methods:{
      signout(){
        this.$store.dispatch('SIGN_OUT')
      }
    }
}
</script>

<style>

</style>