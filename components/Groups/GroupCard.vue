<template>
  <v-card
    class="mx-auto"
  >

    <v-card-title>
      {{group.name}}
    </v-card-title>

    <v-card-subtitle>
      {{group.description}}
    </v-card-subtitle>

    <v-card-actions
      class="d-flex flex-row flex-wrap"
    >
      <div class="pr-2">
        <v-btn
          color="primary"
          :outlined="!showMembers"
          @click="showMembers = !showMembers"
          title="Members"
        >
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
      </div>

      <GroupsSetActiveGroupBtn :group="group" />
      <GroupsDestroyGroupBtn :group="group" v-if="this.$auth.user.id == group.owner_id"/>
      <GroupsEditGroupDialog :group="group" v-if="this.$auth.user.id == group.owner_id"/>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showMembers">
        <v-divider></v-divider>

        <v-card-text>
          <GroupsInviteMemberBtn :group="group" v-if="this.$auth.user.id == group.owner_id"/>
          <div v-for="user in group.users" :key="user.id">
              {{user.name}}
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
    props: ['group'],
    setup() {
        
    },
    data: () => ({
      showMembers: false,
    }),
    methods:{
        async destroy() {
            await this.$axios.$delete(`/groups/${this.group.id}`)
            .then(r => {
                this.$notifier.showMessage({ content: r.message, color: 'success' })
                $nuxt.$emit('group-deleted', this.group)
            })
        }
    }
}
</script>