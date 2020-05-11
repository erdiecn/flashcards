<template>
  <div class="deck-body">
    <div class="deck-body">
      <div v-bind:key="deck.id" v-for="deck in allDecks">
        <DeckItem
          v-bind:deck="deck"
          class="deck-item"
          v-on:delete-deck="$emit('delete-deck', deck.id)"
        />
      </div>
      <div class="add-deck" aria-label="Add New Deck" v-on:click="openModal">
        <h1>+</h1>
        <h2>Add New Deck</h2>
      </div>
      <DeckForm ref="DeckForm"></DeckForm>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DeckItem from "./DeckItem";
import DeckForm from "./DeckForm";

export default {
  name: "Decks",
  components: {
    DeckItem,
    DeckForm
  },
  computed: mapGetters(["allDecks"]),
  methods: {
    openModal(event) {
      event.preventDefault();
      this.$refs.DeckForm.show();
      // console.log("the modal is clicked");
    } //executing the show method of child
  }
};
</script>

<style scoped>
.deck-body {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 600px;

  /* background-color: black; */
}

.deck-item {
  margin: 20px 20px;
}

.add-deck {
  width: 250px;
  height: 350px;
  background-color: #f5f4f3;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: 25px;
}
h1 {
  font-size: 200px;
}

@media only screen and (max-width: 500px) {
  .deck-body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
  }
}
</style>
