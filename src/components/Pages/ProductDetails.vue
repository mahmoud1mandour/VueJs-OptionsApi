<template>
  <div class="container my-5">
    <h1 class="mb-4 text-primary">Product Details</h1>
    <div
      v-if="product && product.id"
      class="card mx-auto mb-4 shadow-sm"
      style="max-width: 22rem"
    >
      <img :src="product.thumbnail" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text">
          <span class="fw-bold">Price:</span> {{ product.price }} $
        </p>
        <router-link to="/products" class="btn btn-primary w-100"
          >Products</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import productRequests from "../../../public/Mixins/productRequests";
export default {
  name: "ProductDetails",
  methods: {},
  mixins: [productRequests],
  created() {
    this.getProductID();
    this.getAProduct();
  },
};
</script>

<style scoped></style>
