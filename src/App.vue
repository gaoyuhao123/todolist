<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
import "./assets/styles/global.styl";

import MainHeader from "./components/MainHeader.vue";
import MainTodo from "./components/MainTodo/MainTodo.vue";

export default {
  name: "App", //组件名称
  data() {
    return {};
  },

  components: {
    MainHeader,
    MainTodo,
  },
  created() {},
};
</script>

<style lang="stylus"></style>