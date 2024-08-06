<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>

      <v-card prepend-icon="mdi-map-marker" title="Delete Task" text="Deseja deletar a task?">

        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn 
          @click="taskStore.toggleDelete"
          color="red-darken-1"
          variant="elevated"
          >
            Não
          </v-btn>

          <v-btn 
          @click="taskStore.deleteTask"
          color="red-darken-1"
          variant="text"
          >
            Confirmar
          </v-btn>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/task'
  
const taskStore = useTaskStore();
</script>