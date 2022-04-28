<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Bem-vindos!</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          Passo a passo para o sucesso:
          <ul>
            <li>Registre-se</li>
            <li>Crie um grupo</li>
            <li>Marque-o como ativo</li>
            <li>Convide seus amigos</li>
            <li>Registre despesas</li>
            <li>Faça um acerto</li>
            <li>Profit!</li>
          </ul>
        </v-card-text>
        <v-card-text>
          Esse é um projeto caseiro para divisão de despesas!
        </v-card-text>
        <v-card-text>
          A API é feita com Laravel.
        </v-card-text>
        <v-card-text>
          Aqui, usamos Nuxt com Vuetify!
        </v-card-text>
        <v-card-text>
          Mais detalhes nos links dos repositórios de cógido da aplicação: 
        </v-card-text>
        <v-card-text>
          <v-btn href="https://github.com/guiofranca/spa-backend" target="_blank">Backend <v-icon>mdi-github</v-icon></v-btn>
          <v-btn href="https://github.com/guiofranca/spa-frontend" target="_blank">Frontend <v-icon>mdi-github</v-icon></v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  auth: false,
  //layout: 'mobile'
}
</script>
