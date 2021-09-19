<template>
  <div>
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Application Roadmap</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-timeline dense align-top>
          <v-timeline-item
            v-for="feature in selectedFeatures()"
            :key="feature.name"
            :color="feature.color"
            justify="center"
          >
            {{ feature.name }}
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
      <v-card-text>
        <v-btn color="primary" block @click="can = !can" outlined>
          Can be done right away
          <v-spacer></v-spacer>
          <v-icon v-if="can">mdi-checkbox-outline</v-icon>
          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
        </v-btn>
        <v-btn color="error" block @click="must = !must" outlined>
          Must be done right away
          <v-spacer></v-spacer>
          <v-icon v-if="must">mdi-checkbox-outline</v-icon>
          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
        </v-btn>
        <v-btn color="warning" block @click="wait = !wait" outlined>
          Waiting for another development
          <v-spacer></v-spacer>
          <v-icon v-if="wait">mdi-checkbox-outline</v-icon>
          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
        </v-btn>
        <v-btn color="success" block @click="done = !done" outlined>
          Done! (kind of)
          <v-spacer></v-spacer>
          <v-icon v-if="done">mdi-checkbox-outline</v-icon>
          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  methods:{
    selectedFeatures(){
      var can = this.can;
      var must = this.must;
      var wait = this.wait;
      var done = this.done;
      return this.features.filter(function(feature) {
        if(feature.color == "primary" && can) return true;
        if(feature.color == "error" && must) return true;
        if(feature.color == "success" && done) return true;
        if(feature.color == "warning" && wait) return true;

        return false;
      })
    }
  },
  data() {
    return {
      done: false,
      must: true,
      wait: true,
      can: true,
      features: [
        {
          name: "Create initial project for frontend and backend",
          color: "success",
        },
        {
          name: "Setup NuxtJs and Laravel with authentication",
          color: "success",
        },
        {
          name: "Setup docker environment for deploy on home network",
          color: "primary",
        },
        {
          name: "Make Docker environment Production ready",
          color: "error",
        },
        {
          name: "Make the application name and logo",
          color: "primary",
        },
        {
          name: "Design better group page",
          color: "primary",
        },
        {
          name: "Design better bills page",
          color: "primary",
        },
        {
          name: "Use JsonResource on backend",
          color: "primary",
        },
        {
          name: "Make the settlement functionality",
          color: "primary",
        },
        {
          name: "Design better settlement page",
          color: "warning",
        },
        {
          name: "Notify users in a group when a bill is created",
          color: "primary",
        },
      ],
    }
  },
};
</script>