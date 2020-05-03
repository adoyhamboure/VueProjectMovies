<template>
  <div class="app">
   <v-app-bar dark>MovieRates</v-app-bar>
  <MovieEdit />
  </div>
</template>

<script>

import MovieEdit from '../components/MovieEdit'

export default {
  name: 'Home',
  components: {
    MovieEdit
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