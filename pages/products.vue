<script setup lang="ts">
const allProducts = ref<Product[]>([]);

const { setProducts, updateProductList, products } = useProducts();
const route = useRoute();
const { storeSettings } = useAppConfig();
const { isQueryEmpty } = useHelpers();

// Fetch products asynchronously
const { data, error } = await useAsyncGql('getProducts');
if (error.value) {
  console.error('Error fetching products:', error.value);
} else {
  allProducts.value = data.value?.products?.nodes || [];
  setProducts(allProducts.value);
}

onMounted(() => {
  if (!isQueryEmpty.value) updateProductList();
});

watch(
  () => route.query,
  () => {
    if (route.name !== 'products') return;
    updateProductList();
  },
);

useHead({
  title: 'Products',
  meta: [{ hid: 'description', name: 'description', content: 'Products' }],
});
</script>

<template>
  <div class="container flex items-start gap-16" v-if="allProducts.length">
    <Filters v-if="storeSettings.showFilters" />

    <div class="w-full">
      <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
        <ProductResultCount />
        <OrderByDropdown class="hidden md:inline-flex" v-if="storeSettings.showOrderByDropdown" />
        <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
      </div>
      <ProductGrid />
    </div>
  </div>
  <NoProductsFound v-else> Could not fetch products from your store. Please check your configuration. </NoProductsFound>
</template>
