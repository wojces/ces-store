<template>
  <footer>
    <nav>
      <h3 v-if="isLoggedIn">Dzięki za odwiedziny sklepu</h3>
      <h3 v-if="!isLoggedIn">Odwiedź sklep Window Store</h3>

      <ul>
        <li v-if="isLoggedIn">
          <router-link to="/">Wróć na stronę główną</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: rgba(108, 108, 108, 0.5);
  padding-top: 16px;
}

footer a {
  text-decoration: none;
  color: black;
  padding: 12px 24px;
  border: 1px solid black transparent;
  border-radius: 5px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid none;
}

h3 {
  margin: 0;
  margin-left: 20px;
}

h3 a {
  color: black;
  margin: 0;
}

footer nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 8px;
  font-weight: 700;
}
</style>
