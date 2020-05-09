<template>
  <div v-on:click="flipCard" class="card">
    <div class="card-content">
      <p v-if="this.card.frontflip===true" class="title">{{card.front}}</p>
      <p v-else class="subtitle" id="card-back">{{card.back}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["card"],
  methods: {
    flipCard() {
      this.card.frontflip = !this.card.frontflip;
    }
  }
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 250px;
  background-color: #f5f4f3;
}

#card-back {
  background-color: #e0dede;
}
</style>

