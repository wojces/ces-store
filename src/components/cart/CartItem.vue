<template>
  <li>
    <div><img :src="image" :alt="title" /></div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item__data">
        <div>
          Cena produktu:
          <strong>{{ price }} zł</strong>
        </div>
        <div class="qty">
          <div><base-button @click="addOne">+</base-button></div>
          <div>
            Ilość:
            <strong>{{ qty }}</strong>
          </div>
          <div><base-button @click="deleteOne">-</base-button></div>
        </div>
      </div>
      <div class="item__total">Razem: {{ itemTotal }} zł</div>
      <base-button @click="remove">Usuń z koszyka</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "image", "price", "qty"],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },
  methods: {
    remove() {
      this.$store.dispatch("cart/removeFromCart", { productId: this.id });
    },
    addOne() {
      this.$store.dispatch("cart/addOneProd", { productId: this.id });
    },
    deleteOne() {
      if (this.qty === 1) {
        this.$store.dispatch("cart/removeFromCart", { productId: this.id });
        return;
      }
      this.$store.dispatch("cart/deleteOneProd", { productId: this.id });
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

img {
  height: 80px;
  width: 80px;
  object-fit: contain;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__data .qty {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.item__total {
  font-weight: bold;
  margin: 16px 0;
  border-top: 1px solid #474747;
  border-bottom: 1px solid #474747;
  padding: 4px;
  width: auto;
}
</style>
