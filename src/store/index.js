import { createStore } from "vuex";
import foodModule from "./modules/food.js";

export default createStore({
  modules: {
    food: foodModule,

  },
});
