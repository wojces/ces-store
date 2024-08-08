<template>
  <div id="page-container">
    <div id="header">
      <TheHeader></TheHeader>
      <div id="content-wrap"><router-view></router-view></div>
    </div>
    <div id="footer"><TheFooter></TheFooter></div>
  </div>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from "./components/nav/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

#page-container {
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 60px; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Footer height */
}
</style>
