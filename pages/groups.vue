<template>
  <v-container>
    <v-row v-if="groups">
      <v-col v-for="group in groups" :key="group.id" cols="12" md="8" lg="6">
        <GroupsGroupCard :group="group" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-skeleton-loader
          type="card"
          width="200"
      ></v-skeleton-loader>
    </v-row>
    <v-row v-if="groups && groups.length == 0">
      <v-col cols="12" md="8" lg="6">
        <GroupsEmptyGroups />
      </v-col>
    </v-row>
  <GroupsCreateGroupDialog />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      groups: null
    }
  },
  async mounted(){
    await this.$axios.$get('/groups')
    .then(r => this.groups = r.data)
    .catch(r => {
      this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
    })
  },
  created(){
      $nuxt.$on('group-created', (group) => {
          this.groups.push(group)
      })
      $nuxt.$on('group-deleted', (group) => {
        this.groups = this.groups.filter(function(g){
          return g.id != group.id
        })
      })
      $nuxt.$on('group-updated', (group) => {
        this.groups = this.groups.map(function(g){
          if(g.id == group.id){
            return group
          }
          return g
        })
      })
  }
}
</script>