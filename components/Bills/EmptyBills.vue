<template>
  <v-card
    class="mx-auto"
  >

    <v-card-title v-if="this.$auth.user.active_group_id">
      Create your first bill
    </v-card-title>
    <v-card-title v-else>
      Set an active group first!
    </v-card-title>

    <v-card-subtitle>
      Click to add a new bill!
    </v-card-subtitle>

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
}
</script>