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
        <v-card-title class="text-h5"> Invite a member </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="form.name"
            name="name"
            label="Name"
            id="name"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            name="email"
            label="email"
            id="email"
          ></v-text-field>
          <span
            class="red--text"
            v-for="(value, name, index) in errors"
            :key="index"
            >{{ value[0] }}<br
          /></span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="invite">Invite</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="pb-2">
        <v-btn 
            color="primary"
            outlined
            block
            @click="dialog = true"
            title="Invite member"
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
      form: {
        name: '',
        description: '',
      },
      errors: {},
    };
  },
  methods: {
      invite(){
          this.dialog = false
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
};
</script>