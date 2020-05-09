<template>
  <div id="app">
    <CardItem />
    <Cards v-bind:cards="cards" />
    <Decks v-bind:decks="decks" v-on:delete-deck="deleteDeck" v-on:add-deck="addDeck" />
  </div>
</template>

<script>
import Cards from "./components/Cards";
import Decks from "./components/Decks";
import CardItem from "./components/CardItem";

export default {
  name: "App",
  components: {
    Cards,
    Decks,
    CardItem
  },
  // replace this with axioxs calls when an api is setup, this will stay like this for
  data() {
    return {
      cards: [
        {
          id: 1,
          front: "this is the front 1",
          back: "This is the back 1",
          mastered: false,
          frontflip: true
        },
        {
          id: 2,
          front: "this is the front 2",
          back: "This is the back 2",
          mastered: false,
          frontflip: true
        },
        {
          id: 3,
          front: "this is the front 3",
          back: "This is the back 3",
          mastered: false,
          frontflip: false
        }
      ],
      decks: [
        {
          id: 1,
          title: "Anatomy Introduction",
          deactivated: false,
          image: "../assets/a-intro.png"
        },
        {
          id: 2,
          title: "Kinesiology Introduction",
          deactivated: false,
          image: "../assets/k-intro.png"
        },
        {
          id: 3,
          title: "Wrist and Hand",
          deactivated: false,
          image: "../assets/k-intro.png"
        }
      ]
    };
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

<style>
@import "./index.css";
</style>
