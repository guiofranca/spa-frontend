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
      <GroupsDestroyGroupBtn :group="group" v-if="this.$auth.user.data.id == group.owner_id"/>
      <GroupsEditGroupDialog :group="group" v-if="this.$auth.user.data.id == group.owner_id"/>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showMembers">
        <v-divider></v-divider>

        <v-card-text>
          <MemberInviteBtn :group="group" v-if="this.$auth.user.data.id == group.owner_id"/>
          <div v-for="member in group.group_members" :key="member.user_id">
              <MemberActions :member="member" :group="group" />
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
            .catch(r => {
              this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
            })
        }
    }
}
</script>