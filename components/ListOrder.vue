<template>
  <main class="main-wrapper">
    <div class="ps-lg-0">
      <h2 class="text-4xl fw-bold color-palette-1 mb-30">
        Order List
      </h2>
      <div class="latest-transaction">
        <div class="main-content main-content-table overflow-auto">
          <div class="float-md-start mb-3">
            <nuxt-link to="create" class="btn btn-danger">+ Create Order</nuxt-link>
          </div>
          <b-table :busy="isBusy" :fields="fields" :items="orders" show-empty>
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <Spinner />
              </div>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import order from '~/mixins/order'

export default {
  name: 'ListOrder',
  mixins: [order],
  data () {
    return {
      fields: [
        'ConsigneeName', 'ConsigneeAddress', 'ConsigneeCity', 'ConsigneeCountry', 'ConsigneePostalCode', 'ConsigneeProvince', 'ConsigneeNumber', 'Height', 'Weight', 'Length', 'Width', 'PaymentType'
      ],
      orders: [],
      isBusy: true,
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
