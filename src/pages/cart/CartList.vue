<template>
  <section>
    <h2>Twój koszyk</h2>
    <h3>Wartość koszyka: <base-badge mode="elegant">{{ cartTotal }} zł</base-badge></h3>
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :id="item.productId"
        :title="item.title"
        :image="item.image"
        :qty="item.qty"
        :price="item.price"
      ></cart-item>
    </ul>
  </section>
</template>
<script>
import CartItem from "../../components/cart/CartItem.vue";

export default {
  components: { CartItem },
  computed: {
    cartItems() {
      return this.$store.getters["cart/productsInCart"];
    },
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 32px 200px 32px 200px;
  padding: 0;
}

h2 {
  text-align: center;
  border-bottom: 2px solid #CCC;
  padding-bottom: 16px;
}

h3 {
  text-align: center;
}
</style>
