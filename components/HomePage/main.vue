<template>
    <v-container> 


        <v-card class="py-6">
  <v-row justify="center" align="center" class="text-center">
     <v-col cols="12"  class="d-flex justify-center align-center">
      <v-img
        src="https://cidroy.com/wp-content/uploads/2023/03/cidroy-logo.png"
        contain
        max-width="120"
        alt="CIDROY Logo"
      ></v-img>
    </v-col>

     <v-col cols="12" class="d-flex justify-center align-center">
      <h2 class="mb-0">CIDROY TECHNOLOGY INTERVIEW QUESTIONS</h2>
    </v-col>
  </v-row>
</v-card>
    <v-row class="mt-6">
        <!-- Task 1 -->
        <v-col cols="12" md="3">
          <v-card>
            <v-card-title>Task 1</v-card-title>
            <v-card-text>
              This is Task 1. Click below to navigate to the Product screen.
            </v-card-text>
            <v-card-actions>
              <NuxtLink to="/product">
                <v-btn color="primary">Go to Task 1</v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Task 2 -->
        <v-col cols="12" md="3">
          <v-card>
            <v-card-title>Task 2</v-card-title>
            <v-card-text>
              This is Task 2. Click below to navigate to the E-commerce screen.
            </v-card-text>
            <v-card-actions>
              <NuxtLink to="/ecommerce">
                <v-btn color="primary">Go to Task 2</v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Task 3 -->
        <v-col cols="12" md="3">
          <v-card>
            <v-card-title>Task 3</v-card-title>
            <v-card-text>
              This is Task 3. Click below to navigate to the Card Layout screen.
            </v-card-text>
            <v-card-actions>
              <NuxtLink to="/cardlayout">
                <v-btn color="primary">Go to Task 3</v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Task 4 -->
        <v-col cols="12" md="3">
          <v-card>
            <v-card-title>Task 4</v-card-title>
            <v-card-text>
              This is Task 4. Click below to navigate to the Autocomplete screen.
            </v-card-text>
            <v-card-actions>
              <NuxtLink to="/autocomplete">
                <v-btn color="primary">Go to Task 4</v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "TaskNavigation",
  };
  </script>
   
  