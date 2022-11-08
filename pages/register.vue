<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-form @submit.prevent="register">
                    <v-toolbar dark color="primary">
                    <v-toolbar-title>Registrar em Continhas</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                            prepend-icon="mdi-account"
                            name="name"
                            label="Nome"
                            type="text"
                            v-model="form.name"
                        ></v-text-field>
                        <v-text-field
                            prepend-icon="mdi-email"
                            name="email"
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
                        <v-text-field
                            id="password_confirmation"
                            prepend-icon="mdi-lock"
                            name="password_confirmation"
                            label="Confirme a senha"
                            type="password"
                            v-model="form.password_confirmation"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-text v-if="errors">
                        <span class="red--text" v-for="(value, name, index) in errors" :key="index">{{value[0]}}<br/></span>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="default" type="button" to="/login">Login</v-btn>
                        <v-btn color="primary" type="submit">Registrar</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
   name: 'Register',
   auth: 'guest',
   data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            errors: {},
        }
    },
    methods: {
        async register() {
            this.error = null
            await this.$axios.$post('/auth/register', this.form)
                .catch(r => {
                    this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
                    this.errors = r.response.data.errors
                })

            if(this.error) return

            await this.$auth
                .loginWith('local', { 
                    data: this.form
                })
                .catch((e) => (this.error = e.response.data.detail))
        },
   }
};
</script>