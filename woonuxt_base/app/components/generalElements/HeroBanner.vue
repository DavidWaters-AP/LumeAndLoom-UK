<template>
  <section class="pl-0 pr-4 sm:px-4">
    <div class="container relative mx-auto">
      <NuxtImg
        width="1400"
        height="800"
        class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
        src="/images/homepage-hero-temp.webp"
        alt="Hero image"
        loading="eager"
        sizes="sm:100vw md:1400px"
        fetchpriority="high"
        preload
        placeholder
        placeholder-class="blur-xl" />
      <div class="container lg:p-32 md:p-16 p-8 absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
        <h1 class="text-3xl md:mb-4 md:text-4xl lg:text-6xl tracking-tighter">lume & loom.</h1>
        <h2 class="text-lg md:mb-4 lg:text-3xl">Crafted Collections</h2>
        <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
          <p>Discover our latest finds.</p>
        </div>
        <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 hover:bg-primary-lumebrown transition-colors ease-in-out duration-200" to="/products"
          >Shop now</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
