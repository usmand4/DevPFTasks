<template>
    
  <div>
      <h1>Products</h1>
      <button type="button" class="del-btn" @click="deleteSelectedRows">Delete Selected Rows</button>
      <table class="data-table">
          <thead>
              <tr>
                  <th>Select</th>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Product Title</th>
                  <th>Product Description</th>
                  <th>Product Stock</th>
                  <th>Buying Price</th>
                  <th>Sale Price</th>
                  <th>Purchase Quantity</th>
                  <th>Product Type</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="product in products" :key="product.id">
                  <td><input type="checkbox" v-model="selectedRows" :value="product.id" /></td>
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.title }}</td>
                  <td>{{ product.description }}</td>
                  <td>{{ product.stock }}</td>
                  <td>${{ product.buyingPrice }}</td>
                  <td>${{ product.salePrice }}</td>
                  <td>{{ product.purchaseQuantity }}</td>
                  <td>{{ product.productType }}</td>
                  <td>
                      <button type="button" class="update-button" @click="showUpdateForm(product)">Update</button>
                      <button type="button" class="delete-button" @click="deleteData(product.id)">Delete</button>
                  </td>
              </tr>
          </tbody>
      </table>
      <div class="updated-div" v-if="showUpdate">
          <input type="text" v-model="updatedName" placeholder="Enter Updated Name" />
          <input type="text" v-model="updatedTitle" placeholder="Enter Updated Title" />
          <input type="text" v-model="updatedDescription" placeholder="Enter Updated Description" />
          <input type="text" v-model="updatedStock" placeholder="Enter Updated Stock" />
          <input type="text" v-model="updatedBuyingPrice" placeholder="Enter Updated Buying Price" />
          <input type="text" v-model="updatedSalePrice" placeholder="Enter Updated Sale Price" />
          <input type="text" v-model="updatedPurchaseQuantity" placeholder="Enter Updated Purchase Quantity" />
          <input type="text" v-model="updatedProductType" placeholder="Enter Updated Product Type" />
          <button class="update-button" type="button" @click="updateProduct">Update Product</button>
          <button class="cancel-button" type="button" @click="cancelData">Cancel</button>
      </div>
      <div class="add-div">
          <input type="text" v-model="name" placeholder="Enter Product Name" />
          <input type="text" v-model="title" placeholder="Enter Product Title" />
          <input type="text" v-model="description" placeholder="Enter Product Description" />
          <input type="text" v-model="stock" placeholder="Enter Product Stock" />
          <input type="text" v-model="buyingPrice" placeholder="Enter Buying Price" />
          <input type="text" v-model="salePrice" placeholder="Enter Sale Price" />
          <input type="text" v-model="purchaseQuantity" placeholder="Enter Purchase Quantity" />
          <input type="text" v-model="productType" placeholder="Enter Product Type" />
          <button class="add-button" type="button" @click="addProduct">Add Product</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TableList',
  data() {
      return {
          name: "",
          title: "",
          description: "",
          stock: null,
          buyingPrice: null,
          salePrice: null,
          purchaseQuantity: null,
          productType: "",
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
          selectedRows: [],
      };
  },
  async created() {

      this.fetchData();
  },
  computed: {
      products() {
          return this.$store.state.products;
      },
  },
  methods: {
      fetchData() {
          this.$store.dispatch('fetchData');
      },
      isValidProduct(product) {
          return (
              product.name.trim() !== '' &&
              product.title.trim() !== '' &&
              product.description.trim() !== '' &&
              !isNaN(product.stock) &&
              !isNaN(product.buyingPrice) &&
              !isNaN(product.salePrice) &&
              !isNaN(product.purchaseQuantity) &&
              product.productType.trim() !== ''
          );
      },
      addProduct() {
          const newProduct = {
              name: this.name,
              title: this.title,
              description: this.description,
              stock: this.stock,
              buyingPrice: this.buyingPrice,
              salePrice: this.salePrice,
              purchaseQuantity: this.purchaseQuantity,
              productType: this.productType,
          };

          if (this.isValidProduct(newProduct)) {
              this.$store.dispatch('addProduct', newProduct);
              this.resetForm();
          } else {
              console.error('Invalid product data. Please fill in all required fields with valid values.');
          }
      },
      updateProduct() {
          const updatedProduct = {
              id: this.updatedId,
              name: this.updatedName,
              title: this.updatedTitle,
              description: this.updatedDescription,
              stock: this.updatedStock,
              buyingPrice: this.updatedBuyingPrice,
              salePrice: this.updatedSalePrice,
              purchaseQuantity: this.updatedPurchaseQuantity,
              productType: this.updatedProductType,
          };

          if (this.isValidProduct(updatedProduct)) {
              this.$store.dispatch('updateProduct', updatedProduct);
              this.resetUpdateForm();
          } else {
              console.error('Invalid updated product data. Please fill in all required fields with valid values.');
          }

          this.showUpdate = false;
      },
      resetForm() {
          this.name = '';
          this.title = '';
          this.description = '';
          this.stock = null;
          this.buyingPrice = null;
          this.salePrice = null;
          this.purchaseQuantity = null;
          this.productType = '';
      },
      resetUpdateForm() {
          this.showUpdate = false;
          this.updatedId = null;
          this.updatedName = '';
          this.updatedTitle = '';
          this.updatedDescription = '';
          this.updatedStock = null;
          this.updatedBuyingPrice = null;
          this.updatedSalePrice = null;
          this.updatedPurchaseQuantity = null;
          this.updatedProductType = '';
      },

      showUpdateForm(product) {
          this.showUpdate = true;
          this.updatedId = product.id;
          this.updatedName = product.name;
          this.updatedTitle = product.title;
          this.updatedDescription = product.description;
          this.updatedStock = product.stock;
          this.updatedBuyingPrice = product.buyingPrice;
          this.updatedSalePrice = product.salePrice;
          this.updatedPurchaseQuantity = product.purchaseQuantity;
          this.updatedProductType = product.productType;
      },
      cancelData() {
          this.showUpdate = false;
          this.updatedId = null;
          this.updatedName = "";
          this.updatedTitle = "";
          this.updatedDescription = "";
          this.updatedStock = null;
          this.updatedBuyingPrice = null;
          this.updatedSalePrice = null;
          this.updatedPurchaseQuantity = null;
          this.updatedProductType = "";
      },
      deleteData(id) {
          this.$store.dispatch('deleteData', id);
      },
      deleteSelectedRows() {
          if (this.selectedRows.length === 0) {
              console.warn('No rows selected for deletion.');
              return;
          }

          if (confirm('Are you sure you want to delete the selected rows?')) {
              this.selectedRows.forEach((id) => {
                  this.$store.dispatch('deleteData', id);
              });
              this.selectedRows = [];
          }
      },
  },
};
</script>
