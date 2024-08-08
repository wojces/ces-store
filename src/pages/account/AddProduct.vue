<template>
  <div>
    <base-card>
      <form @submit.prevent="addProd">
        <h3>Dodaj produkt</h3>
        <div class="product-image">
          <label for="image">Image</label>
          <input type="url" id="image" v-model.trim="enteredImage"/>
        </div>
        <div class="product-title">
          <label for="title">Title</label>
          <input type="text" id="title" v-model.trim="enteredTitle" />
        </div>
        <div class="product-price">
          <label for="description">Description</label>
          <input type="text" id="description" v-model.trim="enteredDescription" />
        </div>
        <div class="product-price">
          <label for="price">Price</label>
          <input type="number" id="price" v-model.trim="enteredPrice" />
        </div>
        
        <base-button type="submit">Dodaj produkt</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  methods: {
    addProd() {
      this.$store.commit["prods/addProd"];
    },
    submitForm() {
      this.$store.commit["prods/submitForm"]
    }
  },
  computed: {
    enteredImage: {
      get() {
        return this.$store.state["prods/newProduct.image"];
      },
      set(value) {
        this.$store.commit("prods/enteredImage", value);
      },
    },
    enteredTitle: {
      get() {
        return this.$store.state["prods/newProduct.title"];
      },
      set(value) {
        this.$store.commit("prods/enteredTitle", value);
      },
    },
    enteredDescription: {
      get() {
        return this.$store.state["prods/newProduct.description"];
      },
      set(value) {
        this.$store.commit("prods/enteredDescription", value);
      },
    },
    enteredPrice: {
      get() {
        return this.$store.state["prods/newProduct.price"];
      },
      set(value) {
        this.$store.commit("prods/enteredPrice", value);
      },
    },
  },
};
</script>

<style scoped>
form {
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image,
.product-title,
.product-price,
.product-description {
  margin: 8px 0;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}
input,
textarea {
  display: block;
  width: 600px;
  border: 1px solid #ccc;
  padding: 2.5px;
}

input:focus,
textarea:focus {
  border-color: #009eca;
  background-color: #faf6ff;
  outline: none;
}

button {
  margin-top: 16px;
  scale: 1.2;
}
</style>
