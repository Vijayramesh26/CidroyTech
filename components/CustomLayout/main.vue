<template>
  <div>
    <h1>Task 3: Understanding Slots and Templates</h1>
    <!-- Blog -->
    <CardLayout>
      <template #header>
        <span>The Cidroy Blog</span>
      </template>
      <template>
        <p>
          Our official blog with news, technology advice, and business culture.
        </p>
      </template>
      <template #footer>
        <v-btn text color="primary">Read More</v-btn>
        <v-btn text color="secondary">Share</v-btn>
      </template>
    </CardLayout>

    <!-- User Profile Card -->
    <CardLayout>
      <template #header>
        <span>User Profile: VIJAY RAMESH</span>
      </template>
      <template>
        <p>
          Name: VIJAY RAMESH<br />
          Email: vijayramesh26301@gmail.com<br />
          Location: CHENNAI, INDIA
        </p>
      </template>
      <template #footer>
        <v-btn text color="primary">Edit Profile</v-btn>
        <v-btn text color="secondary">Logout</v-btn>
      </template>
    </CardLayout>
  </div>
</template>

<script>
import CardLayout from "./components/CardLayout.vue";

export default {
  name: "Task3",
  components: {
    CardLayout,
  },
};
</script>
