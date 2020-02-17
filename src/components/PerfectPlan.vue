<template>
  <v-app style="padding: 50px;">
    <h2>Which clients would you like to build a notification for?</h2>
    <div class="flex">
      <ChooseClients/>
      <h1 class="text-center" style="margin-top: 40px;">OR</h1>
      <ClientCriteria/>
    </div>
    <div class="d-flex align-center flex-wrap" v-if="$store.state.currentSelection.length > 0" style="margin-top: 20px;">
      <h5 class="header-section" style="margin-right: 20px;">You have selected the following {{ $store.state.currentSelection.length }} clients:</h5>
      <div v-for="item in $store.state.currentSelection" v-bind:key="item">
        <v-chip
        color="rgb(74, 144, 226)"
        text-color="white"
        style="margin: 5px;"
        >
        {{item}}
        </v-chip>
      </div>
    </div>
    <div class="reset">
      <Settings :perfect="true"/>
    </div>
  </v-app>
</template>

<style>

</style>

<script>
import ChooseClients from './ChooseClients';
import ClientCriteria from './ClientCriteria';
import Settings from './Settings';

export default {
  name: "Cash",
  components: {
    ChooseClients,
    ClientCriteria,
    Settings
  },
  data: () => ({

  }),
};
</script>
