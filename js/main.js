const app = new Vue({
  el: '#app',
  data: {
      newSearch: '',
      results: [],
      baseImgUrl: 'https://image.tmdb.org/t/p/w342',
  },
  methods: {

    goShows() {
      this.results= [];

      axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '257db8af3a1534e6a970905a266ddd57',
            query: this.newSearch,
            language: 'it-IT',
          }
      })
      .then( result => {

          const res = result.data.results;

          this.results= this.results.concat(res);
        })
       .catch(error => {
         console.log(error);
       });

       axios.get('https://api.themoviedb.org/3/search/tv', {
           params: {
             api_key: '257db8af3a1534e6a970905a266ddd57',
             query: this.newSearch,
             language: 'it-IT',
           }
       })
       .then( result => {

           const res = result.data.results;
           this.results= this.results.concat(res);
         })
        .catch(error => {
          console.log(error);
        });
    },



    flagsLanguage(language) {
      if(language == 'it' || language == 'en') {
          return true;
      }
      return false;

    },


    voteUser(vote) {

      return Math.round(vote / 2);
    },


    coverIn(cover) {
      console.log(cover);
      if(cover == null) {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96cmTMf-MEHozzJgYDiX9FyVpv-gezNnm9Q&usqp=CAU';
      }
      return  this.baseImgUrl + cover;
    }

  } //Fine methods
});
