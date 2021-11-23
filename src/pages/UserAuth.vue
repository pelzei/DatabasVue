<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Oj, det blev fel 🤷🏻‍♂️"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Autentiserar ..."></base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="name">Produktnamn:</label>
          <input type="text" id="name" v-model.trim="name" />
        </div>
        <div class="form-control">
          <label for="shortDescription">Kort beskrivning:</label>
          <input type="text" id="shortDescription" v-model.trim="shortDescription" />
        </div>
        <div class="form-control">
          <label for="longDescription">Lång beskrivning:</label>
          <textarea id="longDescription" v-model.trim="longDescription" />
        </div>
        <div class="form-control">
          <label for="price">Pris:</label>
          <input type="number" id="price" v-model.number="price" />
        </div>
        <div class="form-control">
          <label for="category">Produktkategori:</label>
          <select id="categoryName" v-model="categoryName">
        <option value="1">Nyhetsbrev</option>
        <option value="2">Tidskrift</option>
      </select>
        </div>
        <p v-if="!formIsValid" class="errors">
          Vänligen fyll i formuläret korrekt!
        </p>
        <base-button>Skicka in till databasen</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      shortDescription: "",
      longDescription: "",
      price: null,
      categoryName: null,
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Logga in";
      } else {
        return "Skapa konto";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Skapa konto istället";
      } else {
        return "Logga in istället";
      }
    },
  },
  methods: {
    async submitForm() {
      
      const newProduct = {
        Name: this.name,
        ShortDescription: this.shortDescription,
        LongDescription: this.longDescription,
        Price: this.price,
        CategoryNameId: this.categoryName 
      };

      console.log(newProduct);

      this.$store.dispatch("food/addProduct", newProduct);
        this.$router.replace("/products");
      
      }
    },
    switchAuthMode() {
      if (this.mode === "signup") {
        this.mode = "login";
      } else {
        this.mode = "signup";
      }
    },
    handleError() {
      this.error = null;
    },
  };

</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  background-color: rgba(255, 166, 0, 0.445);
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
