<template>
    <div class="product-card">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }}</p>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    transition: box-shadow 0.3s;
  }
  .product-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .product-name {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .product-description {
    font-size: 0.9rem;
    color: #555;
  }
  .product-price {
    font-size: 1rem;
    color: #333;
    margin: 10px 0;
  }
  .add-to-cart {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .add-to-cart:hover {
    background-color: #0056b3;
  }
  </style>