<template>
  <v-card
    class="mx-auto"
  >
    <v-card-title>
      <v-icon>mdi-currency-usd</v-icon> {{bill.value}}
      <v-spacer></v-spacer>
      <v-chip :color="paidColor">{{paidText}}</v-chip>
    </v-card-title>

    <v-card-subtitle>
      {{bill.description}}
    </v-card-subtitle>

    <v-card-text>
      <v-chip :title="bill.category.name"><v-icon>{{bill.category.icon}}</v-icon></v-chip>
      <v-chip :color="userColor">{{userName}}</v-chip>
    </v-card-text>

    <v-card-actions
      class="d-flex flex-row flex-wrap"
    >

    <v-btn color="success" rounded>text</v-btn>
    <v-spacer></v-spacer>
    <BillsDestroyBillBtn :bill="bill" />
    <BillsEditBillDialog :bill="bill" :categories="categories" />

      <!-- <BillsDestroyBillBtn :bill="bill" />
      <BillsEditBillDialog :bill="bill" /> -->
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props: ['bill', 'categories'],
    setup() {
        
    },
    computed: {
      isPaid() {
        return this.bill.paid_at != null
      },
      paidText() {
        return this.isPaid ? this.bill.paid_at : 'Unpaid bill'
      },
      paidColor() {
        return this.isPaid ? 'success' : 'error'
      },
      userName() {
        return this.bill.user ? this.bill.user.name : 'Unknown'
      },
      userColor() {
        return this.bill.user ? 'default' : 'warning'
      }
    },
    data: () => ({
      //showMembers: false,
    }),
    methods:{
        async destroy() {
            await this.$axios.$delete(`/bills/${this.group.id}`)
            .then(r => {
                this.$notifier.showMessage({ content: r.message, color: 'success' })
                $nuxt.$emit('bill-deleted', this.bill)
            })
        }
    }
}
</script>