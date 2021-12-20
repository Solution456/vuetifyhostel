<template>
  <v-container grid-list-xs>
    <div class="row">
       <div class="col col-4" v-for="task in getUserTasks" :key="task.id">
          <task-card :task = "task"> </task-card>
        </div>
        
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import TaskCard from '../components/task/taskCard.vue'
export default {
    name:'task',
    computed:{
        ...mapGetters(['tasksList']),
        
        getFloor(){
            return this.$store.getters.UserData
        },

        getUserTasks(){
            let vm = this
            let listTask = vm.tasksList
            let tasks = []
            for (let i=0; i < listTask.length; i++){
                let task = listTask[i]
                let el = Object.values(task['events'])
                for(let j = 0; j < el.length; j++){
                    if(el[j].status == 'Обработка'){
                        tasks.push(el[j])
                    }
                    
                }
                
            }
            return tasks
        },

        getTasks(){
            let that = this
            let b = that.getFloor
            let floor = b.Floor
            console.log(floor)
            return that.$store.dispatch('LOAD_FLOOR_USER_EVENTS', floor)
        }
        
    },
    components:{
        
        TaskCard
    },

    methods:{
        // getUserTasks(){
        //     let vm = this
        //     let listTask = vm.tasksList
        //     let tasks = []
        //     for (let i=0; i < listTask.length; i++){
        //         let task = listTask[i]
        //         let el = Object.values(task['events'])
        //         for(let j = 0; j < el.length; j++){
        //             tasks.push(el[j])
        //         }
                
        //     }
        //     // let task = listTask[0]
        //     // console.log(Object.values(task['events']))
            
        //     return tasks
        // },
        
        
    },

    created(){
        this.getTasks
        // this.getUserTasks()

    }
}
</script>

<style>

</style>