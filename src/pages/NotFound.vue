<template>
  <section class="not-found">
    <h2>Page not found</h2>
    <p>
      Nie znaleziono strony. Wróć do
      <router-link to="/"> listy produktów.</router-link>
    </p>
  </section>
</template>

<style scoped>
.not-found {
  display: wrap;
  text-align: center;
  justify-content: center;
}
</style>
