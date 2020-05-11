<template>
  <div class="deck" v-bind:class="{ 'is-deactivated': deck.deactivated }">
    <router-link :to="'cards'">
      <div class="deck-image">{{ deck.image }}</div>
    </router-link>
    <button class="button" v-on:click="activateMenu" aria-label="menu button">
      Menu
    </button>
    <h1>{{ deck.title }}</h1>
    <div v-on:click="activateMenu" v-if="menuActive === true" class="menu">
      <ul class="menu-list">
        <li v-if="this.deck.deactivated === false">
          <a v-on:click="deactivateDeck">Deactivate Deck</a>
        </li>
        <li v-if="this.deck.deactivated === true">
          <a v-on:click="deactivateDeck">Activate Deck</a>
        </li>

        <li>
          <a>Edit Deck</a>
        </li>
        <li>
          <a class="delete-deck" @click="deleteDeck(deck.id)">Delete Deck</a>
          <!-- emits are a way to reach data further up the tree, check the Vue dev tools to look at the event going back up -->
        </li>
        <!-- <li>
          <a>Deactivate All Decks</a>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeckItem",
  props: ["deck"], // props move down
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    ...mapActions(["deleteDeck"]),
    activateMenu(event) {
      event.preventDefault;
      this.menuActive = !this.menuActive;
      console.log("is this working?");
    },
    deactivateDeck(event) {
      event.preventDefault;
      this.deck.deactivated = !this.deck.deactivated;
    }
  }
};
</script>

<style scoped>
.deck {
  width: 250px;
  height: 350px;
  background-color: #f5f4f3;
  position: relative;
}

.is-deactivated {
  filter: blur(1px) grayscale(20%);
}

.button {
  /* background-color: blueviolet; */
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
}

h1 {
  position: absolute;
  bottom: 0px;
  text-align: center;
  width: 100%;
  background-color: rgb(214, 210, 196, 0.4);
  color: whitesmoke;
  font-size: 22px;
}

.menu {
  /* This needs to be media queried for small screens, the menu needs to move */
  background-color: white;
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 99;
  width: 80%;
  box-shadow: 2px 2px 8px #888888;
}
li {
  padding: 8px 0;
  font-size: 20px;
  border-bottom: grey;
}

.deck-image {
  background-image: url("../assets/k-intro.png");
  height: 100%;
}
</style>
