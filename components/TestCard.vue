<template>
    <v-card>
        <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text v-tooltip="'Nuxt is Awesome'">
            Corpo do cartão
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn
                v-if="previous"
                color="primary"
                nuxt
                :to="previous"
            >
                Previous
            </v-btn>
            <v-btn
                v-if="next"
                color="primary"
                nuxt
                :to="next"
            >
                Next
            </v-btn>
            <ToggleDark />
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['next', 'previous']
}
</script>