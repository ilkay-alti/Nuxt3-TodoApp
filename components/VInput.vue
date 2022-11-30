<script setup lang="ts">
import { useTodoStore } from "@/stores/Todo";
import VCreateButtonVue from "~~/components/VCreateButton.vue";

const todoStore = useTodoStore();
const title = ref<string>("");
const createdTodo = () => {
  if (title.value !== "") {
    todoStore.addTodo({
      id: todoStore.todos.length + 1,
      title: title.value,
      completed: false,
      createdAt: new Date(),
    });
    title.value = "";
  }
  todoStore.errorMessages = "Empty todo title";
};
</script>
<template>
  <form @submit.prevent="createdTodo" class="flex gap-2 absolute top-[173px]">
    <input
      type="text"
      v-model="title"
      placeholder="Add a new task"
      class="outline-none border rounded-md bg-gray-500 border-gray-700 focus:border-purpleDark text-xs leading-4 text-gray-300 focus:text-gray-100 w-[523px] h-14 p-4"
    />
    <VCreateButtonVue />
  </form>
</template>
