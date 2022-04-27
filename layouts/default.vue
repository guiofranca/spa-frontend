<template>
  <v-app dark>
    <Snackbar />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list class="">
        <div v-if="this.$auth.loggedIn">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
        
        <div class="">
          <DrawerUserAuthInfo />
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app fade-img-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn color="default" rounded fab small href="https://github.com/guiofranca/spa-backend" title="Backend" depressed><v-icon>mdi-github</v-icon></v-btn>
      <v-btn color="default" rounded fab small href="https://github.com/guiofranca/spa-frontend" title="Frontend" depressed><v-icon>mdi-github</v-icon></v-btn>
      
    </v-app-bar>
    <v-main class="success">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Bem-vindo",
          to: "/",
        },
        {
          icon: "mdi-account-multiple",
          title: "Grupos",
          to: "/groups",
        },
        {
          icon: "mdi-cash",
          title: "Despesas",
          to: "/bills",
        },
        {
          icon: "mdi-scale-balance",
          title: "Acertos",
          to: "/settles",
        },
      ],
      miniVariant: false,
      title: "Continhas",
    };
  },
  mounted() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      if (darkMode == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>
