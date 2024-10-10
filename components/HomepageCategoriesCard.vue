<template>
  <NuxtLink
    :to="link"
    class="bg-gray-100 hover:bg-gray-200 relative overflow-hidden"
  >
    <NuxtImg
      class="w-full max-h-96 object-contain relative hover:scale-125 transition-transform ease-in-out duration-500 hover:drop-shadow-xl"
      :src="imageSrc"
    />
    <div
      class="p-4 pointer-events-none absolute bottom-0 w-full bg-white bg-opacity-50 backdrop-blur-md"
    >
      <h3 class="text-lg tracking-tight">
        <span class="text-sm italic text-primary-lumebrown">{{
          decorationNumber
        }}</span>
        {{ name }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: String,
    decorationNumber: String,
    imageSrc: String,
    link: String,
  });
</script>

<style scoped></style>
