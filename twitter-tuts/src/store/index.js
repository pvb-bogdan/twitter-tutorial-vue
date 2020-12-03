import { createStore } from 'vuex'
import {userActionModule} from './userActionModule.js'

export default createStore({
  // reference user (or something ) in the STATE
  state: {

  },

  // are functtions that effect the STATE
  mutations: {

  },

  // are functions that you call throughout your application that call mutations
  actions: {

  },

  modules: {
    User: userActionModule
  }
})
