
let app = new Vue({
  el: '#app',
  data: {
    cards: {},
    loaded: false,
  },

  methods: {
    generateHand() {
      this.loaded = false;
      axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=5")
        .then(response => {
          console.log(response)
          this.cards = response.data.cards;
          this.loaded = true;
          return true;
        })
        .catch(error => {
          
        });
    },
   
  },
  computed: {
    
  },
  watch: {

  },
});