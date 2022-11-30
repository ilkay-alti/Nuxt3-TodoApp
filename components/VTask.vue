<script setup lang="ts">
import VCheckboxVue from "./VCheckbox.vue";
import VDeleteButtonVue from "./VDeleteButton.vue";
import { useTodoStore } from "@/stores/Todo";

defineProps<{
  title: string;
  id: number;
  completed: boolean;
}>();

const todoStore = useTodoStore();
</script>

<template>
  <button
    @click="todoStore.complatedTodo(id)"
    class="flex items-center p-4 bg-gray-400 w-[736px] h-[72px] gap-x-3"
  >
    <VCheckboxVue :completed="completed" />
    <div v-if="!completed" class="flex-1 text-start text-white text-sm">
      {{ title }}
    </div>
    <div v-else class="flex-1 text-start text-gray-300 text-sm line-through">
      {{ title }}
    </div>
    <VDeleteButtonVue :id="id" />
  </button>
</template>

<style scoped></style>
