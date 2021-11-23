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

        const response = await axios.post("/api/Products", {
          "Name": payload.Name,
          "ShortDescription": payload.ShortDescription,
          "LongDescription": payload.LongDescription,
          "Price": payload.Price,
          "CategoryNameId": payload.CategoryNameId
        }
        );
  
        console.log(response);
  
        
      },
      
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
