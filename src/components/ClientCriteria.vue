<template>
  <div>
    <h5 class="header">Select Clients Who Have:</h5>
    <div v-if="retirement">
      <div class="d-flex item">
        <span class="margin-r">Age</span>
        <v-slider
          v-model="age.value"
          :max="age.max"
          :min="age.min"
          thumb-label="always"
        ></v-slider>
      </div>
      <div class="d-flex item">
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
      <div class="d-flex item justify-space-between">
        <span class="margin-r">Plan</span>
        <v-checkbox
          v-model="planComplete"
          label="Complete"
        ></v-checkbox>
        <v-checkbox
          v-model="planIncomplete"
          label="Incomplete"
        ></v-checkbox>
      </div>
      <div class="d-flex item justify-space-between">
        <span class="margin-r">Goal</span>
        <v-select
          v-model="goal.selected"
          :items="goal.items"
          label="Goals"
          outlined
          multiple
          chips
        ></v-select>
      </div>
    </div>
    <div class="text-center"><v-btn @click="$store.state.selectionType = 'criteria'" color="rgb(74, 144, 226)" class="white--text" x-large width="400px">Update</v-btn></div>
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
    width: 400px;
  }
</style>

<script>

export default {
  name: "Criteria",
  props: ["retirement"],
  components: {

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
      labels: ["1K", "1.5K", "2K", "2.5K", "3K"]
    },
    planComplete: false,
    planIncomplete: false,
    goal: {
      selected: null,
      items: ['Education', 'Retirement', 'Home Purchase', 'Debt Management', 'Insurance', 'Healthcare']
    }
  }),
};
</script>
