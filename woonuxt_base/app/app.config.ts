/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Lume & Loom',
  shortDescription: 'TWelcome to Lume & Loom. Explore our thoughtfully curated collection of modern furniture, statement lamps, and stylish accessories designed to transform any space into a personal masterpiece.',
  description: `Welcome to Lume & Loom. Explore our thoughtfully curated collection of modern furniture, statement lamps, and stylish accessories designed to transform any space into a personal masterpiece.`,
  baseUrl: 'https://www.lumeandloom.co.uk',
  siteImage: 'https://user-images.githubusercontent.com/5116925/218879668-f4c1f9fd-bef4-44b0-bc7f-e87d994aa3a1.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
