<template>
    <div class="py-5">

 
    <v-container class="pa-9" style="background-color: #d7bfa8;">
      <v-row class="d-flex align-center justify-space-between">
        <v-col 
          v-for="(promo, index) in promoItems" 
          :key="index" 
          cols="12" 
          sm="4" 
          class="text-center d-flex align-center justify-center"
        >
          <v-icon :size="promo.iconSize" class="mr-3">
            {{ promo.icon }}
          </v-icon>
          <div>
            <h4>{{ promo.title }}</h4>
            <p>{{ promo.description }}</p>
          </div>
          <!-- Add dividers between items, but not after the last item -->
          <v-divider 
            v-if="index < promoItems.length - 1" 
            vertical 
            class="mx-5"
          />
        </v-col>
      </v-row>
    </v-container>
</div>
  </template>
  
  <script>
  export default {
    name: "PromoBar",
    data() {
      return {
        promoItems: [
          {
            icon: "mdi-truck-fast-outline",
            title: "Free Delivery",
            description: "Free shipping on all orders",
            iconSize: 50
          },
          {
            icon: "mdi-cash-refund",
            title: "Money Return",
            description: "Back guarantee in 7 days",
            iconSize: 50
          },
          {
            icon: "mdi-percent-outline",
            title: "Member Discount",
            description: "On every order over $130.00",
            iconSize: 50
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h4 {
    margin: 0;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #6c757d;
  }
  </style>
  