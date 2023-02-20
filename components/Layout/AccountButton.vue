<template>
    <v-speed-dial
        class="v-btn"
        >
        <template v-slot:activator>
            <v-btn
                v-if="$auth.loggedIn"
            >
                <span style="margin-top: 1px">{{$auth.user.data.name}}</span>
                <avatar :fullname="$auth.user.data.name" :size="25" color="#596fff"></avatar>
            </v-btn>
            <v-btn 
                v-else
                to="/login"
            >
                <span>Entrar</span>
                <v-icon>mdi-login</v-icon>
            </v-btn>
        </template>
        <LayoutLoggedInButtons v-if="$auth.loggedIn" />
    </v-speed-dial>
</template>
<script>
import Avatar from 'vue-avatar-component'
export default {
    components: { Avatar },
    data() {
        return {
            openAccount: false,
        }
    },
    methods: {
        logout() {
            this.$auth.logout().then((response) => this.$router.push("/"));
        },
    }
}
</script>