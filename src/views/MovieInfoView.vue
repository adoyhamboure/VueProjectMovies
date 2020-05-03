<template>
  <div class="app">
   <v-app-bar dark>MovieRates</v-app-bar>
  <MovieInfo />
  </div>
</template>

<script>

import MovieInfo from '../components/MovieInfo'

export default {
  name: 'Home',
  components: {
    MovieInfo
  }
}
</script>

<style>
.app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>