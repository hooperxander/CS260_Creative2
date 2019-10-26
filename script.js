
let app = new Vue({
  el: '#app',
  data: {
    cards: {},
    deck_id: '',
    loaded: false,
    numCards: 5,
  },

  methods: {
    generateHand() {
      this.loaded = false;
      axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=" + this.numCards)
        .then(response => {
          console.log("hi");
          console.log(response);
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
   
  },
  computed: {

  },
  watch: {

  },
});