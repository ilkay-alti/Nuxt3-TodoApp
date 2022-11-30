<script setup lang="ts">
defineProps<{
  completed: boolean;
}>();
</script>
<template>
  <section v-if="!completed">
    <div
      class="w-6 h-6 rounded-full border-2 border-blue hover:border-blueDark hover:bg-blue/20"
    />
  </section>
  <section v-else>
    <div
      class="w-6 h-6 rounded-full bg-purpleDark hover:bg-purple flex items-center justify-center"
    >
      <nuxt-icon name="Tick" class="text-white" />
    </div>
  </section>
</template>

<style scoped></style>
