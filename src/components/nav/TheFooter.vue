<template>
  <footer>
    <nav>
      <h3>
        Dzięki za odwiedziny Ces's store
      </h3>
      <ul>
        <li>
          <router-link to="/">Wróć na stronę główną</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: rgba(108, 108, 108, 0.5);
  display: flex;
  position: fixed;
  bottom: 0;
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
