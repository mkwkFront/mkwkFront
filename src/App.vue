<template>
  <div>
    <img id="logo" src="./assets/logo.png">
  

    <div id="nav">
      <router-link to="/mainpage">메인페이지로</router-link>
    </div>
    <router-view />
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  background-color: lightgrey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
