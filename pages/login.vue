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
import { mapGetters } from 'vuex'
import global from '~/mixins/global'

export default {
  name: 'LoginPage',
  middleware: 'guest',
  mixins: [global],
  data () {
    return {
      errors: [],
      username: null,
      password: null
    }
  },
  head () {
    return {
      title: `Login Page - ${this.$config.siteName}`,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    async login () {
      const _btn = document.getElementById('login')

      this.setProcessButton(_btn, true, 'Loggin in...')

      this.errors = []

      if (!this.username) {
        this.errors.push('*Username must filled.')
      }
      if (!this.password) {
        this.errors.push('*Password must filled.')
      }

      if (!this.errors.length) {
        try {
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })

          this.$toast.success('Successfully login')
          this.$router.push('/')

          return
        } catch (e) {
          this.$toast.error(e.response.data.message)
        }
      }

      this.setProcessButton(_btn, false, 'Login')
      return this.$toast.error(this.errors.join('<br>'))
    }
  }
}

</script>
