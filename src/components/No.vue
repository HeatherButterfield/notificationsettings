<template>
  <v-app style="padding: 30px;">
    <div class="d-flex flex-column align-center justify-center" v-if="!submit">
      <h2 style="width: 315px;">Thanks for your feedback!</h2>
      <small style="width: 315px;" class="margin-b">You may close out of this tab or feel free to provide additional feedback.</small>
      <h3 style="width: 315px;" class="margin-b">How can we improve the notifications we send you?</h3>
      <v-textarea
        v-model="improve"
        style="width: 315px;"
        outlined
      ></v-textarea>
      <h3 style="width: 315px;" class="margin-bs">Is there anything else you'd like to share?</h3>
      <v-textarea
        v-model="other"
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
    submit: false,
    improve: null,
    other: null
  }),
  mounted() {
    document.querySelector('.mainHeader').hidden = true;
    document.querySelector('.footer').hidden = true;
  },
  methods: {
    done() {
      this.submit = true;
      let item = {
        name: "Andy Putterman",
        type: "Not Helpful",
        improve: this.improve,
        feedback: this.other
      }
      this.$store.state.notification = true;
      this.$store.state.feedback.push(item);
    }
  }
};
</script>
