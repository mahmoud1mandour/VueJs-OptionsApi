<template>
  <div class="about-page">
    <div class="card" style="max-width: 600px">
      <div class="card-body">
        <h1 class="my-4 text-primary">About</h1>
        <h3 class="display-4">ShopEase</h3>
        <h5>Your Ultimate Online Shopping Destination</h5>
        <p class="lead">
          ShopEase is your go-to e-commerce platform that brings a wide range of
          high-quality products to your doorstep. Our mission is to offer
          exceptional customer service, a seamless shopping experience, and the
          best deals available. From fashion to electronics, we have everything
          you need. With fast delivery and secure payments, ShopEase is here to
          make your shopping easier and more enjoyable.
        </p>
        <router-link class="btn btn-primary btn-lg mt-4" to="/products"
          >Products</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import productRequests from "../../../public/Mixins/productRequests";
export default {
  name: "AboutPage",
  mixins: [productRequests],
};
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 8vh);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  background: url("../../assets/cart.jpg") no-repeat center center fixed;
  background-size: cover;
  position: relative;
}

.about-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.card {
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  margin-right: 50px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
}

h3 {
  font-size: 3rem;
  font-weight: 600;
  color: #333;
}

h5 {
  font-size: 1.5rem;
  color: #666;
}

p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-top: 20px;
}

.btn {
  font-size: 1.2rem;
  padding: 10px 30px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
