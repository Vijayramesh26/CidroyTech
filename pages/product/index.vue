<template>
    <div class="task4-container">
      <CartEcommerce />
    </div>
  </template>
  
  <script>
  import CartEcommerce from "../../components/Product/main.vue";
  
  export default {
    components: { CartEcommerce },
  };
  </script>
  
  <style scoped>
  .task4-container {
    padding: 2rem;
  }
  
  .autocomplete-wrapper {
    display: flex;
    gap: 2rem;
  }
  </style>
  