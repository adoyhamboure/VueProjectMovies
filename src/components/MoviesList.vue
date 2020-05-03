<template>
  <div class="background">
    <v-text-field class="searchBar" placeholder="Search by title, director's name, genre, language" v-model="search" outlined></v-text-field>
    <div class="list">
      <div class="movie" v-for="(movie) of moviesFiltered" v-bind:key="movie.id">
        <v-card dark>
          <div class="infoBtn">
            <router-link :to="{path: '/movie/' + movie.id}" class="nav-link"><v-btn outlined><i class="small material-icons"> info </i></v-btn></router-link>
          </div>
          <div class="img">
            <img :src="movie.posterURL" alt="">
          </div>
          <v-card-title>{{movie.title}}</v-card-title>
          <v-card-subtitle>by {{movie.director.firstName}} {{movie.director.lastName}}</v-card-subtitle>
          <div v-if="movie.notation != undefined">
            <v-card-title> {{movie.notation}} / 5</v-card-title>
          </div>
        </v-card>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'movieslist',
    props: [],
 data() {
    return {
      movies: this.$store.state.movies,
      search: ''
    }
  },
  computed: {
    moviesFiltered: function() {
      if(this.search == ''){
        return this.movies
      }else{
        return this.movies.filter(m => m.title.toLowerCase().includes(this.search.toLowerCase()) 
                                    || m.genre.toLowerCase().includes(this.search.toLowerCase())
                                    || m.language.toLowerCase().includes(this.search.toLowerCase())
                                    || m.director.firstName.toLowerCase().includes(this.search.toLowerCase())
                                    || m.director.lastName.toLowerCase().includes(this.search.toLowerCase()))
      } 
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style>
  .searchBar{
    margin-top: 20px !important;
    width: 30%;
  }
  .list{
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;

  }
  .movie{
    text-align: start !important;
    margin: 10px;
    width: 30%;
  }

  .infoBtn{
    text-align: end !important;
  }

  .v-btn{
    margin: 2px;
    transition: 1s;
  }

  .v-btn:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }

  .img{
    text-align: center !important;
  }

  .img > img{
    margin: 10px;
    height: 400px;
    min-height: 400px;
    max-height: 400px;
  }

  a{
    text-decoration: none !important;
  }
</style>