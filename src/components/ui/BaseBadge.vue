<template>
  <span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['mode', 'noMarginLeft']
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 2.4px 20px;
  background-color: #ccc;
  color: #292929;
  margin: 0 12px;
  border-radius: 30px;
}

.nml {
  margin-left: 0
}

.badge--highlight {
  background-color: rgb(48, 152, 255);
  color: black;
}

.badge--elegant {
  background-color: blue;
  color: white;
}
</style>