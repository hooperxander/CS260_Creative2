
let app = new Vue({
  el: '#app',
  data: {
    cards: {},
    deck_id: '',
    loaded: false,
  },

  methods: {
    generateHand() {
      this.loaded = false;
      axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=5")
        .then(response => {
          console.log(response)
          this.cards = response.data.cards;
          this.deck_id = response.data.deck_id;
          this.cards.forEach(function(card) {
              card.selected = false;
              card.class = "";
          })
          this.loaded = true;
          return true;
        })
        .catch(error => {
          
        });
    },
    replaceSelected() {
      this.loaded = false;
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].selected) {
          axios.get("https://deckofcardsapi.com/api/deck/" + this.deck_id + "/draw/?count=1")
            .then(response => {
              this.cards[i] = response.data.cards[0];
            });
        }
      }
    },
  },
  computed: {
    
  },
  watch: {

  },
});