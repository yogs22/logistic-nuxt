<template>
  <section class="overview">
    <Sidebar />
    <CreateOrder />
    <main class="main-wrapper">
      <div class="ps-lg-0">
        <h2 class="text-4xl fw-bold color-palette-1 mb-30">
          Order List
        </h2>
        <div class="latest-transaction">
          <div class="main-content main-content-table overflow-auto">
            <div class="float-md-start mb-3">
              <b-button v-b-modal.modal-lg variant="danger">+ Create Order</b-button>
              <button class="d-none" id="refresh-btn" @click="getOrders()">+ Toggle Order</button>
            </div>
            <b-table border :busy="isBusy" :fields="fields" :items="orders" show-empty>
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
  </section>
</template>

<script>
import order from '~/mixins/order'

export default {
  name: 'IndexPage',
  middleware: 'auth',
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
  head () {
    return {
      title: `Order Page - ${this.$config.siteName}`,
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
