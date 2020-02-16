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
          v-model="cashPercent"
          label="percent"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          suffix="%"
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
      <div style="width: 200px;" class="margin">
        <v-select
          @change="setPerfect"
          v-model="goal.selected"
          :items="goal.items"
          label="goal"
          outlined
        ></v-select>
      </div>
      <h5 class="header margin">goal is</h5>
      <div style="width: 200px;" class="margin">
        <v-text-field
          @change="setPerfect"
          v-model="onTrackPercent"
          label="percent"
          :rules="[v => !!v || 'Required', v => v > 0 || 'Must be a valid number']"
          outlined
          suffix="%"
        ></v-text-field>
      </div>
      <h5 class="header margin">on track for</h5>
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
import clients from '../assets/clients.json';

export default {
  name: "Settings",
  props: ["retirement", "cash", "perfect", "clients"],
  components: {

  },
  data: () => ({
    cashPercent: null,
    onTrackPercent: 0,
    duration: null,
    durations: ['1 week', '2 weeks', '3 weeks', '1 month', '2 months', '3 months'],
    goal: {
      selected: null,
      items: ['Education', 'Retirement', 'Home Purchase', 'Debt Management']
    },
    retMessage: "It looks like your retirement plan has strayed off track a bit more than we are comfortable with. Reach out to your advisor to get it back on track.",
    cashMessage: "You have a significant amount of money sitting in cash. Let's earn some interest! Meet with your advisor to see where to best invest some of that money.",
    perfectMessage: "We just reviewed your goal and it looks like you have completed a large percentage. Keep up the great work and let us know if there is anything we can do to help!",
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

      clients.map((selected) => {
        if (this.$store.state.currentSelection.includes(selected['Full Name'])) {
          if (this.retirement && this.duration == "1 week" && selected['One Week Average']*100 < this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.retirement && this.duration == "2 weeks" && selected['Two Week Average']*100 < this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.retirement && this.duration == "3 weeks" && selected['Three Week Average']*100 < this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.retirement && this.duration == "1 month" && selected['One Mo Average']*100 < this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.retirement && this.duration == "2 months" && selected['Two Mo Average']*100 < this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.retirement && this.duration == "3 month" && selected['Three Mo Average']*100 < this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          if (this.cash && this.duration == "1 week" && selected['One Week Average']*100 > this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.cash && this.duration == "2 weeks" && selected['Two Week Average']*100 > this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.cash && this.duration == "3 weeks" && selected['Three Week Average']*100 > this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.cash && this.duration == "1 month" && selected['One Mo Average']*100 > this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.cash && this.duration == "2 months" && selected['Two Mo Average']*100 > this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.cash && this.duration == "3 month" && selected['Three Mo Average']*100 > this.cashPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          if (this.perfect && this.duration == "1 week" && selected['One Week Average']*100 > this.onTrackPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.perfect && this.duration == "2 weeks" && selected['Two Week Average']*100 > this.onTrackPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.perfect && this.duration == "3 weeks" && selected['Three Week Average']*100 > this.onTrackPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.perfect && this.duration == "1 month" && selected['One Mo Average']*100 > this.onTrackPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.perfect && this.duration == "2 months" && selected['Two Mo Average']*100 > this.onTrackPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
          else if (this.perfect && this.duration == "3 month" && selected['Three Mo Average']*100 > this.onTrackPercent && !this.$store.state.send.includes(selected['Household ID'])) {
            this.$store.state.send.push(selected['Household ID']);
          }
        }
      });

      console.log(this.$store.state.send);

      this.$store.state.currentSelection = [];
      this.$store.state.saved.push(newN);
      this.name = null;
    },
    setPerfect() {
      this.perfectMessage = "We just reviewed your " + this.goal.selected + " goal and it looks like you are over " + this.onTrackPercent + "% complete. Keep up the great work and let us know if there is anything we can do to help!";
    }
  }
};
</script>
