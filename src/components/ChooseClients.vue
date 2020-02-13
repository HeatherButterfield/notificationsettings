<template>
  <div>
    <h5 class="header-section">Option 1: Choose specific clients</h5>
    <v-select
      v-model="selected"
      :items="clients"
      label="Select Client(s)"
      outlined
      multiple
      chips
      style="width: 100%;"
    ></v-select>
    <div class="text-center"><v-btn @click="$store.state.currentSelection = selected" color="rgb(74, 144, 226)" class="white--text" x-large style="width: 300px;">Update</v-btn></div>
  </div>
</template>

<style>
  .header-section {
    font-weight: 600;
    font-size: 1.2em;
    color: #444;
    margin-bottom: 30px;
    margin-top: 40px;
  }
</style>

<script>

export default {
  name: "Choose",
  components: {

  },
  data: () => ({
    selected: null,
    clients: ['Jameson', 'Heather', 'Jaxon', 'Dominic'],
  }),
};
</script>
