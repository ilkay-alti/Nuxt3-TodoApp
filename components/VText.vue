<script setup lang="ts">
defineProps<{
  taskLenght: number;
  complatedTaskLenght: number;
}>();
</script>
<template>
  <div class="flex justify-between mx-auto w-[736px] mb-7">
    <h1 class="text-blue gap-2">
      created tasks
      <a class="bg-gray-400 rounded-full px-2 py-1">{{ taskLenght }}</a>
    </h1>
    <h1 class="text-purple gap-2">
      Copmlated
      <a class="bg-gray-400 rounded-full px-2 py-1"
        >{{ complatedTaskLenght }} out of {{ taskLenght }}</a
      >
    </h1>
  </div>
</template>

<style scoped></style>
