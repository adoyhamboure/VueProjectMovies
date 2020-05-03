<template>
  <div class="app">
   <v-app-bar dark>MovieRates</v-app-bar>
  <MoviesList />
  </div>
</template>

<script>
import MoviesList from '../components/MoviesList'

export default {
  name: 'Home',
  components: {
    MoviesList
  }
}
</script>

<style>
.app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121518 !important;
}
</style>
