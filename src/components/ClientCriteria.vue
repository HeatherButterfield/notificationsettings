<template>
  <div>
    <h5 class="header">Option 2: Choose clients based on certain criteria</h5>
    <div v-if="retirement">
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
      <div class="d-flex item justify-space-between">
        <span class="margin-r">Goal</span>
        <v-select
          v-model="goal.selected"
          :items="goal.items"
          label="Has the following goal(s)"
          outlined
          multiple
          chips
        ></v-select>
      </div>
    </div>
    <div v-if="cash">
      <div class="d-flex item">
        <span class="margin-r">Cash</span>
        <v-slider
          v-model="hasCash.value"
          :tick-labels="hasCash.labels"
          :min="hasCash.min"
          :max="hasCash.max"
          :step="hasCash.step"
          ticks="always"
        ></v-slider>
      </div>
      <div class="d-flex item">
        <span class="margin-r">For</span>
        <v-select
          v-model="duration"
          :items="durations"
          label="duration"
          outlined
        ></v-select>
      </div>
    </div>
    <div v-if="perfect">
      <div class="d-flex item justify-space-between" style="margin-top: 20px;">
        <span class="margin-r">Goal</span>
        <v-select
          v-model="goal.selected"
          :items="goal.items"
          label="Has the following goal"
          outlined
        ></v-select>
      </div>
      <div class="d-flex item" v-if="goal.selected.includes('Education')">
        <span class="margin-r">Education on Track %</span>
        <v-slider
          v-model="edu.value"
          :min="edu.min"
          :max="edu.max"
          thumb-label="always"
        ></v-slider>
      </div>
      <div class="d-flex item" v-if="goal.selected.includes('Retirement')">
        <span class="margin-r">Retirement on Track %</span>
        <v-slider
          v-model="ret.value"
          :min="ret.min"
          :max="ret.max"
          thumb-label="always"
        ></v-slider>
      </div>
      <div class="d-flex item" v-if="goal.selected.includes('Home Purchase')">
        <span class="margin-r">Home Purchase on Track %</span>
        <v-slider
          v-model="home.value"
          :min="home.min"
          :max="home.max"
          thumb-label="always"
        ></v-slider>
      </div>
      <div class="d-flex item" v-if="goal.selected.includes('Debt Management')">
        <span class="margin-r">Debt Management on Track %</span>
        <v-slider
          v-model="debt.value"
          :min="debt.min"
          :max="debt.max"
          thumb-label="always"
        ></v-slider>
      </div>
      <div class="d-flex item" v-if="goal.selected.includes('Insurance')">
        <span class="margin-r">Insurance on Track %</span>
        <v-slider
          v-model="ins.value"
          :min="ins.min"
          :max="ins.max"
          thumb-label="always"
        ></v-slider>
      </div>
      <div class="d-flex item" v-if="goal.selected.includes('Healthcare')">
        <span class="margin-r">Healthcare on Track %</span>
        <v-slider
          v-model="health.value"
          :min="health.min"
          :max="health.max"
          thumb-label="always"
        ></v-slider>
      </div>
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
  props: ["retirement", "cash", "perfect"],
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
    goal: {
      selected: [],
      items: ['Education', 'Retirement', 'Home Purchase', 'Debt Management', 'Insurance', 'Healthcare']
    },
    duration: null,
    durations: ['1 week', '2 weeks', '3 weeks', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months', '1 year']
  }),
};
</script>
