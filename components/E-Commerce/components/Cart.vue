<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn @click="toggleCart" color="primary">Cart ({{ cartStore.totalQuantity }})</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="3">
                <v-card>
                    <v-img :src="product.thumbnail" height="200"></v-img>
                    <v-card-title>{{ product.title }}</v-card-title>
                    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                    <v-card-text>Rating: {{ product.rating }}/5</v-card-text>
                    <v-card-actions>
                        <v-btn color="success" @click="cartStore.addToCart(product)">Add to Cart</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-navigation-drawer v-model="cartVisible" right temporary>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="(item, id) in cartStore.cart" :key="id">
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }} (x{{ item.quantity }})</v-list-item-title>
                            <v-list-item-subtitle>${{ item.price * item.quantity }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn color="error" @click="cartStore.removeFromCart(id)">Remove</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-divider></v-divider>
            <v-row>
                <v-col>Total: ${{ cartStore.totalPrice }}</v-col>
            </v-row>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
import EventService from "~/services/EventServices.js";
import { useCartStore } from '@/store/cart';
 
export default {
    data() {
        return {
            cartVisible: false,
            products: [],
            cartStore: null,
        };
    },
    methods: {
        toggleCart() {
            this.cartVisible = !this.cartVisible;
        },
        async fetchProducts() {
            EventService.GetECommerceData()
                .then((response) => {
                    this.products = response.data.products;
                })
                .catch((error) => {
                    console.error("Error fetching suggestions:", error);
                });
        },
    },
    created() {
        this.cartStore = useCartStore();
        this.fetchProducts();
    },
};
</script>

<style>
/* Optional custom styling */
</style>
