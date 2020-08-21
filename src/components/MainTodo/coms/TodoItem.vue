<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{todo.content}}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  methods: {
    delItem() {
      this.$emit("del", this.todo.id); //相当于父组件中的items[index].id
    },
  },
  created() {},
};
</script>

<style lang="stylus" scoped>
@import '~styles/theme.styl'
@import '~styles/mixins.styl'

&.completed
  label
    color: #d9d9d9
    text-decoration: line-through

.todo-item
  display: flex
  justify-content: space-between // 所有元素间隔相等，两边对齐边界
  padding: 10px
  font-size: 24px
  border-top: 1px solid rgba(0, 0, 0, 0.1)

  &:hover
    button:after
      content: 'X'
      font-size: 28px
      color: $lightred

input
  width: 50px
  height: 30px
  CleanDefaultStyle()
  text-align: center

  &:after
    content: url('~images/unchecked.svg')

  &:checked
    content: url('~images/checked.svg')

label
  flex: 1 // 填充内容区，需与display：flex结合使用。
  transition: color 0.4s // 为添加下划线的动画增加时间

button
  width: 40px
  background-color: transparent
  CleanDefaultStyle()
  cursor: pointer // 光标为小手指
</style>