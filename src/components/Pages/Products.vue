<template>
  <div class="container py-4">
    <h1 class="mb-4 text-primary">Products</h1>
    <table
      class="table table-striped table-bordered table-hover text-center align-middle"
    >
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Image</th>
          <th>Price</th>
          <th colspan="3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td>{{ p.stock }}</td>
          <td>{{ p.category }}</td>
          <td><img :src="p.thumbnail" alt="productPic" width="100" /></td>
          <td>{{ p.price }}</td>
          <td>
            <router-link
              class="btn btn-sm btn-success me-1"
              :to="`/products/${p.id}`"
              >Product Details</router-link
            >
          </td>
          <td>
            <router-link
              class="btn btn-sm btn-warning me-1"
              :to="`/addproduct/${p.id}`"
              >Update Product</router-link
            >
          </td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteOneProduct(p.id)"
            >
              Delete Product
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import productRequests from "../../../public/Mixins/productRequests.js";

export default {
  name: "ProductsPage",
  mixins: [productRequests],
  methods: {},
  created() {
    this.getAllProducts();
  },
};
</script>
<style scoped></style>
