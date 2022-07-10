<template>
  <div justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="500"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="text-h5"> Apagar acerto </v-card-title>
        <v-card-text class="d-flex flex-column">
          <span>Tem certeza?</span>
          <span>Não é possível desfazer!</span>
          <span>As despesas desse acerto voltarão para a lista</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="dialog = false">Cancelar</v-btn>
          <v-btn color="error" @click="destroy">Apagar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="pr-2">
      <v-chip
        color="error"
        class="ml-2"
        @click="dialog = true"
        title="Delete"
        :disabled="this.$auth.user.data.id != settle.group.owner_id"
      >
        <v-icon>mdi-delete</v-icon>
      </v-chip>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false
        }
    },
  props: ['settle'],
  methods:{
    async destroy() {
        await this.$axios.$delete(`/settles/${this.settle.id}`)
        .then(r => {
            this.$notifier.showMessage({ content: r.message, color: 'success' })
            $nuxt.$emit('settle-deleted', this.settle)
        })
        .catch(r => {
          this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
        })
    }
  },
};
</script>