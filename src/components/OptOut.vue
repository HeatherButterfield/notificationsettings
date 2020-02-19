<template>
  <v-app style="padding: 30px;">
  <div class="d-flex text-left flex-column align-center justify-center" v-if="!submit">
    <h2 style="width: 315px;">Thanks for your feedback!</h2>
    <small style="width: 315px;">You may close out of this tab or feel free to provide additional feedback.</small>
    <v-radio-group v-model="more" style="width: 315px;">
      <v-radio label="Do not send me any more notifications at all" value="noMore"></v-radio>
      <v-radio label="Do not send me anymore notifications on this topic, but please notify me about:" value="yesMore"></v-radio>
    </v-radio-group>
    <v-select
      v-model="selected"
      style="width: 315px"
      :items="notify"
      label="notify me about"
      outlined
      multiple
      chips
    ></v-select>
    <div v-if="selected.includes('Risk Management')">
      <p style="width: 315px;">Care to tell me more about the Risk Management notifications you'd like?</p>
      <div class="text-center margin-bs"><v-btn color="#acd13a" @click="risk = true" class="white--text" x-large style="width: 315px; color: #394e73;">Yes</v-btn></div>
      <div class="d-flex justify-center margin-bs" v-if="risk">
        <v-textarea
          v-model="riskInput"
          style="max-width: 315px;"
          outlined
        ></v-textarea>
      </div>
    </div>
    <div v-if="selected.includes('Investing')">
      <p style="width: 315px;">Care to tell me more about the Investing notifications you'd like?</p>
      <div class="text-center  margin-bs"><v-btn color="#acd13a" @click="inv = true" class="white--text" x-large style="width: 315px; color: #394e73;">Yes</v-btn></div>
      <div class="d-flex justify-center margin-bs" v-if="inv">
        <v-textarea
          v-model="invInput"
          style="max-width: 315px;"
          outlined
        ></v-textarea>
      </div>
    </div>
    <div v-if="selected.includes('Taxes')">
      <p style="width: 315px;">Care to tell me more about the Taxes notifications you'd like?</p>
      <div class="text-center margin-bs"><v-btn color="#acd13a" @click="tax = true" class="white--text" x-large style="width: 315px; color: #394e73;">Yes</v-btn></div>
      <div class="d-flex justify-center margin-bs" v-if="tax">
        <v-textarea
          v-model="taxInput"
          style="max-width: 315px;"
          outlined
        ></v-textarea>
      </div>
    </div>
    <div v-if="selected.includes('Estate Planning')">
      <p style="width: 315px;">Care to tell me more about the Estate Planning notifications you'd like?</p>
      <div class="text-center margin-bs"><v-btn color="#acd13a" @click="est = true" class="white--text" x-large style="width: 315px; color: #394e73;">Yes</v-btn></div>
      <div class="d-flex justify-center margin-bs" v-if="est">
        <v-textarea
          v-model="estInput"
          style="max-width: 315px;"
          outlined
        ></v-textarea>
      </div>
    </div>
    <div v-if="selected.includes('Insurance')">
      <p style="width: 315px;">Care to tell me more about the Insurance notifications you'd like?</p>
      <div class="text-center margin-bs"><v-btn color="#acd13a" @click="ins = true" class="white--text" x-large style="width: 315px; color: #394e73;">Yes</v-btn></div>
      <div class="d-flex justify-center margin-bs" v-if="ins">
        <v-textarea
          v-model="insInput"
          style="max-width: 315px;"
          outlined
        ></v-textarea>
      </div>
    </div>
    <div v-if="selected.includes('Retirement')">
      <p style="width: 315px;">Care to tell me more about the Retirement notifications you'd like?</p>
      <div class="text-center margin-bs"><v-btn color="#acd13a" @click="ret = true" class="white--text" x-large style="width: 315px; color: #394e73;">Yes</v-btn></div>
      <div class="d-flex justify-center margin-bs" v-if="ret">
        <v-textarea
          v-model="retInput"
          style="max-width: 315px;"
          outlined
        ></v-textarea>
      </div>
    </div>
    <h3 style="width: 315px;" class="margin-bs">Is there anything else you'd like to share?</h3>
    <v-textarea
      style="width: 315px;"
      outlined
    ></v-textarea>
    <v-btn color="#acd13a" @click="done" class="white--text" x-large style="width: 315px; color: #394e73;">Submit</v-btn>
  </div>
  <div class="d-flex text-left flex-column align-center justify-center" style="margin-top: 100px;" v-if="submit">
    <h2>Got it!</h2>
    <v-btn style="margin-top: 90%">
      <router-link to="/" tag="span">
        <span class="link">Demo</span>
      </router-link>
    </v-btn>
  </div>
  </v-app>
</template>

<style>

</style>

<script>

export default {
  components: {

  },
  data: () => ({
    notify: ['Risk Management', 'Investing', 'Taxes', 'Estate Planning', 'Insurance', 'Retirement'],
    selected: [],
    risk: false,
    riskInput: null,
    inv: false,
    invInput: null,
    tax: false,
    taxInput: null,
    est: false,
    estInput: null,
    ins: false,
    insInput: null,
    ret: false,
    retInput: null,
    submit: false,
    more: null
  }),
  mounted() {
    document.querySelector('.mainHeader').hidden = true;
    document.querySelector('.footer').hidden = true;
  },
  methods: {
    done() {
      this.submit = true;
      let more = [];
      if (this.selected.includes('Risk Management')) {
        more.push({
          value: "Risk Management",
          input: this.riskInput
        });
      }
      if (this.selected.includes('Investing')) {
        more.push({
          value: "Investing",
          input: this.invInput
        });
      }
      if (this.selected.includes('Taxes')) {
        more.push({
          value: "Taxes",
          input: this.taxInput
        });
      }
      if (this.selected.includes('Estate Planning')) {
        more.push({
          value: "Estate Planning",
          input: this.estInput
        });
      }
      if (this.selected.includes('Insurance')) {
        more.push({
          value: "Insurance",
          input: this.insInput
        });
      }
      if (this.selected.includes('Retirement')) {
        more.push({
          value: "Retirement",
          input: this.retInput
        });
      }
      let item = {
        name: "Edmond Walters",
        type: "Opted Out",
        more: more,
        feedback: this.other
      }
      this.$store.state.notification = true;
      this.$store.state.feedback.push(item);
    }
  }
};
</script>
