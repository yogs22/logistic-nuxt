<template>
  <section class="overview">
    <Sidebar />
    <ListOrder />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  head () {
    return {
      title: `Order Page - ${this.$config.siteName}`,
    }
  }
}
</script>
