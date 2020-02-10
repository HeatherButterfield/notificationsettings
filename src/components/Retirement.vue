<template>
  <div>
    <v-row class="flex">
      <ChooseClients/>
      <h1>OR</h1>
      <ClientCriteria :retirement="true"/>
    </v-row>
    <v-row class="reset">
      <Settings :retirement="true"/>
    </v-row>
  </div>
</template>

<style>
  .reset {
    margin: 0px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
