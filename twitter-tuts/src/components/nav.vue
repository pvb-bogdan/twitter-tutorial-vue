<template>
  <div class="navbar">
    <router-link to='/'>
      <div class="logo">
        Twitter
      </div>
    </router-link>
    <div class="nav-user" v-if="user">
      <h3>{{user.userName}}</h3>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import{computed} from 'vue'

  export default {
    name: 'Navbar',
    setup () {
      const store = useStore()
      const user = computed(() => store.state.User.user)
      return {
        user
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar{
    background: rebeccapurple;
    padding:0px 15px;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-weight: bold;
      font-size: 24px;
    }
    .nav-user{
      font-weight: bold;
      margin: 0;
      font-size: 18px;
    }
  }
</style>