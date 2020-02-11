<template>
  <div>
    <v-row class="flex">
      <ChooseClients/>
      <h1>OR</h1>
      <ClientCriteria :perfect="true"/>
    </v-row>
    <v-row class="reset">
      <Settings :perfect="true"/>
    </v-row>
  </div>
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
