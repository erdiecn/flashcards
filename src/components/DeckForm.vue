<template>
  <div>
    <form v-if="showModal" class="modal is-active" v-on:submit="addDeck">
      <div class="modal-background" v-on:click="hide"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Your Own Deck</p>
          <button class="delete" aria-label="close" v-on:click="hide"></button>
        </header>
        <section class="modal-card-body">
          <div class="content"></div>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <textarea
                class="input"
                placeholder="Module Title"
                v-model="title"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Add .csv file</label>
            <div class="control">
              <textarea
                class="input"
                placeholder="Click browse to add .csv file"
                v-model="csv"
              ></textarea>
              <button class="button">Browse</button>
            </div>
          </div>
          <!-- <div class="field">
            <label class="label">Add Cover Image</label>
            <div class="control">
              <textarea
                class="input"
                placeholder="Click browse to add image file"
                v-model="img"
              ></textarea>
              <button class="button small">Browse</button>
            </div>
          </div> -->

          <div class="control">
            <input class="button" type="submit" value="Submit" />
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"; ///don't need this when using backend database

export default {
  name: "DeckForm",
  data() {
    return {
      showModal: false,
      title: "",
      csv: "",
      img: ""
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    addDeck(event) {
      event.preventDefault();
      const newdeck = {
        id: uuidv4(),
        title: this.title,
        csv: this.csv,
        deactivated: false
      };
      // send this the the parent, use emit
      this.$emit("add-deck", this.newdeck);
      console.log(newdeck);
      // newDeck is being created, why isn't it being emitted when it just worked???????
    }
  }
};
</script>
