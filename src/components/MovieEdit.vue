<template>

    <div class="edit">
        <div class="title">
            <div class="return"><router-link :to="{path: '/movie/' + id}" class="nav-link"><v-btn raised dark>Return to Movie</v-btn></router-link></div>
            <h1>Edit your movie</h1>
        </div>
        <v-divider></v-divider>
        <div class="text-fields-movie">
            <v-text-field v-model="movies[id].title" placeholder="Title" filled outlined> </v-text-field>
            <v-text-field v-model="movies[id].year" placeholder="Year" filled outlined></v-text-field>
            <v-text-field v-model="movies[id].language" placeholder="Language" filled outlined></v-text-field>
            <v-text-field v-model="movies[id].genre" placeholder="Genre" filled outlined></v-text-field>
        </div>
        <div class="text-fields-director">
            <v-text-field v-model="movies[id].director.firstName" placeholder="Director's First Name" filled outlined></v-text-field>
            <v-text-field v-model="movies[id].director.lastName" placeholder="Director's Last Name" filled outlined></v-text-field>
            <v-text-field v-model="movies[id].director.nationality" placeholder="Director's Nationality" filled outlined></v-text-field>
            <v-text-field v-model="movies[id].director.dateOfBirth" placeholder="Director's DateOfBirth " filled outlined></v-text-field>
        </div>

        <div class="poster">
            <v-text-field class="poster-text-field" v-model="movies[id].posterURL" clearable placeholder="Poster URL" filled outlined></v-text-field>
        </div>

        <div class="notation">
            <v-slider class="notation-select" hint="Notation" min="0" max ="5" v-model="movies[id].notation" placeholder="Notation" thumb-label></v-slider>
        </div>

        <div class="synopsis">
            <v-textarea v-model="movies[id].synopsis" clearable placeholder="Synopsis" filled outlined></v-textarea>
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
        movies: this.$store.state.movies,

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
    .title{
        display: flex;
        flex-direction: column !important;
        justify-content: start;
        text-align: start;
    }
    .edit{
        display: flex;
        flex-direction: column !important;
    }

    .v-text-field{
        margin-left: 20px !important;
    }

    .v-divider{
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .text-fields-movie{
        width: 60%;
        justify-content: center;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .text-fields-director{
        width: 60%;
        justify-content: center;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
    }

    .v-textarea{
        max-width: 50%;
    }

    .notation{
        width: 40%;
        justify-content: center;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
    }

    textarea{
        overflow: hidden !important;
    }

    .synopsis{
        width: 100%;
        justify-content: center;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
    }

    .poster{
        width: 60%;
        justify-content: center;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
    }

</style>