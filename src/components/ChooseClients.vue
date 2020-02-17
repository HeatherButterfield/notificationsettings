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
    <div class="text-center"><v-btn @click="setSelected" color="#acd13a" class="white--text" x-large style="width: 300px; color: #394e73;">Update</v-btn></div>
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
import goals from '../assets/goals.json';

export default {
  name: "Choose",
  components: {

  },
  data: () => ({
    selected: [],
    clients: []
  }),
  methods: {
    setSelected() {
      goals.map((client) => {
        if (this.selected.includes(client.HouseholdID) && !this.$store.state.selectedIds.includes(client.HouseholdID)) {
          this.$store.state.currentSelection.push(client.FullName);
          this.$store.state.selectedIds.push(client.HouseholdID);
        }
      });
    }
  },
  computed: {
    names() {
      let clientNames = [];
      goals.map((client) => {
        if (!clientNames.includes({text: client.FullName, value: client.HouseholdID,})) {
          clientNames.push({
            text: client.FullName,
            value: client.HouseholdID,
          });
        }
      });
      return clientNames;
    },
  }
};
</script>
