<template>
  <div class="">
    <div v-if="this.$auth.loggedIn">
      <v-btn to="/groups" v-if="this.$auth.user.active_group_id">
        <v-icon>mdi-account-multiple</v-icon>
        {{ this.$auth.user.active_group.name }}
      </v-btn>
      <v-btn to="/groups" v-else> <v-icon>mdi-plus</v-icon> Grupo </v-btn>
      <v-btn to="/profile" class="">
        {{ this.$auth.user.name }}
      </v-btn>
      <v-btn
        v-if="this.$auth.loggedIn"
        @click="logout"
        icon
        title="Sair"
        class=""
      >
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn to="/register"> Registrar </v-btn>
      <v-btn to="/login"> Login </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.logout().then((response) => this.$router.push("/login"));
    },
  },
};
</script>