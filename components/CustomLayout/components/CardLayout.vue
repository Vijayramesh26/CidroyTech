<template>
  <v-card class="ma-4">
    <!-- Header Slot -->
    <v-card-title class="text-primary" >
      <h1><slot name="header"></slot></h1>
    </v-card-title>

    <!-- Main Content Slot -->
    <v-card-text>
      <slot>Default Content</slot>
    </v-card-text>

    <!-- Footer Slot -->
    <v-card-actions >
      <slot name="footer">
        <v-btn text color="primary">Default Footer</v-btn>
      </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardLayout",
};
</script>
