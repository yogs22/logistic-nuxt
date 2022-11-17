import { mapGetters } from 'vuex'
import global from '~/mixins/global'

export default {
  name: 'Login',
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
          this.$toast.error(e.response.data.error)
        }
      }

      this.setProcessButton(_btn, false, 'Login')
    }
  }
}
