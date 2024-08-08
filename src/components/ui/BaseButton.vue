<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  font-family: "Jost", sans-serif;
  font-weight: 700;
  cursor: pointer;
  background-color: rgba(108, 108, 108, 0.5);
  border: none;
  border-radius: 30px;
  padding: 6px 18px;
}

button:hover {
  background-color: rgba(85, 85, 85, 0.5);
}

button:active {
  background-color: rgba(139, 139, 139, 0.5);
}
</style>
