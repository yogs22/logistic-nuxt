<template>
  <main class="main-wrapper">
    <div class="ps-lg-0">
      <h2 class="text-4xl fw-bold color-palette-1 mb-30">
        Create Order
      </h2>
    </div>
    <div class="latest-transaction">
      <div class="main-content main-content-table">
        <form @submit.prevent="submitOrder()">
          <b-form-group
            label="Cosignee Name"
            label-for="consigneeName"
            class="mb-3"
          >
            <b-form-input
              id="consigneeName"
              v-model="form.consigneeName"
              placeholder="Enter consignee name"
              required
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
              required
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
                  required
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
                  required
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
                  required
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
                  required
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
              required
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
                  min="0.1"
                  step="0.1"
                  v-model.number="form.height"
                  placeholder="Enter height"
                  required
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
                  min="0.1"
                  step="0.1"
                  v-model.number="form.weight"
                  placeholder="Enter weight"
                  required
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
                  min="0.1"
                  step="0.1"
                  v-model.number="form.length"
                  placeholder="Enter length"
                  required
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
                  min="0.1"
                  step="0.1"
                  v-model.number="form.width"
                  placeholder="Enter width"
                  required
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

          <button type="submit" class="btn btn-danger w-25 w-xs-49" id="btn-submit">
            Submit
          </button>
          <nuxt-link to="/" class="btn btn-secondary w-25 w-xs-49">
            Cancel
          </nuxt-link>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import order from '~/mixins/order'

export default {
  name: 'CreateOrder',
  mixins: [order]
}
</script>
