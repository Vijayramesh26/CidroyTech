<template>
  <div class="task4-container">
    <h1>Task 4: Synchronized Autocomplete</h1>
    <div  class="d-flex ">
      <AutocompleteComponent width="15%" />
      <div class="px-5"></div>
      <AutocompleteComponent width="15%"/>
    </div>
  </div>
</template>

<script>
import AutocompleteComponent from "./components/AutocompleteComponent.vue";

export default {
  components: { AutocompleteComponent },
};
</script>
 
