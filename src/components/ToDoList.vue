<template>
  <v-text-field clearable label="addTask" @keyup.enter="taskStore.addTask" :rules="rules"
    v-model="taskStore.titleTaskCreating" />

  <ListTasks :tasks="taskStore.tasks" />
</template>

<script setup>

import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task'
import { onMounted } from 'vue'

const taskStore = useTaskStore();

const rules = [
  value => {
    if (value.length > 5) return true

    return 'Minimo de 5 letras'
  }
]

onMounted(() => {
  taskStore.getData();
})


</script>