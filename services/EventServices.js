import axios from "axios";

const baseApiClient = axios.create({
    // baseURL: "http://novotestapi.flattrade.in:29091",
    // baseURL: "https://novoapi.flattrade.in",
    // baseURL: "http://localhost:29092",
    baseURL: "https://dummyjson.com",
    // baseURL: "http://novouat2.flattrade.in:27011",
    withCredentials: false, //this is default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});


export default {
    GetAutoComVal(body) {
        return baseApiClient.get(`/products/search?q=${body}&limit=5`);
    },
    GetECommerceData() {
        return baseApiClient.get(`/products?skip=0&limit=20`);
    },
    GetProduct(body) {
        return baseApiClient.get(`/products/${body}`);
    },

    GetProductList(body) {
        return baseApiClient.get(`/products/${body}`);
    }
}