<template>
  <div class="hello">
    <h1>{{ curMsg }}</h1>
    <input type="text" v-model="newMsg">
    <button @click="changeCurMsg">修改</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      curMsg: 123,
      newMsg: undefined
    }
  },
  watch: {
    curMsg(newVal, oldVal) {
      console.info(newVal, oldVal);
    }
  },
  methods: {
    changeCurMsg() {
      if (this.newMsg.indexOf(",") === -1) {
        this.curMsg = this.newMsg;
      } else {
        this.curMsg = this.newMsg.split(",");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
