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
        <v-card-title class="text-h5"> Apagar despesa </v-card-title>
        <v-card-text class="d-flex flex-column">
          <span>Tem certeza?</span>
          <span>Não é possível desfazer!</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="dialog = false">Cancelar</v-btn>
          <v-btn color="error" @click="destroy">Apagar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="pr-2">
      <v-btn
        color="error"
        fab
        small
        @click="dialog = true"
        title="Delete"
        :disabled="this.$auth.user.data.id != bill.user_id"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
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
  props: ['bill'],
  methods:{
    async destroy() {
        await this.$axios.$delete(`/bills/${this.bill.id}`)
        .then(r => {
            this.$notifier.showMessage({ content: r.message, color: 'success' })
            $nuxt.$emit('bill-deleted', this.bill)
        })
        .catch(r => {
          this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
        })
    }
  },
};
</script>