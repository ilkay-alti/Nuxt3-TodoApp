<script setup lang="ts">
import { useTodoStore } from "~~/stores/Todo";

defineProps<{
  id: number;
}>();

const todoStore = useTodoStore();
const deleteTodo = (id: number) => todoStore.removeTodo(id);
</script>

<template>
  <div
    @click="deleteTodo(id)"
    class="group w-6 h-6 flex justify-center items-center hover:bg-gray-400 rounded"
  >
    <nuxt-icon name="Delete" class="text-gray-300 group-hover:text-danger" />
  </div>
</template>
