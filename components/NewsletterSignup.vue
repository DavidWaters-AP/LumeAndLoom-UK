<template>
  <section class="container">
    <div
      class="bg-primary-lumeblack text-white p-12 grid grid-cols-1 md:grid-cols-2 gap-32 py-24"
    >
      <div>
        <h2
          class="text-base font-light mb-4 border-b border-white border-opacity-30 pb-4"
        >
          Newsletter
        </h2>
        <p class="text-2xl max-w-lg font-thi mb-4">
          Light up your inbox with Lume & Loom!
          <span class="italic font-thin"
            >Join our newsletter for fresh lighting ideas, home decor trends,
            and exclusive deals to transform your space.</span
          >
        </p>
        <p class="text-sm font-thin">
          No fluff, just the best styles delivered to you!
        </p>
      </div>
      <div class="flex w-full justify-center items-center">
        <form class="flex flex-col w-full" action="">
          <input
            class="mb-4 p-2 w-full center-placeholder"
            type="email"
            placeholder="Enter your email"
          />
          <button
            class="bg-primary-lumebrown font-semibold py-2 px-12 hover:bg-opacity-50 transition-colors ease-in-out duration-200"
            type="submit"
          >
            Join Newsletter
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
  .center-placeholder {
    text-align: center; /* Center the input text */
  }

  /* Ensure the placeholder text inherits the alignment */
  .center-placeholder::placeholder {
    text-align: center; /* Center the placeholder text */
  }
</style>
