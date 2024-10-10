<template>
  <section class="container my-32">
    <div
      class="flex flex-col gap-4 md:gap-0 md:flex-row md:items-end md:justify-between"
    >
      <div class="flex flex-col">
        <h2 class="text-lg tracking-tighter md:text-2xl mb-4">
          {{ $t("messages.shop.shopByCategory") }}
        </h2>
        <p class="max-w-md">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <NuxtLink class="text-primary" to="/categories">{{
        $t("messages.general.viewAll")
      }}</NuxtLink>
    </div>
    <div
      class="grid justify-center grid-cols-2 gap-4 md:gap-8 mt-8 md:grid-cols-3 lg:grid-cols-5"
    >
      <HomepageCategoriesCard
        class="col-span-1 md:col-span-2 lg:col-span-3"
        name="Accessories"
        decorationNumber="01"
        imageSrc="/images/categories/acessories_new_2.webp"
        link="/product-category/accessories"
      />
      <HomepageCategoriesCard
        class="col-span-1 md:col-span-1 lg:col-span-2"
        name="Pendant Lamps"
        decorationNumber="02"
        imageSrc="/images/categories/pendant-lights_new.webp"
        link="/product-category/pendant-lamps"
      />
      <HomepageCategoriesCard
        class="col-span-1 md:col-span-1 lg:col-span-2"
        name="Table Lamps"
        decorationNumber="03"
        imageSrc="/images/categories/table-lamp_new.webp"
        link="/product-category/table-lamps"
      />
      <HomepageCategoriesCard
        class="col-span-1 md:col-span-2 lg:col-span-3"
        name="Floor Lamps"
        decorationNumber="04"
        imageSrc="/images/categories/floor-lamp_new.webp"
        link="/product-category/floor-lamps"
      />
      <HomepageCategoriesCard
        class="col-span-1 md:col-span-2 lg:col-span-3"
        name="Furniture"
        decorationNumber="05"
        imageSrc="/images/categories/furniture.webp"
        link="/product-category/furniture"
      />
      <HomepageCategoriesCard
        class="col-span-1 md:col-span-1 lg:col-span-2"
        name="All"
        decorationNumber="06"
        imageSrc="/images/categories/acessories_new.webp"
        link="/products"
      />
    </div>
  </section>
</template>
