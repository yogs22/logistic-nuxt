// holds your root state
export const state = () => ({
  order: null,
})

// contains your mutations
export const mutations = {
  setOrder (state, value) {
    state.order = value
  }
}

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },
  getOrder (state) {
    return state.order
  }
}
