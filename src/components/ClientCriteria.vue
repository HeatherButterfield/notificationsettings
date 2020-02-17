<template>
  <div>
    <h5 class="header">Option 2: Choose clients based on certain criteria</h5>
    <div class="d-flex item" style="margin-top: 20px;">
      <span class="margin-r">Age</span>
      <v-text-field
        class="margin-r"
        v-model="age.min"
        label="min"
        :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
        outlined
      ></v-text-field>
      <h5 class="header margin-r" style="margin-left: 20px;">to</h5>
      <v-text-field
        v-model="age.max"
        label="max"
        :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
        outlined
      ></v-text-field>
    </div>
    <small>Note: Advizr does not store date of birth. Instead, age is calculated based on current date minus year of birth on file.</small>
    <div class="d-flex item" style="margin-top: 20px;">
      <span class="margin-r">Networth</span>
      <v-text-field
        class="margin-r"
        v-model="networth.min"
        label="min"
        :rules="[v => !!v || 'Required']"
        outlined
        prefix="$"
      ></v-text-field>
      <h5 class="header margin-r" style="margin-left: 20px;">to</h5>
      <v-text-field
        v-model="networth.max"
        label="max"
        :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
        outlined
        prefix="$"
      ></v-text-field>
    </div>
    <div class="text-center"><v-btn @click="update" color="#acd13a" class="white--text" x-large width="300px">Update</v-btn></div>
  </div>
</template>

<style>
  .header {
    font-weight: 600;
    font-size: 1.2em;
    color: #444;
  }
  .margin-r {
    margin-right: 20px;
  }
  .item {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

<script>
import goals from '../assets/goals.json';

export default {
  name: "Criteria",
  props: ["clients"],
  components: {

  },
  data: () => ({
    age: {
      min: null,
      max: null,
    },
    networth: {
      min: null,
      max: null
    },
    planStatus: null
  }),
  methods: {
    update() {
      this.$store.state.selectionType = 'criteria';
      let selected = [];
      goals.map((client) => {
        if (2020-client.YearofBirth <= this.age.max && 2020-client.YearofBirth >= this.age.min && client.Networth <= this.networth.max && client.Networth >= this.networth.min && !this.$store.state.selectedIds.includes(client.HouseholdID)) {
          selected.push(client.FullName);
          this.$store.state.selectedIds.push(client.HouseholdID);
        }
      });
      this.$store.state.currentSelection = selected;
    }
  }
};
</script>
