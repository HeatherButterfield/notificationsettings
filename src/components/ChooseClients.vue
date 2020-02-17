<template>
  <v-container>
    <h5 class="header-section">Option 1: Choose specific clients</h5>
    <v-select
      v-model="selected"
      :items="names"
      :item-text="text"
      :item-value="value"
      label="Select Client(s)"
      outlined
      multiple
      chips
      style="width: 100%;"
    ></v-select>
    <div class="text-center"><v-btn @click="setSelected" color="#acd13a" class="white--text" x-large style="width: 300px;">Update</v-btn></div>
  </v-container>
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
import clients from '../assets/clients.json';

export default {
  name: "Choose",
  components: {

  },
  data: () => ({
    selected: [],
  }),
  methods: {
    getClients() {
      clients.forEach(function(client) {
        console.log(client['Full Name']);
        this.clientNames.push(client['Full Name']);
      });
    },
    setSelected() {
      clients.map((client) => {
        if (this.selected.includes(client['Household ID'])) {
          this.$store.state.currentSelection.push(client['Full Name']);
          this.$store.state.selectedIds.push(client['Household ID']);
        }
      });
    }
  },
  computed: {
    names() {
      let clientNames = [];
      clients.map((client) => {
        clientNames.push({
          text: client['Full Name'],
          value: client['Household ID'],
        });
      });
      return clientNames;
    },
  }
};
</script>
