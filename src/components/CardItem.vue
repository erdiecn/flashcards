<template>
  <div v-on:click="flipCard" class="card">
    <div v-if="this.card.frontflip === true" class="card-content">
      <p class="title">{{ card.front }}</p>
    </div>
    <div v-else id="card-back" class="card-content">
      <p class="subtitle">{{ card.back }}</p>
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
  width: 250px;
  height: 250px;
  left: 0px;
}
</style>
