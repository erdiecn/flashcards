// import axios from 'axios' for when it is needed

import decks from "../../data/decks";
import cards from "../../data/cards";

const state = {
  decks,
  cards
};

const getters = {
  allCards: state => state.cards,
  allDecks: state => state.decks
};
const actions = {
  addDeck({ commit }, payload) {
    // const response = { title, deactivated: false, id: 5 };

    commit("newDeck", payload);
  },

  deleteDeck({ commit }, id) {
    commit("removeDeck", id);
  }
}; // this is where you make a call to the api

const mutations = {
  newDeck: (state, deck) => state.decks.push(deck),
  removeDeck: (state, id) =>
    (state.decks = state.decks.filter(deck => deck.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
