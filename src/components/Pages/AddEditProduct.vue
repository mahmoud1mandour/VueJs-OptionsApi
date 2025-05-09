<template>
  <div class="container">
    <h1 class="my-4 text-primary">{{ id ? "Update" : "Add" }} Product</h1>
    <form action="" @submit.prevent="id ? editOneProduct() : addOneProduct()">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="productTitle"
          placeholder="Product Title"
          v-model="title"
        />
        <label for="productTitle">Title</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="file"
          class="form-control"
          id="productImage"
          accept="image/*"
          disabled
        />
        <label for="productImage">Image</label>
      </div>

      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          id="productDescription"
          placeholder="Product Description"
          style="height: 120px"
          v-model="description"
        ></textarea>
        <label for="productDescription">Description</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="productPrice"
          placeholder="Product Price"
          v-model="price"
        />
        <label for="productPrice">Price</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="productCategory"
          placeholder="Product Category"
          v-model="category"
        />
        <label for="productCategory">Category</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="productStock"
          placeholder="Product Stock"
          v-model="stock"
        />
        <label for="productStock">Stock</label>
      </div>

      <button type="submit" class="btn btn-primary">
        {{ id ? "Update" : "Add" }} Product
      </button>
    </form>
  </div>
</template>

<script>
import productRequests from "../../../public/Mixins/productRequests";
export default {
  name: "AddProduct",
  mixins: [productRequests],
  created() {
    this.getProductID();
    if (this.id) {
      this.getAProduct();
    }
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}

textarea {
  resize: none;
}
</style>
