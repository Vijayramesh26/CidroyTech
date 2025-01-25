import { defineStore } from "pinia";

export const useAutocompleteStore = defineStore("autocomplete", {
  state: () => ({
    selectedItem: null, // Shared selected item
    selectedItem2:null
  }),
  actions: {
    setSelectedItem(item) {
      this.selectedItem = item;
    },
  },
});
