<template>
  <div id="app">
    <!-- <Flashcards /> -->
    <!-- <Cards /> -->
    <Decks v-on:delete-deck="deleteDeck" />
  </div>
</template>

<script>
// import Cards from "../components/Cards";
import Decks from "../components/Decks";
// import Flashcards from "../components/Flashcard";

export default {
  name: "Home",
  components: {
    Decks
  },
  methods: {
    deleteDeck(id) {
      this.decks = this.decks.filter(deck => deck.id !== id);
    },
    addDeck(newDeck) {
      this.decks = [...this.decks, newDeck];
      console.log("If this works the array is not being updated");
    }
  }
};
</script>
