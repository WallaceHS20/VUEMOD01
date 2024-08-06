<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialog" max-width="400" persistent>


      <v-card prepend-icon="mdi-map-marker" title="Edit Task">

        <v-text-field label="title" v-model="props.task.title" />

        <v-text-field label="cargo" v-model="props.task.cargo" />

        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="taskStore.toggle">
            Ok
          </v-btn>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore();
const props = defineProps({
  task: Object
})
</script>