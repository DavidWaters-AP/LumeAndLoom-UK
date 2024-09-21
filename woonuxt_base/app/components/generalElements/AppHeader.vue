<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const { isShowingSearch } = useSearching();

// Reactive state to track whether the page is scrolled
const isScrolled = ref(false);

// Function to check scroll position
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Add event listener when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="['sticky top-0 z-40 bg-white bg-opacity-40 backdrop-blur-md transition-shadow', isScrolled ? 'shadow-sm' : '']">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <MenuTrigger class="lg:hidden" />
        <Logo class="md:w-[160px]" />
      </div>
      <MainMenu class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4" />
      <div class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">
        <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
        <SearchTrigger />
        <div class="flex gap-4 items-center">
          <SignInLink />
          <CartTrigger />
        </div>
      </div>
    </div>
    <Transition name="scale-y" mode="out-in">
      <div class="container mb-3 -mt-1 sm:hidden" v-if="isShowingSearch">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header>
</template>
