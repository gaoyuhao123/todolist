<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      @keyup.enter="addTodo"
      v-model="content"
    />
    <todo-item v-for="(item,index) in filterData" :key="index" :todo="item" @del="handleDeleteItem"></todo-item>
    <todo-info
      :childtotal="total"
      @toggleState="handleToggleState"
      @ClearCompleted="handleClearCompleted"
    ></todo-info>
  </div>
</template>

<script>
import TodoItem from "./coms/TodoItem.vue";
import TodoInfo from "./coms/TodoInfo.vue";

let id = 0;

export default {
  name: "MainTodo",
  data() {
    return {
      todoData: [],
      content: "",
      total: 0,
      filter: "all",
    };
  },
  components: {
    TodoItem,
    TodoInfo,
  },
  watch: {
    todoData: {
      deep: true, //监听数组中的属性，false的话只会监听数组，而不会监听内部的变化
      handler() {
        //当数据变化时调用
        this.total = this.todoData.filter(
          (item) => item.completed == false
        ).length;
      },
    },
  },
  methods: {
    addTodo() {
      if (this.content === "") return;
      this.todoData.unshift({
        id: id++, //++的id是上面let的变量，前面的id是数组对象的id属性
        content: this.content,
        completed: false,
      });
      this.content = "";
    },
    handleDeleteItem(id) {
      this.todoData.splice(
        this.todoData.findIndex((item) => item.id === id),
        1
      );
    },
    handleToggleState(state) {
      this.filter = state;
    },
    handleClearCompleted() {
      this.todoData = this.todoData.filter((item) => item.completed == false);
    },
  },
  computed: {
    filterData() {
      switch (this.filter) {
        case "all":
          return this.todoData;
          break;
        case "active":
          return this.todoData.filter((item) => item.completed == false); //注意这里的item是todoData，而todoinfo的item是a标签的states
          break;
        case "completed":
          return this.todoData.filter((item) => item.completed == true);
          break;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.main-todo
  margin: 0 auto
  width: 600px
  background-color: #fff
  box-shadow: 0 0 5px #666

  .add-todo
    font-size: 24px
    font-weight: inherit
    width: 100%
    font-family: inherit
    border: none
    padding: 16px 16px 16px 32px
    box-sizing: border-box // 压缩内容，保持不超过父元素，以免变形
</style>