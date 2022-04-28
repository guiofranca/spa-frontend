<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                Vamos dividir umas Continhas!
            </v-card-title>
            <v-card-text>
                Você foi convidado para o grupo <b>{{name}}</b>!
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="accept(1)">Aceitar</v-btn>
                <v-btn color="error" @click="accept(0)">Rejeitar</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    async mounted() {
        await this.$axios.$get(`/group_invitation/${this.$route.params.token}`)
            .then(r => this.name = r.group.name)
    },
    methods: {
        async accept(accepted) {
            await this.$axios.$patch(`/group_invitation/${this.$route.params.token}`, {accepted: accepted})
                .then(r => {
                    this.$notifier.showMessage({ content: r.message, color: 'success' })
                    this.$router.push('/groups')
                })
                .catch(r => this.$notifier.showMessage({ content: r.response.data.message, color: 'error' }))
        }
    }
}
</script>
