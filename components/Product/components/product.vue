<template>
    <v-container>
        <!-- <v-card class="mb-4 elevation-0" outlined>
            <v-card-title class="text-h5">Product Section</v-card-title>
        </v-card> -->
        <v-text-field v-model="search" label="Search by description" variant="outlined" @input="fetchProducts"
            class="mb-2" prepend-inner-icon="mdi-magnify" rounded="xl" />
        <v-data-table :headers="headers" :items="products" :loading="loading" :items-per-page="itemsPerPage"
            :server-items-length="totalItems" :page.sync="page" class="elevation-1">

            <template v-slot:body="{ items }">
                <tr v-for="item in items" :key="item.id" @dblclick="routeToProductPage(`/product/${item.id}`)">
                    <td>{{ item.id }}</td>
                    <td>
                        <v-img :src="item.thumbnail" max-height="50px" max-width="50px" class="rounded" />
                    </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.stock }}</td>
                    <td>{{ item.rating }}</td>
                </tr>
            </template>

            <!-- No Data Slot -->
            <template #no-data>
                <v-alert type="info" border="left" elevation="2">
                    No products found.
                </v-alert>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import EventService from "~/services/EventServices.js";

export default {
    data() {
        return {
            search: "",
            page: 1,
            itemsPerPage: 10,
            totalItems: 0,
            products: [],
            loading: false,
            headers: [
                { title: "ID", value: "id" },
                { title: "Thumbnail", value: "thumbnail" },
                { title: "Title", value: "title" },
                { title: "Price", value: "price" },
                { title: "Stock", value: "stock" },
                { title: "Rating", value: "rating" },
            ],
        };
    },
    methods: {
        routeToProductPage(value) {
            this.$router.push(value) 
        },
        async fetchProducts() {
            this.loading = true;
            const skip = (this.page - 1) * this.itemsPerPage;
            const query = this.search ? `q=${this.search}&` : "";
            const url = `search?${query}skip=${skip}&limit=${this.itemsPerPage}`;

            EventService.GetProduct(url)
                .then((response) => {
                    this.products = response.data.products || [];
                    this.totalItems = response.data.total;
                    this.loading = false;
                })
                .catch((error) => {
                    console.error("Error fetching suggestions:", error);
                    this.loading = false;
                });
        },
    },
    watch: {
        page() {
            this.fetchProducts();
        },
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>
