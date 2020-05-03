import Vue from 'vue'
import Vuex from 'vuex'
import { Movie } from '../Movie'
import { Director } from '../Director'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      new Movie(0, "Harry Potter and the Philosopher's Stone", 2001, "Harry Potter has been living an ordinary life, constantly abused by his surly and cold aunt and uncle, Vernon and Petunia Dursley and bullied by their spoiled son Dudley since the death of his parents ten years prior. His life changes on the day of his eleventh birthday when he receives a letter of acceptance into Hogwarts School of Witchcraft and Wizardry, delivered by a half-giant named Rubeus Hagrid after previous letters had been destroyed by Vernon and Petunia. Hagrid details Harry's past as the son of James and Lily Potter, who were a wizard and witch respectively, and how they were murdered by the most evil and powerful dark wizard of all time, Lord Voldemort, which resulted in the one-year-old Harry being sent to live with his aunt and uncle. Voldemort was not only unable to kill Harry, but his powers were also destroyed in the attempt, forcing him into exile and sparking Harry's immense fame among the magical community.", "English", new Director("Chris", "Colombus", "American", "10/09/1958"), "Fantasy", "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg", undefined),
      new Movie(1, "Titanic", 1998, "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.", "English", new Director("James", "Cameron", "Canadian", "16/08/1954"), "Drama", "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg", undefined),
      new Movie(2, "The Avengers", 2012, "Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster which is formed by Loki and his team", "English", new Director("Joss", "Whedon", "American", "23/06/1964"), "Action", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg", undefined),
      new Movie(3, "Seven", 1996, "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.", "English", new Director("David", "Fincher", "American", "28/08/1962"), "Crime", "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg", undefined),
      new Movie(4, "One Piece Stampede", 2019, "Pirates from around the world gather at the Pirates Expo to join the hunt for Gol D. Roger's lost treasure.", "Japanese", new Director("Eiichiro", "Oda", "Japanese", "01/01/1975"), "Animation", "https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg", undefined),
      new Movie(5, "The Dark Knight", 2008, "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "English", new Director("Christopher", "Nolan", "English", "30/07/1970"), "Action", "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", undefined),
      new Movie(6, "Inception", 2010, "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", "English", new Director("Christopher", "Nolan", "English", "30/07/1970"), "Action", "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", undefined),
      
    ] 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
