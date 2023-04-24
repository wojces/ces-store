<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Ces's store</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/products">Produkty</router-link>
        </li>
        <li>
          <router-link to="/cart">Koszyk</router-link>
        </li>
        <li>
          <router-link to="/account">Konto</router-link>
        </li>
        <li v-if="isLoggedIn">Wyloguj</li>
        <li v-else>
          <router-link to="/auth">Zaloguj</router-link>
        </li>
      </ul>
    </nav>
  </header>
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
header {
  width: 100%;
  height: 80px;
  background-color: rgba(50, 101, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(50, 101, 225, 0.5);
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid black transparent;
  border-radius: 5px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid none;
  border-radius: 15px;
  background-color: rgba(96, 113, 248, 0.6);
  box-shadow: 2px 2px 4px rgba(96, 113, 248, 0.3);
}

h1 {
  margin: 0;
}

h1 a {
  color: black;
  margin: 0;
}

h1 a:active,
h1 a:hover,
h1 a.router-link-active {
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
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
