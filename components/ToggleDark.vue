<template>
    <v-btn
        @click="toggleDarkMode"
    >
        Toggle Dark Mode!
    </v-btn>
</template>

<script>
export default {
    methods:{
        toggleDarkMode() {
            var dark = localStorage.getItem('darkMode') != "true"
            this.$vuetify.theme.dark = dark
            localStorage.setItem('darkMode', dark)
        }
    }

}
</script>