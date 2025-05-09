import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { createWebHistory, createRouter } from "vue-router";

// lazy loading

const routes = [
  {
    path: "/",
    component: () => import("./components/Pages/Home.vue"),
  },
  {
    path: "/products",
    component: () => import("./components/Pages/Products.vue"),
  },
  {
    path: "/addproduct",
    component: () => import("./components/Pages/AddEditProduct.vue"),
  },
  {
    path: "/addproduct/:id",
    component: () => import("./components/Pages/AddEditProduct.vue"),
  },
  {
    path: "/products/:id",
    component: () => import("./components/Pages/ProductDetails.vue"),
  },
  {
    path: "/:NotFound(.*)*",
    component: () => import("./components/Pages/Error.vue"),
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

// normal loading

// import { createApp } from "vue";
// import App from "./App.vue";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import { createWebHistory, createRouter } from "vue-router";

// import Home from "./components/Pages/Home.vue";
// import Products from "./components/Pages/Products.vue";
// import AddEditProduct from "./components/Pages/AddEditProduct.vue";
// import ProductDetails from "./components/Pages/ProductDetails.vue";
// import Error from "./components/Pages/Error.vue";

// const routes = [
//   {
//     path: "/",
//     component: Home,
//   },
//   {
//     path: "/products",
//     component: Products,
//   },
//   {
//     path: "/addproduct",
//     component: AddEditProduct,
//   },
//   {
//     path: "/addproduct/:id",
//     component: AddEditProduct,
//   },
//   {
//     path: "/products/:id",
//     component: ProductDetails,
//   },
//   {
//     path: "/:NotFound(.*)*",
//     component: Error,
//     meta: { hideNavbar: true },
//   },
// ];
// const router = createRouter({ history: createWebHistory(), routes });

// createApp(App).use(router).mount("#app");
