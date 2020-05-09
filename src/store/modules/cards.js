// import axios from 'axios' for when it is needed

const state = {
  card: [
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
  ]
};

const getters = {
  allCards: state => state.cards
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
