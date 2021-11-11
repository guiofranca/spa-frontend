<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="290"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="text-h5"> Create a new Group </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="form.name"
              name="name"
              label="Name"
              id="name"
          ></v-text-field>
          <v-text-field
              v-model="form.description"
              name="description"
              label="Description"
              id="description"
          ></v-text-field>
          <span class="red--text" v-for="(value, name, index) in errors" :key="index">{{value[0]}}<br/></span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="closeDialogAndClearInputs">Cancel</v-btn>
          <v-btn color="primary" @click="create">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      color="primary"
      fab
      large
      dark
      bottom
      right
      fixed
      @click="dialog = true"
      title="Create a new Group"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      form: {
          name: '',
          description: ''
      },
      errors: {}
    };
  },
  methods:{
      async create(){
          await this.$axios.$post('/groups', this.form)
          .then(r => {
              this.$notifier.showMessage({ content: r.message, color: 'success' })
              this.closeDialogAndClearInputs()
              this.errors = {}
              $nuxt.$emit('group-created', r.data)
          })
          .catch(r => {
            this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
            this.errors = r.response.data.errors
          })
      },
      closeDialogAndClearInputs(){
        this.dialog = false
        this.form.name = ''
        this.form.description = ''
        this.errors = {}
      }
  },
};
</script>