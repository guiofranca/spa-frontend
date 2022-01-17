<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="tableData"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:[`item.settled`]="{ item }">
                <v-btn
                    icon
                    color="primary"
                    title="Toggle Settle"
                    @click="toggleSettled(item.settle)"
                >
                    <v-icon v-if="item.settle.settled">mdi-check</v-icon>
                    <v-icon v-else>mdi-timer-sand-empty</v-icon>
                </v-btn>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-btn
                    icon
                    color="primary"
                    title="Edit"
                    :to="`settles/${item.id}/edit`"
                >
                    <v-icon>mdi-pen</v-icon>
                </v-btn>
                <v-btn
                    icon
                    color="primary"
                    title="View"
                    :to="`settles/${item.id}`"
                >
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                    icon
                    color="error"
                    title="Destroy"
                    @click="destroySettle(item.settle)"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>
<script>
    export default {
        props: ['settles'],
        data () {
            return {
                headers: [
                    { text: 'Name', value: 'name' },
                    { text: 'Date', value: 'date' },
                    { text: 'Bills', value: 'bills' },
                    { text: 'Group', value: 'group' },
                    { text: 'Settled', value: 'settled' },
                    { text: 'Total', value: 'total' },
                    { text: 'Actions', value: 'actions', align: 'right' },
                ],
            }
        },
        computed: {
            tableData() {
                return this.settles.map(function(settle) {
                    return {
                        id: settle.id,
                        name: settle.name,
                        bills: settle.bills.length,
                        group: settle.group.name,
                        total: settle.total,
                        date: settle.date ? (new Date(settle.date)).toLocaleDateString() : '',
                        settled: settle.settled ? 'Yes' : 'No',
                        actions: null,
                        settle: settle
                    }
                })
            }
        },
        methods: {
            async toggleSettled(settle) {
                await this.$axios.$patch(`/settles/${settle.id}`, {settled: !settle.settled})
                .then(r => {
                    this.$notifier.showMessage({ content: r.message, color: 'success' })
                    $nuxt.$emit('settle-updated', r.data)
                })
                .catch((r) => (this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })))
            },
            async destroySettle(settle) {
                if(!confirm('Are you sure? All bills settled will return to unsettled!')) return
                await this.$axios.$delete(`/settles/${settle.id}`)
                .then(r => {
                    this.$notifier.showMessage({ content: r.message, color: 'success' })
                    $nuxt.$emit('settle-deleted', settle)
                })
                .catch((r) => (this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })))
            }
        }
    }
</script>