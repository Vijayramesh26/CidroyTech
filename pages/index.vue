<template>
  <v-app>
<CartEcommerce/>
    <NuxtPage />
  </v-app>
</template>
<script>
import CartEcommerce from "../../components/HomePage/main.vue";

export default {
  components: { CartEcommerce },
};
</script>
