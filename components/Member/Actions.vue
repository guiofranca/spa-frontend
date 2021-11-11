<template>

    <div class="d-flex justify-space-between">
        <v-slider
            v-if="isOwner()"
            :label="member.name"
            v-model="member.contribution"
            thumb-label
        ></v-slider>
        <span v-else>
            {{member.name}}
        </span>
        <span class="px-4" title="Contribution">
            {{member.contribution}}
        </span>
        <v-btn
            v-if="isOwner()"
            class="mr-2"
            small
            outlined
            color="primary"
            title="Save"
            @click="save"
        >
            <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn
            v-if="isOwner()"
            small
            outlined
            color="error"
            title="Remove Member"
            @click="remove"
        >
            <v-icon>mdi-delete</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props: ['member', 'group'],

    methods: {
        isOwner(){
            return this.$auth.user.id == this.group.owner_id
        },
        save(){
            this.$notifier.showMessage({ content: "Saved!", color: 'success' })
        },
        remove(){
            this.$notifier.showMessage({ content: "Member removed!", color: 'success' })
        },
    },
};
</script>