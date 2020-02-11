<template>
  <div>
    <h1 style="margin-bottom: 20px; margin-top: 20px;">THEN</h1>
    <div class="line d-flex align-center">
      <h5 class="header margin">Email:</h5>
      <v-checkbox
        class="margin"
        v-model="emailMe"
        label="Me"
      ></v-checkbox>
      <v-checkbox
        class="margin"
        v-model="emailClient"
        label="Client"
      ></v-checkbox>
      <v-checkbox
        class="margin"
        v-model="emailBoth"
        label="Both"
      ></v-checkbox>
    </div>
    <div class="line d-flex align-center" v-if="retirement">
      <h5 class="header margin">When:</h5>
      <h5 class="header margin">Retirement goal is less than</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="cash"
          label="amount"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          prefix="$"
        ></v-text-field>
      </div>
      <h5 class="header margin">for</h5>
      <div style="width: 200px;" class="margin">
        <v-select
          v-model="duration"
          :items="durations"
          label="duration"
          outlined
        ></v-select>
      </div>
    </div>
    
    <div class="line d-flex align-center">
      <h5 class="header margin">Message:</h5>
      <div style="width: 950px" class="margin">
        <v-text-field
          v-model="message"
          label="message"
          :rules="[v => !!v || 'Required']"
          outlined
        ></v-text-field>
      </div>
    </div>
    <div class="text-center"><v-btn color="rgb(74, 144, 226)" class="white--text" x-large width="400px">Save</v-btn></div>
  </div>
</template>

<style>
  .header {
    font-weight: 600;
    font-size: 1.2em;
    color: #444;
  }
  .margin {
    margin-right: 20px;
  }
</style>

<script>

export default {
  name: "Settings",
  props: ["retirement", "cash"],
  components: {

  },
  data: () => ({
    cash: null,
    duration: null,
    durations: ['1 week', '2 weeks', '3 weeks', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months', '1 year']
  }),
};
</script>
