<template>
    <v-card>
        <v-card-title>
            Editar acerto
        </v-card-title>
        <v-card-text>
            <v-text-field
                name="name"
                v-model="form.name"
                label="Name"
                id="id"
            ></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/settles">Cancelar</v-btn>
            <v-btn color="success" @click="update()">Salvar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
            }
        }
    },
    async mounted() {
        await this.$axios.$get(`/settles/${this.$route.params.id}`)
            .then((r) => {
                this.form.name = r.data.name
            })
            .catch(r => {
                this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
            })
    },
    methods: {
        async update() {
            await this.$axios
                .$patch(`/settles/${this.$route.params.id}`, this.form)
                .then((r) => {
                    this.$notifier.showMessage({ content: r.message, color: "success" });
                    this.$router.push(`/settles/${this.$route.params.id}`)
                })
                .catch((r) => {
                    this.$notifier.showMessage({ content: r.response.data.message, color: "error" });
                });
        },
    }
}
</script>
