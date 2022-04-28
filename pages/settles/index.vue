<template>
    <v-container>
        <div v-if="settles">
            <div 
                v-for="settle in settles"
                :key="settle.id"
                class="d-flex-column mb-8"
            >
                <SettlesCard :settle="settle" />
            </div>
        </div>
        <div v-else>
            <v-skeleton-loader type="card"></v-skeleton-loader>
        </div>
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