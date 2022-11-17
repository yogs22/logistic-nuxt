<template>
  <section class="sign-in mx-auto">
    <div class="login-form">
      <form method="post" @submit.prevent="login">
        <div class="container mx-auto">
          <h2 class="text-4xl fw-bold color-palette-1 mb-10">
            Let's Get Started
          </h2>
          <p class="text-lg color-palette-1 m-0">
            Please log in to continue accessing app.
          </p>

          <div class="pt-50">
            <label
              for="username"
              class="form-label text-lg fw-medium color-palette-1 mb-10"
              >Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              class="form-control rounded-pill text-lg"
              name="username"
              aria-describedby="username"
              placeholder="Enter your username"
              required
            >
          </div>
          <div class="pt-30">
            <label
              for="password"
              class="form-label text-lg fw-medium color-palette-1 mb-10"
            >Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-control rounded-pill text-lg"
              name="password"
              aria-describedby="password"
              placeholder="Enter your password"
              required
            >
          </div>
          <div class="button-group d-flex flex-column mx-auto pt-10 mt-3">
            <button
              id="login"
              type="submit"
              class="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
              role="button"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import login from '~/mixins/login'

export default {
  name: 'Login',
  middleware: 'guest',
  mixins: [login],
  head () {
    return {
      title: `Login Page - ${this.$config.siteName}`,
    }
  }
}

</script>
