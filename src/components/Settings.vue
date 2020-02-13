<template>
  <div>
    <h1 style="margin-bottom: 20px; margin-top: 20px;">THEN adjust notification settings:</h1>
    <h5 class="header">Send message through:</h5>
    <v-radio-group v-model="type" :mandatory="true">
      <v-radio label="Email" value="email"></v-radio>
      <v-radio label="Text" value="text"></v-radio>
    </v-radio-group>
    <h5 class="header">Send to:</h5>
    <v-radio-group v-model="sendTo" :mandatory="true">
      <v-radio label="Me" value="me"></v-radio>
      <v-radio label="Client" value="client"></v-radio>
      <v-radio label="Both" value="both"></v-radio>
    </v-radio-group>
    <div class="line d-flex align-center" v-if="retirement">
      <h5 class="header margin">When:</h5>
      <h5 class="header margin">Retirement goal is less than</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="cashPercent"
          label="percent"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          suffix="%"
        ></v-text-field>
      </div>
      <h5 class="header margin">for</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="duration"
          label="number"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
        ></v-text-field>
      </div>
      <h5 class="header margin">days in a row</h5>
    </div>
    <div class="line d-flex align-center" v-if="cash">
      <h5 class="header margin">When:</h5>
      <h5 class="header margin">Cash increases by</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="cashPercent"
          label="percent"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          suffix="%"
        ></v-text-field>
      </div>
      <h5 class="header margin">for</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="duration"
          label="number"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
        ></v-text-field>
      </div>
      <h5 class="header margin">number of days in a row</h5>
    </div>
    <div class="line d-flex align-center" v-if="perfect">
      <h5 class="header margin">When:</h5>
      <div style="width: 200px;" class="margin">
        <v-select
          v-model="goal.selected"
          :items="goal.items"
          label="goal"
          outlined
        ></v-select>
      </div>
      <h5 class="header margin">goal is</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="onTrackPercent"
          label="percent"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          suffix="%"
        ></v-text-field>
      </div>
      <h5 class="header margin">on track for</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          v-model="duration"
          label="number"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
        ></v-text-field>
      </div>
      <h5 class="header margin">days</h5>
    </div>
    <div class="line d-flex align-center">
      <h5 class="header margin">Message:</h5>
      <div style="width: 100%" class="margin">
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
    <v-dialog v-model="dialog" persistent max-width="340">
      <template v-slot:activator="{ on }">
        <div class="text-center"><v-btn color="rgb(74, 144, 226)" class="white--text" x-large width="300px" v-on="on">Save</v-btn></div>
      </template>
      <v-card>
        <v-card-title class="headline">What do you want to name your notification?</v-card-title>
        <div style="width: 300px; margin-left: 20px;">
          <v-text-field
            v-model="name"
            label="name"
            :rules="[v => !!v || 'Required']"
            outlined
          ></v-text-field>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="rgb(74, 144, 226)" class="white--text" @click="dialog = false">Cancel</v-btn>
          <v-btn color="rgb(74, 144, 226)" class="white--text" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  .line {
    margin: 10px;
  }
</style>

<script>

export default {
  name: "Settings",
  props: ["retirement", "cash", "perfect"],
  components: {

  },
  data: () => ({
    cashPercent: null,
    duration: null,
    onTrackPercent: null,
    goal: {
      selected: null,
      items: ['Education', 'Retirement', 'Home Purchase', 'Debt Management', 'Insurance', 'Healthcare']
    },
    retMessage: "It looks like your retirement plan has strayed off track a bit more than we are comfortable with. Reach out to your advisor to get it back on track.",
    cashMessage: "You have a significant amount of money sitting in cash. Let's earn some interest! Meet with your advisor to see where to best invest some of that money.",
    perfectMessage: "We just reviewed your [insert goal here] goal and it looks like you are over [insert % here] % complete. Keep up the great work and let us know if there is anything we can do to help!",
    type: null,
    sendTo: null,
    dialog: false,
    name: null
  }),
  methods: {
    save() {
      this.dialog = false;
      let newN = {
        name: this.name,
        clients: this.$store.state.currentSelection,
        type: this.type,
        sendTo: this.sendTo
      }
      if (this.retirement) {
        newN.category = "retirement";
        newN.message = this.retMessage;
        newN.percent = this.cashPercent;
        newN.duration = this.duration;
      }
      if (this.cash) {
        newN.category = "cash";
        newN.message = this.cashMessage;
        newN.percent = this.cashPercent;
        newN.duration = this.duration;
      }
      if (this.perfect) {
        newN.category = "perfect";
        newN.message = this.perfectMessage;
        newN.goal = this.goal.selected;
        newN.percent = this.onTrackPercent;
        newN.duration = this.duration;
      }
      this.$store.state.currentSelection = [];
      this.$store.state.saved.push(newN);
      console.log(this.$store.state.saved);
    }
  }
};
</script>
