<template>
    <v-container
        fill-height
        justify-center
    >        
        <v-btn
            rounded
            dark
            color="primary"
            to="/profile"
        >
            <span>Perfil</span>
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
            rounded
            dark
            color="primary"
            @click="logout"
        >
            <span>Sair</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-container>
</template>
<script>
export default {
    methods: {
        logout() {
            this.$auth.logout()
                .then(() => this.$router.push("/"))
                .catch(r => {
                    this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
                })
        },
    },
}
</script>