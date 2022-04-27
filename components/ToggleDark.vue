<template>
    <v-btn
        @click="toggleDarkMode"
    >
        Alternar modo escuro
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