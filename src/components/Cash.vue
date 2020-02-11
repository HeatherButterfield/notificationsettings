<template>
  <div>
    <v-row class="flex">
      <ChooseClients/>
      <h1>OR</h1>
      <ClientCriteria :cash="true"/>
    </v-row>
    <v-row class="reset">
      <Settings :cash="true"/>
    </v-row>
  </div>
</template>

<style>

</style>

<script>

export default {
  name: "Cash",
  components: {

  },
  data: () => ({

  }),
};
</script>
