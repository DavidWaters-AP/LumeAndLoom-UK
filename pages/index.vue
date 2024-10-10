<script lang="ts" setup>
  import { ProductsOrderByEnum } from "#woo";
  const { siteName, description, shortDescription, siteImage } = useAppConfig();

  const { data: productData } = await useAsyncGql("getProducts", {
    first: 8,
    orderby: ProductsOrderByEnum.POPULARITY,
  });
  const popularProducts = productData.value.products?.nodes || [];

  useSeoMeta({
    title: `Home`,
    ogTitle: siteName,
    description: description,
    ogDescription: shortDescription,
    ogImage: siteImage,
    twitterCard: `summary_large_image`,
  });
</script>

<template>
  <main>
    <HeroBanner />
    <HomepageCategories />
    <NewsletterSignup />
    <section class="container mt-24 mb-48" v-if="popularProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">
          {{ $t("messages.shop.popularProducts") }}
        </h2>
        <NuxtLink class="text-primary" to="/products">{{
          $t("messages.general.viewAll")
        }}</NuxtLink>
      </div>
      <ProductRow
        :products="popularProducts"
        class="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8"
      />
    </section>

    <section class="bg-slate-50">
      <div
        class="container grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto p-4"
      >
        <div class="flex items-center gap-8 p-8">
          <img
            src="/icons/box.svg"
            class="text-red-500"
            width="60"
            height="60"
            alt="Free Shipping"
            loading="lazy"
          />
          <div>
            <h3 class="text-xl font-semibold">Free Shipping</h3>
            <p class="text-sm">Free shipping on order over €50</p>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8">
          <img
            src="/icons/moneyback.svg"
            width="60"
            height="60"
            alt="Money Back"
            loading="lazy"
          />
          <div>
            <h3 class="text-xl font-semibold">Peace of Mind</h3>
            <p class="text-sm">30 days money back guarantee</p>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8">
          <img
            src="/icons/secure.svg"
            width="60"
            height="60"
            alt="Secure Payment"
            loading="lazy"
          />
          <div>
            <h3 class="text-xl font-semibold">100% Payment Secure</h3>
            <p class="text-sm">Your payment are safe with us.</p>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8">
          <img
            src="/icons/support.svg"
            width="60"
            height="60"
            alt="Support 24/7"
            loading="lazy"
          />
          <div>
            <h3 class="text-xl font-semibold">Support 24/7</h3>
            <p class="text-sm">24/7 Online support</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .brand img {
    max-height: min(8vw, 120px);
    object-fit: contain;
    object-position: center;
  }
</style>
