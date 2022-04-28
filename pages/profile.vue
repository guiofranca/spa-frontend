<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-form @submit.prevent="updateProfile">
                    <v-toolbar dark color="primary">
                    <v-toolbar-title>Meu perfil</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            prepend-icon="mdi-account"
                            name="name"
                            label="Nome"
                            type="text"
                            v-model="user.name"
                        ></v-text-field>
                        <v-text-field
                            prepend-icon="mdi-email"
                            name="email"
                            label="E-mail"
                            type="text"
                            v-model="user.email"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-text v-if="error" class="red--text">
                        {{error}}                        
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        color="blue"
                        text
                        @click="show = !show"
                    >
                        Mudar senha
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                    <div v-show="show">
                        <v-card-text>
                            
                        <v-text-field
                            id="current_password"
                            prepend-icon="mdi-lock"
                            name="current_password"
                            label="Senha atual"
                            type="password"
                            v-model="changePassword.current_password"
                        ></v-text-field>
                        <v-text-field
                            id="password"
                            prepend-icon="mdi-lock"
                            name="password"
                            label="Nova senha"
                            type="password"
                            v-model="changePassword.password"
                        ></v-text-field>
                        <v-text-field
                            id="password_confirmation"
                            prepend-icon="mdi-lock"
                            name="password_confirmation"
                            label="Confirme a nova senha"
                            type="password"
                            v-model="changePassword.password_confirmation"
                        ></v-text-field>
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit">Salvar</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
   name: 'Profile',
   data() {
        return {
            user: {
                name: this.$auth.user.data.name,
                email: this.$auth.user.data.email,
            },
            error: null,
            show: false,
            changePassword:{
                current_password: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    methods: {
        async updateProfile() {
            this.error = null
            var update = {
                name: this.user.name,
                email: this.user.email
            }
            if(
                this.changePassword.current_password
                && this.changePassword.password
                && this.changePassword.password_confirmation
            )
            {
                update.current_password = this.changePassword.current_password
                update.password = this.changePassword.password
                update.password_confirmation = this.changePassword.password_confirmation
            }

            await this.$axios.$patch('/user', update)
                .then(response => this.$notifier.showMessage({ content: response.message, color: 'success' }))
                .catch(e => this.$notifier.showMessage({ content: e.response.data.message, color: 'error' }))

            if(this.error) return

            this.$auth.fetchUser()
        },
   }
};
</script>