<template>
    <div class="infos">
        <div class="title-section">
            <div id="img">
                <router-link :to="{path: '/'}" class="nav-link return"><v-btn raised dark>Return to list</v-btn></router-link>
                <img :src="movies[id].posterURL" alt="">
            </div>
            <div id="infos">
                <h1>{{movies[id].title}}</h1>
                <p><strong>Released :</strong> {{movies[id].year}}</p>
                <p><strong>Genre :</strong> {{movies[id].genre}}</p>
                <p><strong>Language : </strong> {{movies[id].language}}</p>
                <p><strong>Director : </strong> {{movies[id].director.firstName}} {{movies[id].director.lastName}}, {{movies[id].director.nationality}}, born on {{movies[id].director.dateOfBirth}}</p>
                <p><strong>Synopsis : </strong> {{movies[id].synopsis}}</p>
                <router-link :to="{path: '/movie/' + id + '/edit'}" class="nav-link"><v-btn raised dark>Edit</v-btn></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movieinfo',
    props: [],
 data() {
    return {
        id: this.$route.params.id,
        movies: this.$store.state.movies
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style>
    .return{
        margin-left: 20px;
        margin-top: 10px;
    }
    .infos{
        display: flex;
        justify-content: start;
    }

    .title-section{
        display: flex;
        flex-direction: row;
        text-align: start;    
        flex-wrap: wrap;
    }

    #img{
        display: flex;
        flex-direction: column !important;
        flex-wrap: wrap;
    }

    #infos{
        margin-top: 50px;
        display: flex;
        flex-direction: column !important;
        flex-wrap: wrap;
        max-width: 70%;
    }

    .title-section > #img > img{
        border-radius: 1%;
        max-height: 400px;
        margin: 20px;
    }

    h1{
        margin: 20px;
    }

    p{
        margin: 5px;
    }
</style>