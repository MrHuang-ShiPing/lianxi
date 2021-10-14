<template>
  <div id="app">
    <Huang msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Huang from './components/Huang.vue'

export default {
  name: 'App',
  components: {
    Huang
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
