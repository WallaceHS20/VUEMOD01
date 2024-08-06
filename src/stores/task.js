import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert'
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        titleTaskCreating: '',
        cargoTaskCreating: '',
        showDialog: false,
        showDialogDelete: false,
        indexSelectd: 0,
    }),

    actions: {
        addTask() {
            if(this.titleTaskCreating.length <= 5) return
            this.tasks.push({
                title: this.titleTaskCreating,
            });

            // Limpar os campos após adicionar a tarefa
            this.titleTaskCreating = ''
            this.saveData()
            alertStore.notifyAlert()
        },

        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete
            if (index != null) {
                this.indexSelectd = index
            }
        },

        deleteTask() {
            this.tasks.splice(this.indexSelectd, 1)
            this.toggleDelete()
            this.saveData()
        },

        toggle(index) {
            this.showDialog = !this.showDialog
            if (index != null) {
                this.indexSelectd = index
            }
            this.saveData()
        },

        saveData() {
            localStorage.setItem(
                'tasks', JSON.stringify(this.tasks)
            )
        },

        getData() {
            let items = localStorage.getItem('tasks')
            if (items) {
                this.tasks = JSON.parse(items)
            }
        },
    }
})
