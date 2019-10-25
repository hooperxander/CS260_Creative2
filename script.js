
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
      selectCard(card) {
        this.cards.forEach(function(thisCard) {
          if (card === thisCard) {
          if (thisCard.selected) {
            thisCard.selected = false;
            thisCard.class = "";
          }
          else {
            thisCard.selected = true;
            thisCard.class = "selected";
          }
        }
        })
      }
  },
  computed: {
    
  },
  watch: {

  },
});