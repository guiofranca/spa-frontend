<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                Let's share some bills!
            </v-card-title>
            <v-card-text>
                You've been invited to group <b>{{name}}</b>!
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="accept(1)">Accept</v-btn>
                <v-btn color="error" @click="accept(0)">Dismiss</v-btn>
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
                }
            )
        }
    }
}
</script>
