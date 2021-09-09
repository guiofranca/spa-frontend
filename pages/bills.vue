<template>
<div>
  <v-container>
    <v-row>
      <v-col v-for="bill in bills" :key="bill.id" cols="12" md="4" lg="4">
        <BillsBillCard :bill="bill" />
      </v-col>
    </v-row>
    <v-row v-if="bills.length == 0">
      <v-col cols="12" md="8" lg="6">
        <BillsEmptyBills />
      </v-col>
    </v-row>
  </v-container>
  <BillsCreateBillDialog />
</div>
</template>

<script>
export default {
  data() {
    return {
      bills: []
    }
  },
  async mounted(){
    await this.$axios.$get('/bills')
    .then(r => this.bills = r)
  },
  created(){
      $nuxt.$on('bill-created', (bill) => {
          this.bills.push(bill)
      })
      $nuxt.$on('bill-deleted', (bill) => {
        this.bills = this.bills.filter(function(b){
          return b.id != bill.id
        })
      })
      $nuxt.$on('bill-updated', (bill) => {
        this.bills = this.bills.map(function(b){
          if(b.id == bill.id){
            return bill
          }
          return b
        })
      })
  }
}
</script>