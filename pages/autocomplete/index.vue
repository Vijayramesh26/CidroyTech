<template>
  <div class="task4-container">
      <AutocompleteComponent />
  </div>
</template>

<script>
import AutocompleteComponent from "../../components/AutoComplete/main.vue";

export default {
  components: { AutocompleteComponent },
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
