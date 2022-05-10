<template>

    <div class="">
        <div class="">
            <div class="d-flex justify-space-between">
                <div class="">
                    <span>
                        {{member.name}}
                    </span>
                </div>
                <div class="">
                    <span class="px-4" title="Contribuição">
                        {{member.contribution}}
                    </span>
                    <v-btn
                        v-if="isOwner()"
                        class="mr-2"
                        small
                        outlined
                        color="primary"
                        title="Salvar"
                        @click="save"
                    >
                        <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="isOwner()"
                        small
                        outlined
                        color="error"
                        title="Remover membro"
                        @click="destroy"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <div>
            <v-slider
                v-if="isOwner()"
                label="Contribuição"
                v-model="member.contribution"
                thumb-label
            ></v-slider>
        </div>
    </div>
</template>

<script>
export default {
    props: ['member', 'group'],

    methods: {
        isOwner(){
            return this.$auth.user.data.id == this.group.owner_id
        },
        async save(){
            await this.$axios
            .$patch(`/group_members/${this.member.id}`, {contribution: this.member.contribution})
                .then((r) => {
                    this.$notifier.showMessage({ content: r.message, color: "success" });
                })
                .catch(r => {
                    this.$notifier.showMessage({content: r.response.data.message, color: "error"})
                })
        },
        async destroy(){
            await this.$axios.$delete(`/group_members/${this.member.id}`)
                .then((r) => {
                    this.$notifier.showMessage({ content: r.message, color: "success" });
                    this.group.group_members = this.group.group_members.filter((m) => {return m.id != this.member.id})
                })
                .catch(r => {
                    this.$notifier.showMessage({ content: r.response.data.message, color: "error" })
                })
        },
    },
};
</script>