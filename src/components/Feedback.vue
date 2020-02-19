<template>
  <v-app style="padding: 50px;">
    <h1>Client Feedback</h1>
    <v-card flat><v-card-title style="margin-right: 150px;">Name<v-spacer></v-spacer>Feedback</v-card-title></v-card>
    <v-expansion-panels v-for="item in $store.state.feedback" v-bind:key="item.name">
      <v-expansion-panel style="margin-bottom: 20px;">
        <v-expansion-panel-header>{{ item.name }}<v-spacer></v-spacer><span style="margin-left: 650px;">{{ item.type }}</span></v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-if="item.more">
            <h3>This client wanted more of these types of notifications:</h3>
            <ul v-for="more in item.more" v-bind:key="more.value">
              <li>{{ more.value }}. <span v-if="more.input">Feedback: {{ more.input }}</span></li>
            </ul>
          </div>
          <div v-if="item.improve">
            <h3>Suggestions for notification improvement:</h3>
            <p>{{ item.improve }}</p>
          </div>
          <div v-if="item.feedback">
            <h3>Other feedback from this client:</h3>
            <p>{{ item.feedback }}</p>
          </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-app>
</template>

<style>

</style>

<script>

export default {
  components: {

  },
  data: () => ({
  })
};
</script>
