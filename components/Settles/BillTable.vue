<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="settle.bills"
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
                    { text: 'Date', value: 'paid_at' },
                    { text: 'Person', value: 'user.name' },
                    { text: 'Description', value: 'description' },
                    { text: 'Category', value: 'category.name' },
                    { text: 'Value', value: 'value' },
                ],
            }
        },
    }
</script>