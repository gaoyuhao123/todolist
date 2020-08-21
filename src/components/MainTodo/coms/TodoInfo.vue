<template>
  <div class="todo-info">
    <span class="item-left">{{childtotal}} item left</span>
    <div class="item-sort">
      <a
        :class="['btn','border','primary',state==item?'actived':'']"
        v-for="(item,index) in states"
        :key="index"
        @click="toggleState(item)"
      >{{item}}</a>
    </div>
    <button class="btn info" @click="ClearCompleted">Clear Completed</button>
  </div>
</template>

<script>
export default {
  name: "TodoInfo",
  props: {
    childtotal: Number,
  },
  data() {
    return {
      states: ["all", "active", "completed"],
      state: "all",
    };
  },
  methods: {
    toggleState(item) {
      this.state = item;
      this.$emit("toggleState", this.state); //state就是item的当前值
    },
    ClearCompleted() {
      this.$emit("ClearCompleted");
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/theme.styl'
@import '~styles/mixins.styl'

.todo-info
  display: flex
  justify-content: space-between
  padding: 5px 10px
  font-weight: 400
  line-height: 40px
  border-top: 1px solid rgba(0, 0, 0, 0.1)

  .item-left
    color: $red

  .item-sort
    display: flex
    justify-content: space-between
    width: 200px

.btn.border.primary
  primaryBorderBtn()

  &.actived
    primaryBtn()

.btn.info
  infoBtn()
</style>