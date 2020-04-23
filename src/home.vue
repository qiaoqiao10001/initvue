<template>
  <div>
    {{name}}
    <h2>vue 构建</h2>
    使用webpack搭建开发环境
    <h3>todo: </h3>
    <ul>
      <li>axios拦截器</li>
      <li>cookie记录</li>
      <li>UI组件库初始化</li>
      <li>vuex初始化</li>
      
    </ul>
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