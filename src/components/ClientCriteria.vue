<template>
  <div>
    <h5 class="header">Option 2: Choose clients based on certain criteria</h5>
    <div class="d-flex item" style="margin-top: 20px;">
      <span class="margin-r">Age</span>
      <v-text-field
        class="margin-r"
        v-model="age.min"
        label="min"
        :rules="[v => !!v || 'Required']"
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
    <div class="d-flex item align-center">
      <span class="margin-r">Plan Status</span>
      <v-radio-group v-model="planStatus" :mandatory="true">
        <v-radio label="Complete" value="Complete"></v-radio>
        <v-radio label="Incomplete" value="Incomplete"></v-radio>
      </v-radio-group>
    </div>
    <div class="text-center"><v-btn @click="update" color="rgb(74, 144, 226)" class="white--text" x-large width="300px">Update</v-btn></div>
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
import clients from '../assets/clients.json';

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
      clients.map((client) => {
        if (client["Age"] <= this.age.max && client["Age"] >= this.age.min && client["Networth"] <= this.networth.max && client["Networth"] >= this.networth.min && client["Plan Status"] == this.planStatus) {
          selected.push(client["Full Name"]);
        }
      });
      this.$store.state.currentSelection = selected;
    }
  }
};
</script>
