export const userActionModule = {
  namespaced: true,
  state: {
    // reference user (or something ) in the STATE
    user: null
  },

  // are functtions that effect the STATE
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  // are functions that you call throughout your application that call mutations
  actions: {
    setUser({commit}, user) {
      commit('SET_USER', user)
    }
  }
}