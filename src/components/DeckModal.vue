<template>
  <div v-if="showModal" class="modal is-active">
    <div class="modal-background" v-on:click="closeModule"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Your Own Module</p>
        <button class="delete" aria-label="close" v-on:click="closeModule"></button>
      </header>
      <section class="modal-card-body">
        <div class="content"></div>
        <article class="message is-success" v-if="showThanks">
          <div class="message-header">
            <p>Thank you!</p>
            <button class="delete" aria-label="delete" v-on:click="hideThanks()"></button>
          </div>
          <div
            class="message-body"
          >Your module was successfully added! Only you will be able to view and schedule your modules.</div>
        </article>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <textarea class="input" placeholder="Module Title" v-model="title"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" placeholder="Module Description" v-model="description"></textarea>
          </div>
        </div>
        <div class="control">
          <button
            class="button is-link"
            :disabled="description==null || description==''"
            v-on:click="submit()"
          >Submit</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeckModal",
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>