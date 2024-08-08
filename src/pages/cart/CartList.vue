<template>
  <section>
    <h2>Twój koszyk</h2>
    <div class="total">
      <h3>
        Wartość koszyka:
        <base-badge mode="elegant">{{ cartTotal }} zł</base-badge>
      </h3>
      <base-button @click="toOrder">Przejdź do zamówienia</base-button>
    </div>
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"></cart-item>
    </ul>
  </section>
</template>
<script>
import CartItem from "../../components/cart/CartItem.vue";

export default {
  components: { CartItem },
  computed: {
    cartItems() {
      return this.$store.getters["cart/products"];
    },
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
  },
  methods: {
    toOrder() {
      this.$router.push("/order");
    },
  },
};
</script>

<style scoped>
.total {
  display: flex;
  justify-content: center;
  text-align: center;
}

.total button {
  height: 32px;
  margin: 18px 10px 0 10px;
  font-size: large;
  padding: 0 20px;
}

ul {
  list-style: none;
  margin: 32px 200px 32px 200px;
  padding: 0;
}

h2 {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 16px;
}
</style>
