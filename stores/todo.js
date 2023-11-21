import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {id: 1, title: 'Task 1', complete: false},
            {id: 2, title: 'Task 2', complete: false},
            {id: 3, title: 'Task 3', complete: true},
            {id: 4, title: 'Task 4', complete: false}
        ],
        isAdmin: true
    }),
    getters: {
        completed: (state) => {
            return state.todos.filter((item) => {
                return item.complete === true
            }).length
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        editTodo(todo) {
            const index = this.todos.findIndex(item => item.id === todo.id)
            if (index !== -1) {
                Object.assign(this.todos[index], todo)
            } else {
                throw new Error('Todo not found')
            }
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(item => item.id !== id)
        }

    },
})