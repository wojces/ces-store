<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight"
          ><h4>{{ price }} zł</h4></base-badge
        >
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product__action">
      <base-button @click="addToCart">Dodaj do koszyka</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "image", "description", "price"],
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", { id: this.id });
    },
  },
};
</script>

<style scoped>
li {
  margin: 24px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 16px;
  max-width: 800px;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 16px;
}

.product__image img {
  height: 160px;
  width: 160px;
  object-fit: contain;
}

.product__text h3 {
  margin: 0 0 8px 0;
}

.product__text h4 {
  margin: 0;
}

.product__action {
  text-align: center;
}
</style>
