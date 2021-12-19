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
                Добавить мероприятие
            </span>
            </v-btn>
        </template>
        
            
        <v-card
            >
            <v-card-title>
            <span class="text-h5">Добавление мероприятия</span>
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
                    type="date"
                    v-model="date"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                >
                    <v-text-field
                    label="Место проведения"
                    v-model="location"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12"
                    md="6">
                    <v-btn raised color="success" @click="onPickFile">Загрузить фото</v-btn>
                    <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
                    
                </v-col>
                <v-col cols="12">
                    <v-flex
                        xs12
                        sm6
                        offset-sm3>
                        <img :src="imgUrl" height="50px">
                    </v-flex>
                    <p>{{message}}</p>
                    <v-textarea
                        outlined
                        name="inputText"
                        label="Информация"
                        required
                        hide-details="true"
                        placeholder="Введите информацию о мероприятии"
                        v-model="message"
                    ></v-textarea>
                </v-col>
                </v-row>
                <v-row>
                    
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="primary"
                    text
                    class='mx-auto'
                    @click="addEvent()"
                >
                    <v-icon size="32px">mdi-checkbox-marked-circle</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
 
</template>

<script>
export default {
    data(){
        return {
            dialog:false,
            title:null,
            date:null,
            location:null,
            img:null,
            imgUrl:'',
            message:null,
        }
    },

    computed:{
        
    },

    methods:{
        addEvent(){
            if(!this.img){
                return
            }
            console.log(this.img)
            this.dialog = false
            return this.$store.dispatch('ADD_EVENT',{title:this.title,date:new Date(this.date),location:this.location,
            img:this.img,description:this.message})
        },

        CheckLog(){
            console.log(this.date,this.img)
        },

        onPickFile(){
            this.$refs.fileInput.click()
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
        }   
    }


}
</script>

<style>

</style>