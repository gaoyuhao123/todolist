<template>
  <header class="main-header">
    <h1>Todo List</h1>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {};
  },
};
</script>

<style lang="stylus">
@import '~styles/theme.styl'

.main-header
  text-align: center

  h1
    font-size: 100px
    font-weight: 100
    color: $lightred
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1)
</style>