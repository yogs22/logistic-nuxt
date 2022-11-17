export default {
  methods: {
    // set disabled attribute and manipulate text for button
    setProcessButton(_btn, disabled, text) {
      _btn.disabled = disabled
      _btn.innerHTML = text
    }
  }
}
