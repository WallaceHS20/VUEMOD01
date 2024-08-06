<template>
  <div>
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item v-for="(task, index) in taskStore.tasks" :key="index" :value="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ task.title }}</v-list-item-title>

        <v-list-item-subtitle>
          {{ task.cargo }}
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn color="grey-lighten-1" icon="mdi-dots-vertical" variant="text" v-bind="props">
              </v-btn>
            </template>

            <v-list>
              <v-list-item value="1">
                <v-list-item-title @click.stop="taskStore.toggle(index)">
                  Editar
                </v-list-item-title>
              </v-list-item>
              <v-list-item value="2">
                <v-list-item-title @click.stop="taskStore.toggleDelete(index)">
                  Deletar
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>

      <Dialog v-if="taskStore.tasks[taskStore.indexSelectd]" :task="taskStore.tasks[taskStore.indexSelectd]" />
      
      <DialogDelete v-if="taskStore.tasks[taskStore.indexSelectd]" :task="taskStore.tasks[taskStore.indexSelectd]" />

    </v-list>
  </div>
</template>

<script setup>
import Dialog from './Dialog.vue'
import DialogDelete from './DialogDelete.vue'
import { useTaskStore } from '@/stores/task'


const taskStore = useTaskStore();

</script>
