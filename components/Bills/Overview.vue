<template>
    <v-card class="mx-auto mb-4">
        <v-card-text>
            <div class="d-flex justify-space-between align-center">
            <span class="headline">Total: {{total}}</span>
            <v-btn color="success" :disabled="settling" @click="create">Fazer acerto</v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: ['bills'],
    data() {
        return {
            settling: false,
        }
    },
    setup() {
        
    },
    computed: {
      total() {
            if(this.bills == null) return 'Buscando...'
            var total = this.bills.reduce(function(total, bill){
                return total + parseFloat(bill.value)
            }, 0)
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(total)
        }
    },
    methods: {
        async create() {
            this.settling = true
            await this.$axios.$post('/settles', {name: 'settle'})
            .then(r => {
                this.$notifier.showMessage({ content: r.message, color: 'success' })
                this.errors = {}
                $nuxt.$emit('settle-created', r.data)
            })
            .catch(r => {
                this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
                this.errors = r.response.data.errors
            })
            this.settling = false
        }
    }
}
</script>