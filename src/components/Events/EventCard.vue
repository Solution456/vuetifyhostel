<template>
  <v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
                    <v-card 
                        class="mx-auto"
                        max-width="350"
                        elevation="2">
                        <v-img
                            :src= event.imgUrl
                            height="150px"
                        ></v-img>

                        <v-card-title>
                            {{event.title}}
                        </v-card-title>
                        <v-card-subtitle>
                            {{event.date | formatedDate}}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn color = "primary lighten-2"
                                text
                                @click="show = !show"
                            >
                                Посмотреть
                            </v-btn>

                            <v-spacer></v-spacer>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                    {{event.description}}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-flex>
</template>

<script>
export default {
    name: 'EventCard',
    props:['event'],

    data(){
        return{
            show: false
        }
    },

}
</script>

<style>

</style>