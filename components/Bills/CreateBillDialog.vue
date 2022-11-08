<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="290"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="text-h5"> Registrar despesa </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="form.description"
              name="description"
              label="Descrição"
              id="description"
              prepend-icon="mdi-text-box"
          ></v-text-field>
          <v-text-field
              v-model="form.value"
              name="value"
              label="Valor"
              id="value"
              inputmode="numeric"
              prepend-icon="mdi-currency-usd"
              v-money="form.value === null ? null : money"
          ></v-text-field>
          <BillsCategoryPicker :categories="categories" />
          
          
      <v-dialog
        ref="dialog"
        v-model="showDatePicker"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="form.paid_at"
            label="Data"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.paid_at"
          scrollable
          @input="showDatePicker = false"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="showDatePicker = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
      
          <span class="red--text" v-for="(value, name, index) in errors" :key="index">{{value[0]}}<br/></span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="closeDialogAndClearInputs">Cancelar</v-btn>
          <v-btn color="primary" @click="create" :disabled="creating">Criar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      color="primary"
      fab
      large
      dark
      bottom
      right
      fixed
      @click="dialog = true"
      style="z-index:100; bottom:72px;"
      title="Registrar despesa"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="duplicatedDialog"
      :overlay="true"
      max-width="500"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="text-h5"> Despesa repetida? </v-card-title>
        <v-card-text class="d-flex flex-column">
          <span>Existem despesas com o mesmo valor</span>
          <span>Registrar mesmo assim?</span>
        </v-card-text>
        <v-card-text v-for="bill in duplicatedBills" :key="bill.id">
          <BillsBillCard :bill="bill" :categories="categories" :enableEdit="false" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="duplicatedDialog = false">Cancelar</v-btn>
          <v-btn color="success" @click="create(false)">Registrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

import moment from 'moment'
export default {
  props: ['categories', 'bills'],
  data() {
    return {
      dialog: false,
      duplicatedDialog: false,
      form: {
          description: '',
          value: null,
          category_id: null,
          paid_at: moment().format('YYYY-MM-DD'),
      },
      errors: {},
      money: {
        decimal: '.',
        thousands: '',
        prefix: '',
        precision: 2,
        masked: true /* doesn't work with directive */
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
      showDatePicker: false,
      creating: false,
    };
  },
  methods:{
      async create(promptDuplicatedBill = true){
        if(!promptDuplicatedBill && this.duplicatedDialog) this.duplicatedDialog = false
        
        if(this.hasDuplicatedBills && promptDuplicatedBill) {
          this.duplicatedDialog = true
          return
        }
        
        this.creating = true
        await this.$axios.$post('/bills', this.form)
        .then(r => {
            this.$notifier.showMessage({ content: r.message, color: 'success' })
            this.closeDialogAndClearInputs()
            this.errors = {}
            $nuxt.$emit('bill-created', r.data)
        })
        .catch(r => {
          this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
          this.errors = r.response.data.errors
        })
        this.creating = false
      },
      closeDialogAndClearInputs(){
        this.dialog = false
        this.form.value = null
        this.form.description = null
        this.form.category = null
        this.form.paid_at = moment().format('YYYY-MM-DD'),
        this.errors = {}
      }
  },
  computed: {
    duplicatedBills() {
      if(this.bills == null) return []
      return this.bills.filter((bill) => bill.value == this.form.value)
    },
    hasDuplicatedBills() {
      return this.duplicatedBills.length > 0
    }
  },
  created(){
      $nuxt.$on('category-picker-create', (category) => {
          this.form.category_id = category.id
      })
  }
};
</script>