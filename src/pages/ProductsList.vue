<template>
  <section>
    <ul>
      <product-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :short="product.shortDescription"
        :description="product.longDescription"
        :price="product.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters["food/products"];
    },
  },
  methods: {
    loadFoods() {
      this.$store.dispatch("food/loadFoods");
    },
  },
  created() {
    this.loadFoods();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
