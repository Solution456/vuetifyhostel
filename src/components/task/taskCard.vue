<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{task.nameEvents}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{task.dateEvents | formatedDate}}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        
      ></v-list-item-avatar>
        <img :src="task.fileEvents" height="50">
    </v-list-item>

    <v-card-actions>
     <task-dialog :task = 'task'> </task-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import taskDialog from './taskDialog.vue'
export default {
  components: { taskDialog },
    name: 'taskCard',

    props:{
        'task':{
            Type:Object,
            require:true
        }
    }
    
}
</script>

<style>

</style>