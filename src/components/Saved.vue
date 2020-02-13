<template>
  <div>
    <div v-for="(item, index) in $store.state.saved" v-bind:key="item.name" class="cards">
      <v-card
        max-width="100%"
        id="item.name"
        style="margin: 20px;"
      >
        <v-card-title><h1>{{ item.name }}</h1></v-card-title>
        <v-card-text>
          <p>For clients: <span v-for="client in item.clients" v-bind:key="client">{{ client }}, </span></p>
          <p>Notification type: {{ item.type }}</p>
          <p>Send to: {{ item.sendTo }}</p>
          <div v-if="item.category = 'retirement'">
            <p>When: Client's Retirement goal is less than {{ item.percent }}% for {{ item.duration }} days in a row</p>
          </div>
          <div v-if="item.category = 'cash'">
            <p>When: Client's cash increases by {{ item.percent }}% for {{ item.duration }} number of days in a row</p>
          </div>
          <div v-if="item.category = 'perfect'">
            <p>When: Client's {{ item.goal }} goal is {{ item.percent }}% on track for {{ item.duration }} days</p>
          </div>
          <p>With message: {{ item.message }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$store.state.saved.splice(index, 1)" color="rgb(74, 144, 226)" class="white--text">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<style>
  .cards {
    display: flex;
    justify-content: space-between;
  }
</style>

<script>

export default {
  name: "Saved",
  components: {

  },
  data: () => ({

  }),
};
</script>
