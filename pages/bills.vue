<template>
  <div>
    <v-container>
      <BillsOverview :bills="bills"/>
      <v-row v-if="bills">
        <v-col v-for="bill in bills" :key="bill.id" cols="12" md="4" lg="4">
          <BillsBillCard :bill="bill" :categories="categories" :enableEdit="true"/>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" md="4" lg="4">
          <v-skeleton-loader type="list-item-avatar-two-line" class="mb-3"></v-skeleton-loader>
          <v-skeleton-loader type="list-item-avatar-two-line" class="mb-3"></v-skeleton-loader>
          <v-skeleton-loader type="list-item-avatar-two-line" class="mb-3"></v-skeleton-loader>
          <v-skeleton-loader type="list-item-avatar-two-line" class="mb-3"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-if="bills && bills.length == 0">
        <v-col cols="12" md="8" lg="6">
          <BillsEmptyBills />
        </v-col>
      </v-row>
    </v-container>
    <BillsCreateBillDialog :categories="categories" :bills="bills" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bills: null,
      categories: null,
    };
  },
  async mounted() {
    await this.$axios.$get("/bills")
      .then((r) => (this.bills = r.data))
      .catch(r => {
        this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
      })
    await this.$axios.$get(`/categories`)
      .then((r) => (this.categories = r.data))
      .catch(r => {
        this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
      })
  },
  created() {
    $nuxt.$on("bill-created", (bill) => {
      this.bills.unshift(bill);
    })
    $nuxt.$on("bill-deleted", (bill) => {
      this.bills = this.bills.filter(function (b) {
        return b.id != bill.id;
      })
    })
    $nuxt.$on("settle-created", () => {
      this.bills = []
    })
    $nuxt.$on("bill-updated", (bill) => {
      this.bills = this.bills.map(function (b) {
        if (b.id == bill.id) {
          return bill;
        }
        return b;
      })
    })
  },
}
</script>