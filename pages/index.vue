<script setup lang="ts">
import { useTodoStore } from "@/stores/Todo";

import VInputVue from "~~/components/VInput.vue";
import VCheckboxVue from "~~/components/VCheckbox.vue";
import VDeleteButtonVue from "~~/components/VDeleteButton.vue";
import VCreateButtonVue from "~~/components/VCreateButton.vue";
import VTaskVue from "~~/components/VTask.vue";
import VTextVue from "~~/components/VText.vue";

const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos);
</script>

<template>
  <div class="min-h-screen bg-gray-500">
    <header
      class="bg-gray-700 h-[200px] gap-3 flex flex-col justify-center items-center mb-16"
    >
      <div class="flex gap-4 justify-center items-center">
        <img src="~~/assets/icons/Rocket.svg" alt="Rocket" />
        <div class="flex text-5xl font-extrabold">
          <h1>
            <a class="text-blue">to</a>
            <a class="text-purple">do</a>
          </h1>
        </div>
      </div>
      <VInputVue />
    </header>
    <body class="">
      <VTextVue
        :taskLenght="todos.length"
        :complatedTaskLenght="todos.filter((todo) => todo.completed).length"
      />
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="py-4 flex justify-center items-center"
      >
        <VTaskVue
          :id="todo.id"
          :title="todo.title"
          :completed="todo.completed"
        />
      </div>
    </body>
  </div>
</template>
