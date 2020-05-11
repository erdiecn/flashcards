<template>
  <div>
    <form v-if="showModal" class="modal is-active" v-on:submit.prevent="onSubmit">
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
              <textarea class="input" placeholder="Module Title" v-model="deckForm.title"></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Add .csv file</label>
            <div class="control">
              <textarea
                class="input"
                placeholder="Click browse to add .csv file"
                v-model="deckForm.csv"
              ></textarea>
              <button class="button is-info is-light is-small">Browse</button>
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
          </div>-->

          <div class="buttons has-addons is-right">
            <input class="button is-info" type="submit" value="Submit" />
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid"; ///don't need this when using backend database
import { mapActions } from "vuex";

export default {
  name: "DeckForm",
  data() {
    return {
      showModal: false,
      deckForm: {
        title: "",
        csv: ""
      }
    };
  },
  methods: {
    ...mapActions(["addDeck"]),
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },

    onSubmit() {
      const { title, csv } = this.deckForm;
      const payload = {
        title,
        csv,
        deactivated: false
      };
      this.addDeck(payload);

      this.deckForm = {
        title: "",
        csv: ""
      };
      this.showModal = false;
    }
  }
};
</script>
