<template>
  <div class="home">
    <h1>USERS LIST</h1>
    <div class="user-list">
      <router-link v-for="user in users" :to="{ name: 'userProfile', params: {userId: user.id} }" :key="user.id" >{{user.userName}}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {users} from '../assets/users'

export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }

}
</script>

<style lang="scss" scoped>
  .home {
    padding:50px 5%;
  }
  .user-list{
    display: flex;
    flex-direction: column;
  }
</style>