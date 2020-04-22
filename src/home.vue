<template>
  <div>
    {{name}}
    <h2>vue 构建</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "qiao"
    };
  }
};
</script>

<style lang="stylus" scoped>
h2{
  color: #ccc;
}
</style>