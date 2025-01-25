<template>
  <div class="bg-black pa-0 ma-0">


  <v-container>
  <v-card>
    <v-row no-gutters class="pa-1 d-flex align-center bg-white mx-4">
      <!-- Image Column -->
      <v-col cols="auto" xl="2" md="2" sm="2"> 
        <v-img
          src="assets/MBC.png"
          width="150px"
        >
        </v-img>
      </v-col>
      
      <!-- Menu Items Column -->
      <!-- <v-col xl="10" md="10" sm="10">
        <div class="d-flex flex-row align-center justify-center">
          <span v-for="(MenuItem, index) in MenuItems" :key="index" class="pa-1 mx-6">
            <v-btn :to="MenuItem.endpoint"  class="hover-button font-weight-bold  bg-black"  >
              {{ MenuItem.name }}
            </v-btn>
          </span>
        </div>
      </v-col> -->

      <v-col xl="8" md="8" sm="8">
  <div class="d-flex flex-row align-center justify-center">
    <span v-for="(MenuItem, index) in MenuItems" :key="index" class="pa-1 mx-6">
  

      <NuxtLink  :to="MenuItem.endpoint"
      class="hover-button font-weight-black text-decoration-none text-uppercase">
      {{ MenuItem.name }}
      </NuxtLink>
    </span>
  </div>
</v-col>

      
      <!-- Search Button Column -->
      <v-col cols="auto" xl="2" md="2" sm="2" > 
 
         <v-text-field variant="outlined" class=" "  density="compact" label="SEARCH"   prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</div>
</template>

<script>
export default {
  name: "Appbar",
  data() {
    return {
      MenuItems: [
        { name: "Home", endpoint: "/home" },
        { name: "My Orders", endpoint: "/orders" },
        { name: "Add Product", endpoint: "/addjewels" },
        { name: "My Cart", endpoint: "/cart" },
        { name: "Login/Register", endpoint: "/login" }
      ]
    };
  }
};
</script>
<style>
.v-input__details{
  display: none;
}
.hover-button {
  color: rgb(119, 118, 118); /* Default button font color */
  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition for hover effect */
}

.hover-button:hover {
  color: #F0BF4C; /* Change font color on hover */ 
}
</style>
