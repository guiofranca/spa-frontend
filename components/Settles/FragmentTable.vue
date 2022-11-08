<template>
    <div>
        <p class="font-weight-bold">Partes do acerto</p>
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
                    { text: 'Pessoa', value: 'name' },
                    { text: 'Contribuição', value: 'contribute' },
                    { text: 'Pagou', value: 'paid' },
                    { text: 'A receber', value: 'to_receive' },
                ],
            }
        },
    }
</script>