<template>
  <div>
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="290"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="text-h5"> Convidar </v-card-title>
        <v-card-text>
          <p>{{text}}</p>
          <p>{{url}}</p>
        </v-card-text>
        <v-card-actions v-if="!invited">
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" @click="invite">Convidar</v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="pb-2">
        <v-btn 
            color="primary"
            outlined
            block
            @click="dialog = true"
            title="Convidar"
            >
            <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: ["group"],
  data() {
    return {
      dialog: false,
      text: 'Criar um link de convite.',
      url: '<esperando convite!>',
      invited: false
    };
  },
  methods: {
      async invite(){
        await this.$axios.$post('/group_invitation', {group_id: this.group.id})
          .then(r => {
            this.$notifier.showMessage({ content: r.message, color: 'success' })
            this.text = "Ótimo! Agora copie e compartilhe o link abaixo."
            this.url = r.url
            this.invited = true
          }
        )
        .catch(r => this.$notifier.showMessage({ content: r.response.data.message, color: 'error' }))
      }
    /*async save() {
      await this.$axios
        .$patch(`/groups/${this.group.id}`, this.form)
        .then((r) => {
          this.$notifier.showMessage({ content: r.message, color: "success" });
          this.dialog = false;
          this.errors = {};
          $nuxt.$emit("group-updated", r.group);
          this.$auth.fetchUser();
        })
        .catch((r) => {
          this.$notifier.showMessage({
            content: r.response.data.message,
            color: "error",
          });
          this.errors = r.response.data.errors;
        });
    },*/
  },
  watch:{
    dialog:function(newValue){
      if(!newValue){
        this.text = 'Criar um link de convite.'
        this.url = '<esperando convite!>'
        this.invited = false
      }
    }
  }
};
</script>