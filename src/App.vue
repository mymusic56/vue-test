<template>
  <div id="app">
    <!--<Test msg="This Test.vue template"></Test>-->
    <!--<hr/>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <p>
      <router-link to="/gohome">默认首页</router-link>&nbsp;
      <router-link to="/gotest">Test页面</router-link>&nbsp;
      <router-link to="/user/24">/user/24</router-link>&nbsp;
      <router-link to="/user/24/show">/user/24/show</router-link>&nbsp;
      <router-link to="/user/24/posts">/user/24/posts</router-link>&nbsp;
    </p>

    <router-view></router-view>
  </div>
</template>

<script>


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
