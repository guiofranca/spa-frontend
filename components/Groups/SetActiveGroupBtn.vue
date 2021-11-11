<template>
  <div class="pr-2">
    <v-btn
        :color="btnColor"
        @click="setActive"
      >
        {{btnText}}
      </v-btn>
  </div>
</template>
<script>
export default {
  props: ['group'],
  computed: {
    isActive(){
      return this.$auth.user.data.active_group_id == this.group.id
    },
    btnColor() {
      return this.isActive ? 'success' : 'primary'
    },
    btnText() {
      return this.isActive ? 'Active' : 'Set active'
    }
  },
  methods:{
    async setActive() {
      if(this.isActive) {
        return
      }
      await this.$axios.$patch(`/user/activegroup`, {active_group_id: this.group.id})
      .then(r => {
          this.$notifier.showMessage({ content: r.message, color: 'success' })
          this.$auth.fetchUser()
      })
    }
  },
};
</script>