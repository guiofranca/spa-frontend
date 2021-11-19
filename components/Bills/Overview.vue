<template>
    <v-card class="mx-auto mb-4">
        <v-card-text>
            <v-spacer></v-spacer>
            Total: {{total}}
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: ['bills'],
    setup() {
        
    },
    computed: {
      total() {
            if(this.bills == null) return 'Retrieving...'
            var total = this.bills.reduce(function(total, bill){
                console.log(bill)
                return total + parseFloat(bill.value)
            }, 0)
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(total)
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