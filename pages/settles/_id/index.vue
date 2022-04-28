<template>
<div>
    <div v-if="typeof(settle) === 'undefined'">
        <v-skeleton-loader type="table"></v-skeleton-loader>
    </div>
    <div v-else>
        <v-row md="4">
            <v-col>
                <v-card class="ma-2">
                    <v-card-title>
                        <nuxt-link :to="`/settles/${settle.id}/edit`">{{settle.name}}</nuxt-link>
                        <v-spacer></v-spacer>
                        ${{settle.total}}
                    </v-card-title>
                </v-card>
                <v-card class="ma-2">
                    <v-card-title>
                        Settle Fragments
                    </v-card-title>
                    <v-card-text>
                        <SettlesFragmentTable :settle="settle"/>                        
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="ma-2">
                    <v-card-title>
                        Bills by category
                    </v-card-title>
                    <v-card-text>
                        <SettlesChart :settle="settle"/>                        
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-card class="ma-2">
            <v-card-title>
                Bills
            </v-card-title>
            <v-card-text>
                <SettlesBillTable :settle="settle"/>                
            </v-card-text>
        </v-card>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            settle: undefined
        }
    },
    async mounted() {
    await this.$axios.$get(`/settles/${this.$route.params.id}`)
        .then((r) => (this.settle = r.data))
        .catch(r => {
            this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
        })
  },
}
</script>
