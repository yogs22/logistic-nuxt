export default {
  methods: {
    setProcessButton(_btn, disabled, text) {
      _btn.disabled = disabled
      _btn.innerHTML = text
    }
  }
}
