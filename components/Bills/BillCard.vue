<template>
    <v-card
      color="#1F7087"
      dark
      @click="openEditDialog"
      style="height: 100%"
      class="d-flex"
    >
      <div class="d-flex flex-no-wrap align-center">
        <div 
          style="position: relative"
        >
          <v-avatar
            class="ma-3"
            size="50"
            color="success"
          >
            <v-icon>{{bill.category.icon}}</v-icon>
          </v-avatar>
          <div
            style="position: absolute; top: 5px; left: 5px;"
          >
            <avatar :fullname="userName" :size="25" class="success darken-1"></avatar>
          </div>
          <div
            style="position: absolute; bottom: 5px; right: 5px;"
          >
            <v-chip x-small color="success darken-1">{{paidAt}}</v-chip>
          </div>
        </div>

        <div>
          <v-card-title
            class="text-h5"
          >
            <v-icon>mdi-currency-usd</v-icon> {{bill.value}}
          </v-card-title>

          <v-card-subtitle>
            {{bill.description}}
          </v-card-subtitle>
        </div>
      </div>
    <BillsEditBillDialog :bill="bill" :categories="categories" />
    </v-card>
</template>
<script>
import Avatar from 'vue-avatar-component'
export default {
    components: { Avatar },
    props: ['bill', 'categories'],
    setup() {
        
    },
    computed: {
      isPaid() {
        return this.bill.paid_at != null
      },
      paidText() {
        return this.isPaid ? this.bill.paid_at : 'Unpaid bill'
      },
      paidColor() {
        return this.isPaid ? 'success' : 'error'
      },
      userName() {
        return this.bill.user ? this.bill.user.name : 'Unknown'
      },
      userColor() {
        return this.bill.user ? 'default' : 'warning'
      },
      paidAt() {
        let options = {
          day: '2-digit',
          month: '2-digit'
        }
        return new Date(this.bill.paid_at).toLocaleDateString(undefined, options)
      },
      isOwner() {
        return this.$auth.user.data.id == this.bill.user_id
      }
    },
    data: () => ({
      //showMembers: false,
      editDialog: false
    }),
    methods:{
        async destroy() {
            await this.$axios.$delete(`/bills/${this.group.id}`)
            .then(r => {
                this.$notifier.showMessage({ content: r.message, color: 'success' })
                $nuxt.$emit('bill-deleted', this.bill)
            })
        },
        openEditDialog() {
          if(this.isOwner) $nuxt.$emit(`open-dialog-${this.bill.id}`)
        }
    },
}
</script>