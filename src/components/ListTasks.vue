<template>
  <div>
    <v-text-field clearable label="addTask" v-model="task.title" />
    <v-text-field
      clearable
      label="addTask"
      @keyup.enter="addTask"
      v-model="task.cargo"
    />
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item v-for="(task, index) in tasks" :key="index" :value="index">
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
              <v-btn
                color="grey-lighten-1"
                icon="mdi-information"
                variant="text"
                v-bind="props"
              >
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Editar</v-list-item-title>
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>

    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Dropdown </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Editar</v-list-item-title>
          <v-list-item-title>Deletar</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tasks = ref([
  {
    title: "Universal",
    cargo: "Analista",
  },
  {
    title: "Latecore",
    cargo: "Assistente",
  },
  {
    title: "Safran",
    cargo: "Engenheiro",
  },
]);

const task = ref({
  title: "",
  cargo: "",
});

const addTask = () => {
  tasks.value.push({
    title: task.value.title,
    cargo: task.value.cargo,
  });

  // Limpar os campos após adicionar a tarefa
  task.value.title = "";
  task.value.cargo = "";
};
</script>
