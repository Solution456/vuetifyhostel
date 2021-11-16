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
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>

            </v-list-item>

            <v-list-item v-show="mini" class="px-2 d-none d-sm-flex"> 
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Denis Dyukin
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
        <v-spacer/>
        <v-list-item
          link>
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
export default {
    name: 'AppBar',
    data() {
        return{
            drawer: true,
            mini: true,
        }
        
    },
    computed: {
        menuItems(){
            return [
               {
                    icon: 'mdi-calendar',
                    title: 'Мероприятия',
                    route: '/events',
                },

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
                    icon: 'mdi-file-tree-outline',
                    title: 'Мероприятия',
                    route: '',
                },

                {
                    icon: 'mdi-file-tree-outline',
                    title: 'Мероприятия',
                    route: '',
                } 
                

            ]
        },
    },
}
</script>

<style>

</style>