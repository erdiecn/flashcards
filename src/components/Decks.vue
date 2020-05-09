<template>
  <div class="deck-body">
    <div v-bind:key="deck.id" v-for="deck in decks">
      <DeckItem
        v-bind:deck="deck"
        class="deck-item"
        v-on:delete-deck="$emit('delete-deck', deck.id)"
      />
    </div>
    <div class="add-deck" aria-label="Add New Deck" v-on:click="openModal">Add Icon</div>
    <DeckForm v-on:add-deck="$emit('add-deck', newDeck)" ref="DeckForm
      "></DeckForm>
  </div>
</template>

<script>
import DeckItem from "./DeckItem";
import DeckForm from "./DeckForm";

export default {
  name: "Decks",
  components: {
    DeckItem,
    DeckForm
  },
  props: ["decks"],
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
  /* background-color: black; */
}

.deck-item {
  margin: 20px 20px;
}

.add-deck {
  width: 250px;
  height: 350px;
  background-color: #f5f4f3;
  position: relative;
  margin: 20px 20px;
}
</style>
