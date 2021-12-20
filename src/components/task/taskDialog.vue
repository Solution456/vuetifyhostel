<template>
  <v-row justify="center"> 
        <v-dialog
        v-model="dialog"
        max-width='500px'
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            class='py-5'
            style='background: linear-gradient(93.68deg, #007AFF 4.78%, #6447F5 89.93%)'
            v-bind="attrs"
            v-on="on"
            >
            <span class='button white--text'>
                Посмотреть
            </span>
            </v-btn>
        </template>
        
            
        <v-card
            >
            <v-card-title>
            <span class="text-h5">Заявка</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                >
                    <v-text-field
                    label="Название мероприятия"
                    v-model="title"
                    readonly
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                >
                    <v-text-field
                    label="Дата проведения"
                    type="text"
                    readonly
                    v-model="date"
                    ></v-text-field>
                </v-col>
                
            
                <v-col cols="12"
                    md="6">
                    
                    <span>ФОТО</span>
                    
                </v-col>
                <v-col cols="12">
                    <v-flex
                        xs12
                        sm6
                        offset-sm3>
                        <img :src="imgUrl" height="150px">
                    </v-flex>
                    
                </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            name="balls"
                            label="Баллы"
                            type="text"
                            v-model="balls"
                        ></v-text-field>
                    
                    </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="primary"
                    text
                    class='mx-auto'
                    @click="SubmitTask()"
                >
                    <v-icon size="32px">mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    class='mx-auto'
                    @click="CanceledTask()"
                >
                    <v-icon size="32px">mdi-close-circle</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    props:{
        'task':{
            type:Object,
            require:true
        }
    },
    data(){
        return{
            dialog:false,
            title:this.task.nameEvents,
            date:this.task.dateEvents,
            imgUrl:this.task.fileEvents,
            balls:null,
        }
    },

    methods:{
        SubmitTask(){
            this.dialog = false
            return this.$store.dispatch('UPDATE_STATUS', {uid: this.task.uuid, eventName:this.task.nameEvents,balls:this.balls, stat: true})
        },
        
        CanceledTask(){
            this.dialog = false
            return this.$store.dispatch('UPDATE_STATUS', {uid: this.task.uuid, eventName:this.task.nameEvents,stat: false})
 
        }
    }

}
</script>

<style>

</style>