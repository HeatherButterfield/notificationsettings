<template>
  <div>
    <h2>Which clients would you like to build a notification for?</h2>
    <div class="flex">
      <ChooseClients/>
      <h1 class="text-center" style="margin-top: 40px;">OR</h1>
      <ClientCriteria :retirement="true"/>
    </div>
    <div class="d-flex align-center" v-if="$store.state.currentSelection.length > 0" style="margin-top: 20px;">
      <h5 class="header-section" style="margin-right: 20px;">You have selected the following {{ $store.state.currentSelection.length }} clients:</h5>
      <div v-for="item in $store.state.currentSelection" v-bind:key="item">
        <v-chip
        color="rgb(74, 144, 226)"
        text-color="white"
        >
        {{item}}
        </v-chip>
      </div>
    </div>
    <div class="reset">
      <Settings :retirement="true"/>
    </div>
  </div>
</template>

<style>
  .reset {
    margin: 0px;
  }
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header-section {
    font-weight: 600;
    font-size: 1.2em;
    color: #444;
    margin-bottom: 30px;
    margin-top: 40px;
  }
</style>

<script>
import ChooseClients from './ChooseClients';
import ClientCriteria from './ClientCriteria';
import Settings from './Settings';

export default {
  components: {
    ChooseClients,
    ClientCriteria,
    Settings
  },
  data: () => ({

  }),
};
</script>
