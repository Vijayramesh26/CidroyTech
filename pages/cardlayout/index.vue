<template>
  <div class="task4-container">
    <CardLayout />
  </div>
</template>

<script>
import CardLayout from "../../components/CustomLayout/main.vue";

export default {
  components: { CardLayout },
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
