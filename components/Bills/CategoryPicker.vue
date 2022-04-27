<template>
    <div class="">
        <span>{{categoryLabel}}</span>
        <div>
            <v-btn 
                v-for="category in categories" 
                :key="category.id"
                :color="categoryColor(category)"
                fab
                small
                elevation="0"
                :title="category.name"
                @click="select(category)"
            ><v-icon>{{category.icon}}</v-icon></v-btn>
        </div>
        <v-skeleton-loader
            v-if="categories === null"
            type="list-item-two-line"
        ></v-skeleton-loader>
    </div>
</template>
<script>
export default {
    props: ['bill', 'categories'],
    data() {
        return {
            selectedCategoryId: null,
            selectedCategoryName: null,
        }
    },
    computed: {
        categoryLabel(){
            return this.selectedCategoryName ? `Categoria: ${this.selectedCategoryName}` : 'Categoria'
        }
    },
    methods:{
        select(category){
            this.selectedCategoryId = category.id
            this.selectedCategoryName = category.name
            $nuxt.$emit(`category-picker-${this.bill ? this.bill.id : 'create'}`, category)
        },
        categoryColor(category){
            return category.id == this.selectedCategoryId ? 'primary' : 'default'
        }
    },
    mounted(){
        if(this.bill){
            this.selectedCategoryId = this.bill.category.id
            this.selectedCategoryName = this.bill.category.name
        }
    }
}
</script>
