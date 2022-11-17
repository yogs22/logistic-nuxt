// holds your root state
export const state = () => ({
  username: null,
})

// contains your mutations
export const mutations = {
  setUsername (state, value) {
    state.username = value
  }
}

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },
  getUsername (state) {
    return state.username
  }
}
