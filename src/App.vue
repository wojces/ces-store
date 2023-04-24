<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue'
import TheFooter from './components/nav/TheFooter.vue'

export default {
components: { TheHeader, TheFooter}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}
</style>
