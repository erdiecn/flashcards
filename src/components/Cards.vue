// Componant to show all the cards in the deck

<template>
  <div class="cards-body">
    <div v-bind:key="card.id" v-for="card in cards">
      <CardItem v-bind:card="card" class="card-item" />
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem";

export default {
  name: "Cards",
  components: {
    CardItem
  },
  props: ["cards"]
};
</script>

<style scoped>
.cards-body {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
}

.card-item {
  margin: 20px 20px;
}
</style> 