import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: typeof window !== 'undefined' && localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : {},
  }),
  getters: {
    totalQuantity: (state) => Object.values(state.cart).reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => Object.values(state.cart).reduce((sum, item) => sum + item.quantity * item.price, 0),
  },
  actions: {
    addToCart(product) {
      if (this.cart[product.id]) {
        this.cart[product.id].quantity++;
      } else {
        this.cart[product.id] = { ...product, quantity: 1 };
      }
      this.persistCart();
    },
    removeFromCart(productId) {
      if (this.cart[productId]) {
        delete this.cart[productId];
        this.persistCart();
      }
    },
    persistCart() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    },
  },
});
