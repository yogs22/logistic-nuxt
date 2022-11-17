<template>
  <Login />
</template>

<script>
import { mapGetters } from 'vuex'
import global from '~/mixins/global'

export default {
  name: 'LoginPage',
  middleware: 'guest',
  head () {
    return {
      title: `Login Page - ${this.$config.siteName}`,
    }
  },
}

</script>
