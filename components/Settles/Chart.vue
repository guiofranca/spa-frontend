<template>
    <div class="">
        <client-only>
            <doughnut-chart :data="data" :options="options"></doughnut-chart>
        </client-only>
    </div>
</template>

<script>
export default {
    props: ['settle'],
    computed: {
        options() {
            return {
                responsive: true,
                maintainAspectRatio: false
            }
        },
        data() {
            return {
                labels: this.getCategories(this.settle.bills),
                datasets: [{
                    label: 'My First Dataset',
                    data: this.getTotalValueByCategory(this.settle.bills),
                    backgroundColor: this.$chartColor.get(this.getCategories(this.settle.bills)),
                    hoverOffset: 4
                }]
            }
        }
    },
    methods: {
        getCategories(bills) {
            return bills.reduce(function(arr, bill){
                if(!arr.includes(bill.category.name)) arr.push(bill.category.name)
                return arr
            },[])
        },
        getTotalValueByCategory(bills) {
            let categories = this.getCategories(bills)
            return categories.map(function(category) {
                return bills.reduce(function(acc, bill) {
                    if(bill.category.name == category) return acc + parseFloat(bill.value)
                    return acc
                }, 0)
            })
        }
    }
}
</script>