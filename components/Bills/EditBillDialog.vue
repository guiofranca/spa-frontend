<template>
  <div>
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="290"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="text-h5"> Edit Bill </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="form.description"
              name="description"
              label="Description"
              id="description"
              prepend-icon="mdi-text-box"
          ></v-text-field>
          <v-text-field
              v-model="form.value"
              name="value"
              label="value"
              id="value"
              inputmode="numeric"
              prepend-icon="mdi-currency-usd"
              v-money="money"
          ></v-text-field>
          <v-text-field
              v-model="form.category_id"
              name="category"
              label="category"
              id="category"
              prepend-icon="mdi-tag"
          ></v-text-field>
          
          
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
            label="Date"
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
          <v-btn color="secondary" @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="create">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      color="primary"
      rounded
      @click="dialog = true"
      title="Edit bill"
      icons-and-text
      fab
      small
      :disabled="!canEdit"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>
<script>


export default {
  props: ['bill'],
  computed: {
    canEdit(){
      if(this.bill.user){
        return this.$auth.user.id == this.bill.user.id
      }
      return true
    }
  },
  data() {
    return {
      dialog: false,
      form: {
          description: this.bill.description,
          value: this.bill.value,
          category_id: this.bill.category_id,
          paid_at: this.bill.paid_at,
      },
      errors: {},
      money: {
        decimal: '.',
        thousands: '',
        prefix: '',
        precision: 2,
        masked: true /* doesn't work with directive */
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      showDatePicker: false,
    };
  },
  methods:{
      async create(){
          await this.$axios.$patch(`/bills/${this.bill.id}`, this.form)
          .then(r => {
              this.$notifier.showMessage({ content: r.message, color: 'success' })
              this.dialog = false
              this.errors = {}
              $nuxt.$emit('bill-updated', r.bill)
          })
          .catch(r => {
            this.$notifier.showMessage({ content: r.response.data.message, color: 'error' })
            this.errors = r.response.data.errors
          })
      }
  },
};
</script>