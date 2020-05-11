<template>
  <div class="body">
    <div class="button-card" @click="n--" :disabled="n <= 0">Previous Card</div>
    <div class="card">
      <p v-if="this.frontflip === true" class="title">{{ cards[n].front }}</p>
      <p v-else class="subtitle" id="card-back">{{ cards[n].back }}</p>
      <button v-on:click="flipCard" id="show-answer" class="button">
        Show Answer
      </button>
    </div>
    <div class="button-card" @click="n++" :disabled="n >= cards.length - 1">
      Next Card
    </div>

    <!-- <h1>Hello!</h1> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import cards from "../data/cards";
export default {
  name: "Flashcards",
  data() {
    return {
      n: 0,
      frontflip: true,
      cards
    };
  },
  methods: {
    flipCard() {
      this.frontflip = !this.frontflip;
    }
  }
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  height: 600px;
}

.card {
  width: 50%;
  height: 300px;
  background-color: #f5f4f3;
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
h1 {
  color: white;
}

#show-answer {
  position: absolute;
  bottom: 20px;
  justify-content: center;
}

.button-card {
  color: whitesmoke;
  font-size: 25px;
  padding: 20px;
  margin-top: 100px;
}
</style>
