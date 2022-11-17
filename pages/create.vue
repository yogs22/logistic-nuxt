<template>
  <section class="overview">
    <Sidebar />
    <CreateOrder />
  </section>
</template>

<script>
export default {
  name: 'CreatePage',
  middleware: 'auth',
  head () {
    return {
      title: `Create Order - ${this.$config.siteName}`,
    }
  },
}
</script>
