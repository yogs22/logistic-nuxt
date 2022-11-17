import global from '~/mixins/global'

export default {
  mixins: [global],
  data() {
    return {
      orders: [],
      isBusy: true,
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
      paymentTypes: [
        { text: 'Select Payment Type', value: null },
        { text: 'COD', value: 'cod' },
        { text: 'Prepaid', value: 'prepaid'}
      ]
    }
  },
  methods: {
    async getOrders() {
      this.isBusy = true

      await this.$axios.get('/orders')
        .then((response) => {
          if (response.data.data) {
            this.orders = response.data.data
          }

          this.isBusy = false
        })
    },
    async submitOrder(event) {
      const _btn = document.getElementById('btn-submit')
      this.setProcessButton(_btn, true, 'Submiting ...')

      try {
        this.$axios.post('/orders', this.form)
          .then((response) => {
            this.setProcessButton(_btn, false, 'Submit')
            this.$toast.success('Order successfully created')
            this.$router.push('/')
          })
      } catch (e) {
        this.setProcessButton(_btn, false, 'Submit')
        console.log(e)
      }
    }
  }
}
