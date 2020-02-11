<template>
  <div>
    <h5 class="header">Choose Clients</h5>
    <v-select
      v-model="selected"
      :items="clients"
      label="Select Client(s)"
      outlined
      multiple
      chips
      style="width: 450px;"
    ></v-select>
    <div class="text-center"><v-btn @click="$store.state.selectionType = 'choose'" color="rgb(74, 144, 226)" class="white--text" x-large width="450px">Update</v-btn></div>
  </div>
</template>

<style>
  .header {
    font-weight: 600;
    font-size: 1.2em;
    color: #444;
    margin-bottom: 30px;
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
