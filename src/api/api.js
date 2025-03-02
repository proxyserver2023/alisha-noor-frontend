import axios from "axios";

export const productClient = axios.create({
  baseURL: process.env.PRODUCT_BASE_URL || "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const cartClient = axios.create({
  baseURL: process.env.CART_BASE_URL || "http://localhost:5002/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = () => productClient.get("/products");
export const getProductById = (id) => productClient.get(`/products/${id}`);
export const getCart = () => cartClient.get("/cart");
export const addToCart = (product) => cartClient.post("/cart", product);
export const checkout = (cart) => checkoutClient.post("/checkout", cart);
