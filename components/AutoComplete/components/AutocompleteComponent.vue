<template>
  <v-card class="pa-4">
    <v-autocomplete v-model="search" :items="filteredSuggestions" :loading="loading" item-title="title"
      label="Search for a product" @change="handleSelection">
    </v-autocomplete>
    <div v-if="selectedItem" class="mt-2">
      <strong>Selected Item:</strong> {{ selectedItem }}
    </div>
  </v-card>
</template>
<script>
import EventService from "~/services/EventServices.js";
import { useAutocompleteStore } from "@/store/autocomplete";

export default {
  name: "AutocompleteComponent",
  data() {
    return {
      search: "",
      suggestions: [],
      loading: false,
      debouncedSearch: null,
      store:null
    };
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions;
    },
    selectedItem() {
      this.handleSelection(this.store.selectedItem)
      return this.store.selectedItem;
    },
  },
  methods: {
    async fetchSuggestions(query) {
      if (!query) {
        this.suggestions = [];
        return;
      }

      this.loading = true; 
      EventService.GetAutoComVal(query)
        .then((response) => {
          this.suggestions = response.data.products;
          this.loading = false;
        })
        .catch((error) => {
          
          this.loading = false;
        });

    },
    handleSelection(item) {
      this.store.setSelectedItem(item);
    },
  },
  watch: {
    search(value) {
      
      if (this.debouncedSearch) clearTimeout(this.debouncedSearch);
      this.debouncedSearch = setTimeout(() => { 
        this.handleSelection(value)
      }, 300); // Debouncing API calls
    },
    store(){
      
      this.search = this.store.selectedItem;
      
    },
  },
  created() { 
    this.store = useAutocompleteStore();  
    this.fetchSuggestions("phone")
  },
};
</script>

 
