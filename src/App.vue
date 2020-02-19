<template>
  <div>
    <div class="mainHeader background">
      <v-row style="margin: 1% 1% 0px 96%" v-if="$store.state.notification"><router-link to="/feedback" tag="span"><i class="fas fa-comment-dots fa-2x" style="color: red; cursor: pointer;"></i></router-link></v-row>
      <v-row v-else style="margin: 1% 1% 0px 96%"><i class="fas fa-comment-dots fa-2x" style="color: white;"></i></v-row>
      <v-row>
        <v-btn x-large @click="one" :color="color1" style="margin: 22% 2% 5% 7%">
          <router-link to="/retirement" tag="span">
            <span class="link">OFF-TRACK RETIREMENT</span>
          </router-link>
        </v-btn>
        <v-btn x-large @click="two" :color="color2" style="margin: 22% 2% 5% 2%">
          <router-link to="/cash" tag="span">
            <span class="link">EXCESS CASH</span>
          </router-link>
        </v-btn>
        <v-btn x-large @click="three" :color="color3" style="margin: 22% 2% 5% 2%">
          <router-link to="/perfect" tag="span">
            <span class="link">GOALS ARE PROSPERING</span>
          </router-link>
        </v-btn>
        <v-btn x-large @click="four" :color="color4" style="margin: 22% 2% 5% 2%">
          <router-link to="/saved" tag="span">
            <span class="link">SAVED NOTIFICATIONS</span>
          </router-link>
        </v-btn>
      </v-row>
    </div>
      <router-view></router-view>
    <div class="footer">
      <v-footer style="padding: 0px;"><img src="./assets/footer.png"></v-footer>
    </div>
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
    padding-top: 0px;
  }
  h1, h2, h3 {
    color: #394e73;
  }
</style>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    show: true,
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
