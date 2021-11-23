import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./pages/ProductsList.vue";
import ProductDetail from "./pages/ProductDetail.vue";

import UserAuth from "./pages/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    {
      path: "/products/:id",
      component: ProductDetail,
      props: true,
    },
    { path: "/auth", component: UserAuth },
  ],
});



export default router;
