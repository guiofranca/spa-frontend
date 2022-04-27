<template>
  <v-card
    class="mx-auto"
  >

    <v-card-title v-if="this.$auth.user.data.active_group_id">
      Crie uma despesa!
    </v-card-title>
    <v-card-title v-else>
      Você precisa estar em um grupo!
    </v-card-title>

    <v-card-subtitle>
      Adicione uma nova despesa!
    </v-card-subtitle>

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
}
</script>