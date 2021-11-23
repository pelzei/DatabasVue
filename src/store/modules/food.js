import axios from "@/axios";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async loadFoods(context) {
      const response = await axios.get("api/Products");
      context.commit("setProducts", response.data);
    },
    async addProduct(context, payload) {

        const response = await fetch("https://localhost:44328/api/Products", {
          method: "POST",
          body: {
            "Name": payload.Name,
            "ShortDescription": payload.ShortDescription,
            "LongDescription": payload.LongDescription,
            "Price": payload.Price,
            "CategoryNameId": payload.CategoryNameId
          },
        });
  
        const responseData = await response.json();
  
        if (!response.ok) {
          console.log(responseData);
          const error = new Error(
            responseData.message || "Något gick fel!"
          );
          console.log(error);
          throw error;
        }
  
        
      },
      
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
