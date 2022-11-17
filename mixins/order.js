import { mapGetters } from 'vuex'
import global from '~/mixins/global'

export default {
  mixins: [global],
  data() {
    return {
      // accommodate orders data
      orders: [],
      // set busy/loading status
      isBusy: true,
      // form payload to create order
      form: {
        consigneeName: null,
        consigneeAddress: null,
        consigneeCity: null,
        consigneeAddress: null,
        consigneeCountry: null,
        consigneePostalCode: null,
        consigneeProvince: null,
        consigneeNumber: null,
        height: null,
        weight: null,
        length: null,
        width: null,
        paymentType: null
      },
      // payment type select
      paymentTypes: [
        { text: 'Select Payment Type', value: null },
        { text: 'COD', value: 'cod' },
        { text: 'Prepaid', value: 'prepaid'}
      ]
    }
  },
  methods: {
    // get list orders data
    async getOrders() {
      // set table busy status
      this.isBusy = true

      await this.$axios.get('/orders')
        .then((response) => {
          if (response.data.data) {
            // store orders response
            this.orders = response.data.data
          }
          // disabling table busy status
          this.isBusy = false
        })
    },
    // function to show spesific order item
    showOrder(trackingNumber) {
      this.$store.commit('setOrder', this.orders.find(order => order.TrackingNumber === trackingNumber))
    },
    // function to create order data
    async submitOrder(event) {
      // change to disabled during processing request
      const _btn = document.getElementById('btn-submit')
      this.setProcessButton(_btn, true, 'Submiting ...')

      // submit to create order endpoint
      this.$axios.post('/orders', this.form)
        .then((response) => {
          // action after success hit to order endpoint
          this.setProcessButton(_btn, false, 'Submit')
          this.$toast.success('Order successfully created')
          this.$router.push('/')
        })
        .catch((e) => {
          // throw error response message
          this.setProcessButton(_btn, false, 'Submit')
          this.$toast.error(e.response.data.error)
        })
    }
  }
}
