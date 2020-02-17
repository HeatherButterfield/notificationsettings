<template>
  <div class="background">
    <v-btn x-large @click="one" :color="color1" style="margin: 20px 20px 40px 80px">
      <router-link to="/retirement" tag="span">
        <span class="link">OFF-TRACK RETIREMENT</span>
      </router-link>
    </v-btn>
    <v-btn x-large @click="two" :color="color2" style="margin: 20px 20px 40px 20px">
      <router-link to="/cash" tag="span">
        <span class="link">EXCESS CASH</span>
      </router-link>
    </v-btn>
    <v-btn x-large @click="three" :color="color3" style="margin: 20px 20px 40px 20px">
      <router-link to="/perfect" tag="span">
        <span class="link">GOALS ARE PROSPERING</span>
      </router-link>
    </v-btn>
    <v-btn x-large @click="four" :color="color4" style="margin: 20px 20px 40px 20px">
      <router-link to="/saved" tag="span">
        <span class="link">SAVED NOTIFICATIONS</span>
      </router-link>
    </v-btn>
    <router-view></router-view>
    <v-footer style="padding: 0px;"><img src="./assets/footer.png"></v-footer>
  </div>
</template>

<style>
  .link {
    font-weight: 600;
    color: #394e73;
  }
  .background {
    background: url("./assets/header.png");
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 23.5%;
  }
  h1, h2 {
    color: #394e73;
  }
</style>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    selected: undefined,
    color1: "white",
    color2: "white",
    color3: "white",
    color4: "white",
    colors: {
      blue: "#0094d5",
      darkBlue: "#394e73",
      lightBlue: "#5a79bc",
      aqua: "#b1d3d5",
      orange: "#ed6622",
      yellow: "#efb423",
      green: "#acd13a",
      purple: "#67235f",
      gray: ""
    },
  }),
  methods: {
    one() {
      this.color1 = "#acd13a";
      this.color2 = "white";
      this.color3 = "white";
      this.color4 = "white";
    },
    two() {
      this.color1 = "white";
      this.color2 = "#acd13a";
      this.color3 = "white";
      this.color4 = "white";
    },
    three() {
      this.color1 = "white";
      this.color2 = "white";
      this.color3 = "#acd13a";
      this.color4 = "white";
    },
    four() {
      this.color1 = "white";
      this.color2 = "white";
      this.color3 = "white";
      this.color4 = "#acd13a";
    }
  }
};
</script>
