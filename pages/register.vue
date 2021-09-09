<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-form @submit.prevent="register">
                    <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                            prepend-icon="mdi-account"
                            name="name"
                            label="Name"
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
                            label="Password"
                            type="password"
                            v-model="form.password"
                        ></v-text-field>
                        <v-text-field
                            id="password_confirmation"
                            prepend-icon="mdi-lock"
                            name="password_confirmation"
                            label="Confirm password"
                            type="password"
                            v-model="form.password_confirmation"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-text v-if="error" class="red--text">
                        {{error}}                        
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit">Register</v-btn>
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
                name: 'Joana',
                email: 'joana@hehe.comd',
                password: '123123123',
                password_confirmation: '',
            },
            error: null,
        }
    },
    methods: {
        async register() {
            this.error = null
            await this.$axios.$post('/auth/register', this.form)
                .catch((e) => (this.error = e.response.data.message))

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