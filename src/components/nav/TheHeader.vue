<template>
  <header>
    <h1>
      <router-link to="/">DatabasProdukter</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Produkter</router-link>
        </li>
        
        <li v-if="isLoggedIn">
          <router-link to="/profil">Din profil</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLoggedIn">
        <router-link to="/auth">Lägg till produkt</router-link>
      </button>
      <button v-if="isLoggedIn" @click="logout">Logga ut</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters["cart/quantity"];
    },
    isLoggedIn() {
      return this.$store.getters["isAuthenticated"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
header {
  height: 5rem;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

h1 {
  font-family: "Berkshire Swash";
  font-size: 2.5rem;
  color: crimson;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
