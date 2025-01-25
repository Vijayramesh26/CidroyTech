<!-- pages/task1/[id].vue -->
<template>
    <v-container>
        <v-card v-if="product" class="pa-4">
            <v-carousel>
                <v-carousel-item v-for="image in product.images" :key="image">
                    <v-img :src="image" class="align-center" />
                </v-carousel-item>
            </v-carousel>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.brand }}</v-card-subtitle>
            <v-card-text>
                <p>{{ product.description }}</p>
                <p><strong>Category:</strong> {{ product.category }}</p>
                <p><strong>Price:</strong> ${{ product.price }}</p>
                <p><strong>Rating:</strong></p>
                <v-rating :value="product.rating" readonly class="mb-4" />
                <div>
                    <strong>Reviews:</strong>
                    <div v-for="review in product.reviews" :key="review.id">
                        <p><strong>{{ review.reviewerName }}</strong> ({{ review.reviewerEmail }})</p>
                        <p>Rating: <v-rating :value="review.rating" readonly /></p>
                        <p>{{ review.comment }}</p>
                        <p><em>{{ review.date }}</em></p>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import EventService from "~/services/EventServices.js";

export default {
    data() {
        return {
            product: null,
            loading: true,
        };
    },
    methods: {
        fetch() {
            // const url = `https://dummyjson.com/products/${this.$route.params.id}`;
            EventService.GetProduct(this.$route.params.id)
                .then((response) => {
                    this.product = response.data;
                    this.loading = false;
                })
                .catch((error) => {
                    console.error("Error fetching suggestions:", error);
                    this.loading = false;
                });
        },
    },
    mounted() {
        this.fetch()
    }
};
</script>

<style>
.v-carousel .v-img {
    height: 300px;
}
</style>
