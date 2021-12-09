<template>
  <div>
    <v-container>
      <v-row v-if="settles">
        <v-col v-for="settle in settles" :key="settle.id" cols="12" md="4" lg="4">
          <SettlesCard :settle="settle" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-skeleton-loader type="card" width="200"></v-skeleton-loader>
      </v-row>
      <v-row v-if="settles && settles.length == 0">
        <v-col cols="12" md="8" lg="6">
          No settles here
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settles: null,
    };
  },
  async mounted() {
    await this.$axios.$get("/settles")
      .then((r) => (this.settles = r.data))
      .catch(r => {
          this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
      })
  },
  created() {
    $nuxt.$on("settle-updated", (settle) => {
      this.settles = this.settles.map(function (s) {
        if (s.id == settle.id) {
          return settle;
        }
        return s;
      })
    })
  },
}
</script>