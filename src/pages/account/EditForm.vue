<template>
  <div>
    <base-card>
      <form @submit.prevent="submitForm">
        <h3>Edytuj produkt</h3>
        <div class="product-id">
          <label for="id">Id</label>
          <input type="text" id="id" v-model.trim="productId">
        </div>
        <div class="product-image">
          <label for="image">Image</label>
          <input type="url" id="image" v-model.trim="productImg" />
        </div>
        <div class="product-title">
          <label for="tile">Title</label>
          <input type="text" id="title" v-model.trim="productTitle">
        </div>
        <div class="product-price">
          <label for="description">Description</label>
          <input type="text" id="description" v-model.trim="productDescription">
        </div>
        <div class="product-price">
          <label for="price">Price</label>
          <input type="number" id="price" v-model.trim="productPrice">
        </div>
        <base-button>Zatwierdź zmiany</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ['id','image', 'title', 'description', 'price'],
}

</script>

<style scoped>
form {
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-id,
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
input, textarea {
  display: block;
  width: 600px;
  border: 1px solid #ccc;
  padding: 2.5px;
};

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
