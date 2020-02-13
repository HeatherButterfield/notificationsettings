<template>
  <v-app style="background-color: #f9f7f7; padding: 5%;">
    <div class="adviser-settings">
      <h1 class="adviser-settings-title">Client Notification Settings</h1>
      <div class="adviser-settings-menu">
        <ul class="adviser-settings-menu-list">
          <li class="adviser-settings-menu-item">
          <button @click="selected = 1" :class="{active:selected == 1}" class="adviser-settings-menu-item__button" type="button">
            <router-link to="/retirement" tag="span">
              <span class="link">OFF-TRACK RETIREMENT</span>
            </router-link>
          </button>
          </li>
          <li class="adviser-settings-menu-item">
            <button @click="selected = 2" :class="{active:selected == 2}" class="adviser-settings-menu-item__button" type="button">
              <router-link to="/cash" tag="span">
                <span class="link">EXCESS CASH</span>
              </router-link>
            </button>
          </li>
          <li class="adviser-settings-menu-item">
            <button @click="selected = 3" :class="{active:selected == 3}" class="adviser-settings-menu-item__button" type="button">
              <router-link to="/perfect" tag="span">
                <span class="link">GOALS ARE PROSPERING</span>
              </router-link>
            </button>
          </li>
          <li class="adviser-settings-menu-item">
            <button @click="selected = 4" :class="{active:selected == 4}" class="adviser-settings-menu-item__button" type="button">
              <router-link to="/saved" tag="span">
                <span class="link">SAVED NOTIFICATIONS</span>
              </router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<style>
  .adviser-settings {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .link {
    font-weight: 600;
  }
</style>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    selected: undefined,
    colors: {
      blue: "#0094d5",
      darkBlue: "#394e73",
      lightBlue: "#5a79bc",
      aqua: "#b1d3d5",
      orange: "#ed6622",
      yellow: "#efb423",
      green: "#acd13a",
      purple: "#67235f"
    },
  }),
};
</script>
