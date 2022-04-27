<template>
  <div class="">
    <div v-if="this.$auth.loggedIn">
      <v-list-item
        v-if="this.$auth.user.data.active_group_id"
      >
        <v-list-item-action>
          <v-icon>mdi-cash-register</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="this.$auth.user.data.active_group.name" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-else
        to="/groups"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Group'" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        @click="toggleDarkMode"
      >
        <v-list-item-action>
          <v-icon>mdi-brightness-6</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Modo escuro'" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/profile">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="this.$auth.user.data.name" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        @click="logout"
      >
        <v-list-item-action>
          <v-icon>mdi-export</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Sair'" />
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-else>
      <v-list-item
        to="/register"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Register'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        to="/Login"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Sair'" />
        </v-list-item-content>
      </v-list-item>
    </div>

  </div>
  
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.logout().then((response) => this.$router.push("/login"));
    },
    toggleDarkMode() {
      var dark = localStorage.getItem('darkMode') != "true"
      this.$vuetify.theme.dark = dark
      localStorage.setItem('darkMode', dark)
    },
  },
};
</script>