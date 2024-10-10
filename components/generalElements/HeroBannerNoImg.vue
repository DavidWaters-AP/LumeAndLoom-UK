<template>
  <section class="pl-0 pr-4 sm:px-4 bg-slate-50 relative overflow-hidden">
    <div
      class="container py-48 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none relative z-30"
    >
      <h1 class="text-3xl md:mb-4 md:text-4xl lg:text-6xl tracking-tighter">
        Lume & Loom.
      </h1>
      <h2 class="text-lg md:mb-4 lg:text-3xl">Crafted Creations</h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
        <p>
          Our latest collection is here. Discover the latest trends and styles
          for the new year.
        </p>
      </div>
      <NuxtLink
        class="px-6 py-3 font-bold text-white bg-gray-800 hover:bg-primary-lumebrown transition-colors ease duration-300"
        to="/products"
        >Shop now</NuxtLink
      >
    </div>
    <NuxtImg
      class="absolute w-[1400px] top-0 right-32"
      src="/images/hero-collection.webp"
    />
  </section>
</template>
