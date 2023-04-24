<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  font-family: "Jost", sans-serif;
  font-weight: 700;
  cursor: pointer;
  background-color: rgba(96, 113, 248, 0.6);
  border: 1px solid rgba(96, 113, 248, 0.3);
  box-shadow: 2px 2px 4px rgba(96, 113, 248, 0.3);
  border-radius: 30px;
  padding: 6px 18px;
}

button:hover,
button:active {
  background-color: rgba(66, 87, 251, 0.6);
  border-color: rgba(66, 87, 251, 0.3);
}
</style>
