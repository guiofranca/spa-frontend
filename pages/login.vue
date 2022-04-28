<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-form @submit.prevent="login">
                    <v-toolbar dark color="primary">
                    <v-toolbar-title>Entrar em Continhas</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                            prepend-icon="mdi-account"
                            name="login"
                            label="E-mail"
                            type="text"
                            v-model="form.email"
                        ></v-text-field>
                        <v-text-field
                            id="password"
                            prepend-icon="mdi-lock"
                            name="password"
                            label="Senha"
                            type="password"
                            v-model="form.password"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-text v-if="error" class="red--text">
                        {{error}}                        
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="default" type="button" to="/register">Registrar</v-btn>
                        <v-btn color="primary" type="submit">Entrar</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
   name: 'Login',
   auth: 'guest',
   data() {
        return {
            form: {
                email: '',
                password: '',
            },
            error: null,
        }
    },
    methods: {
        async login() {
            this.error = null
            await this.$auth
                .loginWith('local', { 
                    data: this.form
                })
                .catch((e) => (this.error = e.response.data.detail))
        },
   }
};
</script>