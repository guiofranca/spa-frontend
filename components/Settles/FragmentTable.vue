<template>
    <div>
        <p class="font-weight-bold">Settle Fragments</p>
        <v-data-table
            :headers="headers"
            :items="settle.settleFragments"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </div>
</template>
<script>
    export default {
        props: ['settle'],
        data () {
            return {
                headers: [
                    { text: 'Person', value: 'name' },
                    { text: 'Contribute', value: 'contribute' },
                    { text: 'Paid', value: 'paid' },
                    { text: 'To receive', value: 'to_receive' },
                ],
            }
        },
    }
</script>