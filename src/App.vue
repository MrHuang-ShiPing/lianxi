<template>
  <div id="app">
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import {getCategoryList,getBannerList} from './api'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted(){

   this.$store.dispatch('getCategoryList')
   this.$store.dispatch('getBannerList')
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
