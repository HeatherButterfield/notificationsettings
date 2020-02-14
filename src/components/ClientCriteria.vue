<template>
  <div>
    <h5 class="header">Option 2: Choose clients based on certain criteria</h5>
    <div class="d-flex item" style="margin-bottom: 0px; margin-top: 40px;">
      <span class="margin-r">Age</span>
      <v-slider
        v-model="age.value"
        :max="age.max"
        :min="age.min"
        thumb-label="always"
      ></v-slider>
    </div>
    <small>Note: Advizr does not store date of birth. Instead, age is calculated based on current date minus year of birth on file.</small>
    <div class="d-flex item" style="margin-top: 20px;">
      <span class="margin-r">Networth</span>
      <v-slider
        v-model="networth.value"
        :tick-labels="networth.labels"
        :min="networth.min"
        :max="networth.max"
        :step="networth.step"
        ticks="always"
      ></v-slider>
    </div>
    <div class="d-flex item align-center">
      <span>Plan Status</span>
      <v-checkbox
        v-model="planComplete"
        label="Complete"
        style="margin-left: 40px;"
      ></v-checkbox>
      <v-checkbox
        v-model="planIncomplete"
        label="Incomplete"
        style="margin-left: 40px;"
      ></v-checkbox>
    </div>
    <div class="text-center"><v-btn @click="$store.state.selectionType = 'criteria'" color="rgb(74, 144, 226)" class="white--text" x-large width="300px">Update</v-btn></div>
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

export default {
  name: "Criteria",
  components: {

  },
  methods: {
    sendQuery() {

    }
  },
  data: () => ({
    age: {
      value: null,
      min: 18,
      max: 65,
    },
    networth: {
      value: null,
      min: 100000,
      max: 300000,
      step: 50000,
      labels: ["100K", "150K", "200K", "250K", "300K"]
    },
    hasCash: {
      value: null,
      min: 100000,
      max: 300000,
      step: 50000,
      labels: ["1K", "1.5K", "2K", "2.5K", "3K"]
    },
    edu: {
      value: null,
      min: 0,
      max: 100,
    },
    ret: {
      value: null,
      min: 0,
      max: 100,
    },
    home: {
      value: null,
      min: 0,
      max: 100,
    },
    debt: {
      value: null,
      min: 0,
      max: 100,
    },
    ins: {
      value: null,
      min: 0,
      max: 100,
    },
    health: {
      value: null,
      min: 0,
      max: 100,
    },
    planComplete: false,
    planIncomplete: false,
  }),
};
</script>
