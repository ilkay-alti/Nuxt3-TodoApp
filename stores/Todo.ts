import { defineStore } from "pinia";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export const useTodoStore = defineStore({
  id: "todoStore",
  state: () => ({
    todos: [
      {
        id: 1,
        title: "Learn Pinia",
        completed: false,
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "Learn Pinia PersistedState",
        completed: false,
        createdAt: new Date(),
      },
    ] as Todo[],
    errorMessages: <string>"",
  }),

  persist: true,

  getters: {
    getAllTodos(): Todo[] {
      return this.todos;
    },
  },

  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    removeTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    },
    complatedTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
