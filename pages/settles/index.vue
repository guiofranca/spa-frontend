<template>
    <v-container>
        <v-card>
            <v-card-title primary-title>
                Settles
            </v-card-title>
            <v-card-text>
                <div v-if="settles">
                    <settles-table :settles="settles" />
                </div>
                <div v-else>
                    <v-skeleton-loader type="table"></v-skeleton-loader>
                </div>
                <div v-if="settles && settles.length == 0">
                    <v-col cols="12" md="8" lg="6">
                        No settles here
                    </v-col>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import SettlesTable from '../../components/Settles/SettlesTable.vue';
export default {
  components: { SettlesTable },
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
    $nuxt.$on("settle-deleted", (settle) => {
      this.settles = this.settles.filter(function (s) {
        return settle.id != s.id
      })
    })
  },
}
</script>