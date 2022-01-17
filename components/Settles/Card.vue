<template>
  <v-card
    class="mx-auto"
  >
    <v-card-title>
        <v-icon>mdi-scale-balance</v-icon> {{settle.name}}
        <v-spacer></v-spacer>
        <v-chip :color="settle.settled ? 'success' : 'error'" @click="toggleSettled">{{settle.settled ? 'Settled' : 'Not Settled'}}</v-chip>
    </v-card-title>

    <v-card-subtitle>
        Bills: {{billCount}}
    </v-card-subtitle>

    <v-card-text>
        Total
        <v-chip>{{settle.total}}</v-chip>
        <v-spacer></v-spacer>
    </v-card-text>
    <v-card-text v-for="frag in settle.settleFragments" :key="frag.id">
        {{frag.name}}
        <v-chip v-if="frag.due > 0" color="error">${{frag.due}}</v-chip>
        <v-chip v-if="frag.to_receive > 0" color="success">${{frag.to_receive}}</v-chip>
    </v-card-text>

    <v-card-actions>
        <v-btn
            color="primary"
            text
            @click="show = !show"
        >
            Bills
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-for="bill in settle.bills" :key="bill.id">
          <v-chip>{{bill.paid_at}}</v-chip>
          <v-chip><v-icon>{{bill.category.icon}}</v-icon></v-chip>
          <v-chip>{{bill.description}}</v-chip>
          <v-chip>${{bill.value}}</v-chip>
          <v-chip>{{bill.user.name}}</v-chip>
          <v-divider style="margin-top: 10px"></v-divider>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
    props: ['settle'],
    setup() {
        
    },
    computed: {
      billCount() {
          return this.settle.bills.length;
      }
    },
    data: () => ({
      show: false,
    }),
    methods:{
        async destroy() {
            await this.$axios.$delete(`/settles/${this.settle.id}`)
            .then(r => {
                this.$notifier.showMessage({ content: r.message, color: 'success' })
                $nuxt.$emit('settle-deleted', this.settle)
            })
        },
        async toggleSettled() {
            await this.$axios.$patch(`/settles/${this.settle.id}`, {settled: !this.settle.settled})
            .then(r => {
                this.$notifier.showMessage({ content: r.message, color: 'success' })
                $nuxt.$emit('settle-updated', r.data)
            })
            .catch((r) => (this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })))
        }
    }
}
</script>