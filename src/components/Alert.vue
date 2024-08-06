<template>
    <div class="alert-notification">
        <v-alert
            class="animate__animated animate__backInUp"
            text="Task criada com sucesso!"
            title="Ação Concluída" 
            type="success" />
    </div>
</template>

<script setup>
import 'animate.css';
</script>

<style scoped>
.alert-notification{
    position: fixed;
    z-index: 1;
    width: 100%;
    bottom: 50px;
    padding: 0 30% 0 30%;

}
</style>