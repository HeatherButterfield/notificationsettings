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
          v-model="onTrackPercent"
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
        <div class="text-center"><v-btn color="#acd13a" class="white--text" x-large width="300px" v-on="on">Save</v-btn></div>
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
          <v-btn color="#acd13a" class="white--text" @click="dialog = false">Cancel</v-btn>
          <v-btn color="#acd13a" class="white--text" @click="save">Save</v-btn>
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
import goals from '../assets/goals.json';
import response from '../assets/response.json';

export default {
  name: "Settings",
  props: ["retirement", "cash", "perfect", "clients"],
  components: {

  },
  data: () => ({
    cashAmount: null,
    onTrackPercent: 0,
    duration: null,
    durations: ['1 Week', '2 Weeks', '3 Weeks', '1 Month', '2 Months', '3 Months'],
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
    async save() {
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

      goals.map((selected) => {
        if (this.$store.state.selectedIds.includes(selected.HouseholdID)) {
          if (this.retirement && selected.Goal == "Retirement" && selected.Duration == this.duration && selected.Progress*100 < this.onTrackPercent && !this.$store.state.send.includes(selected.HouseholdID)) {
            this.$store.state.send.push(selected.HouseholdID);
          }
          else if (this.cash && selected.Duration == this.duration && !this.$store.state.send.includes(selected.HouseholdID)) {
            this.$store.state.send.push(selected.HouseholdID);
          }
          else if (this.perfect && selected.Duration == this.duration && selected.Progress*100 > this.onTrackPercent && selected.Goal == this.goal.selected && !this.$store.state.send.includes(selected.HouseholdID)) {
            this.$store.state.send.push(selected.HouseholdID);
          }
        }
      });

      console.log(this.$store.state.send);

      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Basic YXBpX2ludGVncmF0aW9uc191dnU6VVhGMktXd3pKRWJHQ2R4bw==");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let token = "";

      fetch("https://api.orionadvisor.com/api/v1/Security/Token?client_id=1697&client_secret=88D65BAD-2DC4-412E-90B7-FD82D5D76BA2", requestOptions)
        .then(response => response.text())
        .then(result => {
          token = JSON.parse(result).access_token;
          var secondHeaders = new Headers();
          secondHeaders.append("Accept", "application/json");
          secondHeaders.append("Content-Type", "application/json");
          let auth = "Session " + JSON.stringify(token);
          secondHeaders.append("Authorization", auth);

          this.$store.state.send.map((id) => {
            response.filters.push({
                name: "ID = " + id,
                value: "(function (a) { return a === " + id + "; })",
                key: "id",
                include: true
            });
          });

          const secondOptions = {
            method: 'PUT',
            headers: secondHeaders,
            redirect: 'follow',
            body: JSON.stringify(response)
          };

          fetch("https://api.orionadvisor.com/api/v1/Settings/Views/GroupingViewClientDto/354156", secondOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

          var thirdHeaders = new Headers();
          thirdHeaders.append("Accept", "application/json");
          secondHeaders.append("Content-Type", "application/json");
          secondHeaders.append("Authorization", auth);

          var thirdOptions = {
            method: 'POST',
            headers: thirdHeaders,
            redirect: 'follow'
          };

          fetch("https://api.orionadvisor.com/api/v1/Reporting/Deliver/Emails/Action/StageEmails", thirdOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
         })
        .catch(error => console.log('error', error));

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
