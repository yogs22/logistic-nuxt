export default {
  methods: {
    hideModal(modalId) {
      this.$refs[modalId].hide()
    },
    setProcessButton(_btn, disabled, text) {
      _btn.disabled = disabled
      _btn.innerHTML = text
    }
  }
}
