import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'http://localhost:3001/products';

export default createStore({
  state: {
    products: [],
    newProduct: {
      name: "",
      title: "",
      description: "",
      stock: null,
      buyingPrice: null,
      salePrice: null,
      purchaseQuantity: null,
      productType: "",
    },
    updatedProduct: {
      showUpdate: false,
      updatedId: null,
      updatedName: "",
      updatedTitle: "",
      updatedDescription: "",
      updatedStock: null,
      updatedBuyingPrice: null,
      updatedSalePrice: null,
      updatedPurchaseQuantity: null,
      updatedProductType: "",
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setAddProduct(state, newProduct) {
      state.products.push(newProduct);
    },


    setUpdatedProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },

  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await axios.get(baseURL);
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async addProduct({ commit }, newProduct) {
      try {
        const response = await axios.post(baseURL, newProduct);
        commit('setAddProduct', response.data);
      } catch (error) {
        console.error('Error adding data:', error);
      }
    },
    async updateProduct({ commit }, updatedProduct) {
      try {
        await axios.put(`${baseURL}/${updatedProduct.id}`, updatedProduct);

        commit('setUpdatedProduct', updatedProduct);
      } catch (error) {
        console.error('Error updating data:', error);
      }
    },
    async deleteData({ state, commit }, id) {
      try {
        await axios.delete(`${baseURL}/${id}`);
        commit('setProducts', state.products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    },
  },

});
