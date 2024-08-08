<template>
  <div>
    <base-card>
      <div class="page-title">
        <h3>Wybierz produkt do edycji</h3>
      </div>
      <div class="list">
        <ul>
          <li
            v-for="prod in products"
            :key="prod.id"
            :id="prod.id"
            :title="prod.title"
            :price="prod.price"
            :image="prod.image"
            :description="prod.description"
          >
            <div class="product-image">
              <img :src="prod.image" :alt="title" />
            </div>
            <div class="prod-title">{{ prod.title }}</div>
            <div class="price">{{ prod.price }} zł</div>
            <base-button @click="selectToEdit(prod.id)">Edytuj</base-button>
          </li>
        </ul>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  methods: {
    selectToEdit(prodId) {
      this.$store.commit("prods/selectToEdit", prodId)
      this.$router.push('/edit_product/' + prodId)
    }
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
};
</script>

<style scoped>
.page-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 16px;
  padding: 16px;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #474747;
  margin: 2px 35px 2px 0;
}

.product-image img {
  height: 20px;
  width: 20px;
  object-fit: contain;
  margin: 2px;
}
</style>
