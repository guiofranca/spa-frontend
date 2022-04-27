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
                    { text: 'Data', value: 'paid_at' },
                    { text: 'Pessoa', value: 'user.name' },
                    { text: 'Descrição', value: 'description' },
                    { text: 'Categoria', value: 'category.name' },
                    { text: 'Valor', value: 'value' },
                ],
            }
        },
    }
</script>