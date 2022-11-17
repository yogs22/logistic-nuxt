<template>
  <b-modal ref="modal-order" id="modal-lg" size="lg" title="Create Order">
    <form>
      <b-form-group
        label="Cosignee Name"
        label-for="consigneeName"
        class="mb-3"
      >
        <b-form-input
          id="consigneeName"
          v-model="form.consigneeName"
          placeholder="Enter consignee name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Cosignee Address"
        label-for="consigneeAddress"
        class="mb-3"
      >
        <b-form-input
          id="consigneeAddress"
          v-model="form.consigneeAddress"
          placeholder="Enter consignee address"
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col md="6">
          <b-form-group
            label="Cosignee City"
            label-for="consigneeCity"
            class="mb-3"
          >
            <b-form-input
              id="consigneeCity"
              v-model="form.consigneeCity"
              placeholder="Enter consignee city"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="Cosignee Country"
            label-for="consigneeCountry"
            class="mb-3"
          >
            <b-form-input
              id="consigneeCountry"
              v-model="form.consigneeCountry"
              placeholder="Enter consignee country"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <b-form-group
            label="Cosignee Postal Code"
            label-for="consigneePostalCode"
            class="mb-3"
          >
            <b-form-input
              id="consigneePostalCode"
              v-model="form.consigneePostalCode"
              placeholder="Enter consignee postal code"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="Cosignee Province"
            label-for="consigneeProvince"
            class="mb-3"
          >
            <b-form-input
              id="consigneeProvince"
              v-model="form.consigneeProvince"
              placeholder="Enter consignee province"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group
        label="Cosignee Number"
        label-for="consigneeNumber"
        class="mb-3"
      >
        <b-form-input
          id="consigneeNumber"
          v-model="form.consigneeNumber"
          placeholder="Enter consignee number"
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col md="6">
          <b-form-group
            label="Height"
            label-for="height"
            class="mb-3"
          >
            <b-form-input
              id="height"
              type="number"
              min="1"
              step="0.1"
              v-model.number="form.height"
              placeholder="Enter height"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="Weight"
            label-for="weight"
            class="mb-3"
          >
            <b-form-input
              id="weight"
              type="number"
              min="1"
              step="0.1"
              v-model.number="form.weight"
              placeholder="Enter weight"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <b-form-group
            label="Length"
            label-for="length"
            class="mb-3"
          >
            <b-form-input
              id="length"
              type="number"
              min="1"
              step="0.1"
              v-model.number="form.length"
              placeholder="Enter length"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="Width"
            label-for="width"
            class="mb-3"
          >
            <b-form-input
              id="width"
              type="number"
              min="1"
              step="0.1"
              v-model.number="form.width"
              placeholder="Enter width"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group
        label="Payment Type"
        label-for="paymentType"
        class="mb-3"
      >
        <b-form-select
            id="paymentType"
            v-model="form.paymentType"
            :options="paymentTypes"
          ></b-form-select>
      </b-form-group>

    </form>

    <template #modal-footer="{ ok, cancel }">
      <button class="btn btn-danger" id="btn-submit" @click="submitOrder()">
        Submit
      </button>
      <b-button size="md" @click="cancel()">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import order from '~/mixins/order'

export default {
  name: 'CreateOrder',
  mixins: [order]
}
</script>
