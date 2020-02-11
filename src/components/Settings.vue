<template>
  <div>
    <h1 style="margin-bottom: 20px; margin-top: 20px;">THEN</h1>
    <div class="line d-flex align-center">
      <h5 class="header margin">Send message through:</h5>
      <v-checkbox
        class="margin"
        v-model="text"
        label="Text"
      ></v-checkbox>
      <v-checkbox
        class="margin"
        v-model="email"
        label="Email"
      ></v-checkbox>
    </div>
    <div class="line d-flex align-center">
      <h5 class="header margin">Send to:</h5>
      <v-checkbox
        class="margin"
        v-model="me"
        label="Me"
      ></v-checkbox>
      <v-checkbox
        class="margin"
        v-model="client"
        label="Client"
      ></v-checkbox>
      <v-checkbox
        class="margin"
        v-model="both"
        label="Both"
      ></v-checkbox>
    </div>
    <div class="line d-flex align-center" v-if="retirement">
      <h5 class="header margin">When:</h5>
      <h5 class="header margin">Retirement goal is less than</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="cashAmount"
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
    <div class="line d-flex align-center" v-if="cash">
      <h5 class="header margin">When:</h5>
      <h5 class="header margin">Cash increases by</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="cashAmount"
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
    <div class="line d-flex align-center" v-if="perfect">
      <h5 class="header margin">When:</h5>
      <h5 class="header margin">All goals are on track and networth is at least</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="cashAmount"
          label="amount"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          prefix="$"
        ></v-text-field>
      </div>
    </div>
    <div class="line d-flex align-center">
      <h5 class="header margin">Message:</h5>
      <div style="width: 950px" class="margin">
        <v-textarea
          v-if="retirement"
          v-model="retMessage"
          value="retMessage"
          label="Message"
          :rules="[v => !!v || 'Required']"
          outlined
        ></v-textarea>
        <v-textarea
          v-if="cash"
          v-model="cashMessage"
          value="cashMessage"
          label="Message"
          :rules="[v => !!v || 'Required']"
          outlined
        ></v-textarea>
        <v-textarea
          v-if="perfect"
          v-model="perfectMessage"
          value="perfectMessage"
          label="Message"
          :rules="[v => !!v || 'Required']"
          outlined
        ></v-textarea>
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
  props: ["retirement", "cash", "perfect"],
  components: {

  },
  data: () => ({
    cashAmount: null,
    duration: null,
    durations: ['1 week', '2 weeks', '3 weeks', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months', '1 year'],
    retMessage: "It looks like your retirement plan has strayed off track a bit more than we are comfortable with. Reach out to your advisor to get it back on track.",
    cashMessage: "You have a significant amount of money sitting in cash. Let's earn some interest! Meet with your advisor to see where to best invest some of that money.",
    perfectMessage: "Call your advisor and tell them they are amazing because you have an excellent plan in place and everything is on track. Relax and enjoy life!",
    email: false,
    text: false,
    me: false,
    client: false,
    both: false
  }),
};
</script>
