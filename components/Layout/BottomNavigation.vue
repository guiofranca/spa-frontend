<template>
    <v-bottom-navigation 
        v-model="value" 
        app 
        grow
        background-color="#7F92FF"
        dark
    >
        <v-btn 
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
        >
            <span>{{item.title}}</span>
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
        <LayoutAccountButton />
    </v-bottom-navigation>
</template>
<script>
export default {
    data() {
        return {
            value: 'Despesas',
            items: [
                {
                    icon: "mdi-apps",
                    title: "Bem-vindo",
                    to: "/",
                },
                {
                    icon: "mdi-account-multiple",
                    title: "Grupos",
                    to: "/groups",
                },
                {
                    icon: "mdi-cash",
                    title: "Despesas",
                    to: "/bills",
                },
                {
                    icon: "mdi-scale-balance",
                    title: "Acertos",
                    to: "/settles",
                },
            ],
        };
    },
};
</script>