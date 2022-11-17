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
            this.hideModal('modal-order')
            this.setProcessButton(_btn, false, 'Submit')
            this.resetForm()
            document.getElementById('refresh-btn').click()
          })
      } catch (e) {
        this.setProcessButton(_btn, false, 'Submit')
        console.log(e)
      }
    },
    resetForm() {
      this.form.consigneeName = null
      this.form.consigneeAddress = null
      this.form.consigneeCity = null
      this.form.consigneeAddress = null
      this.form.consigneeCountry = null
      this.form.consigneePostalCode = null
      this.form.consigneeProvince = null
      this.form.consigneeNumber = null
      this.form.height = null
      this.form.weight = null
      this.form.length = null
      this.form.width = null
      this.form.paymentType = null
    }
  }
}
