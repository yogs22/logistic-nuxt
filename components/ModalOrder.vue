<template>
  <b-modal id="modal-order" size="lg" title="Order Detail" hide-footer="true">
    <div class="table-responsive">
      <table class="table table-bordered" v-if="getOrder">
        <tr>
          <td>Tracking Number</td>
          <td>:</td>
          <td>{{ getOrder.TrackingNumber }}</td>
        </tr>
        <tr>
          <td>Consignee Name</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneeName }}</td>
        </tr>
        <tr>
          <td>Consignee Address</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneeAddress }}</td>
        </tr>
        <tr>
          <td>Consignee Number</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneeNumber }}</td>
        </tr>
        <tr>
          <td>Consignee City</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneeCity }}</td>
        </tr>
        <tr>
          <td>Consignee Province</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneeProvince }}</td>
        </tr>
        <tr>
          <td>Consignee Postal Code</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneePostalCode }}</td>
        </tr>
        <tr>
          <td>Consignee Country</td>
          <td>:</td>
          <td>{{ getOrder.ConsigneeCountry }}</td>
        </tr>
        <tr>
          <td>Payment Type</td>
          <td>:</td>
          <td>{{ getOrder.PaymentType }}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>:</td>
          <td>{{ getOrder.Weight }}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>:</td>
          <td>{{ getOrder.Height }}</td>
        </tr>
        <tr>
          <td>Width</td>
          <td>:</td>
          <td>{{ getOrder.Width }}</td>
        </tr>
        <tr>
          <td>Length</td>
          <td>:</td>
          <td>{{ getOrder.Length }}</td>
        </tr>
      </table>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ModalOrder',
  computed: {
    ...mapGetters(['getOrder'])
  },
}
</script>
