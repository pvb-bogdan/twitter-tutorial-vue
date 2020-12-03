<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{state.user.userName}}</h1>
      <span v-if="state.user.isAdmin" class="admin-badge">Admin</span>
      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{state.followers}}
      </div>
      <CreateNewTwittPanel @add-twitt="addNewTwitt"/>
    </div>
    <div class="twitts-wrapper">
      <ul class="twitter-list">
        <twittItem v-for="(twitt, index) in state.user.twitts"
          :key="index"
          :userName="state.user.userName"
          :twitt="twitt"
          @favourite="toggleFavourite"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import{reactive, computed} from 'vue'
  import {useRoute} from 'vue-router'
  import { users } from "../assets/users";
  import twittItem from '../components/twittItem'
  import CreateNewTwittPanel from '../components/createTwittPanel'

  export default {
    name: 'userProfile',
    components: {twittItem, CreateNewTwittPanel},
    setup(){

      const route = useRoute()
      const userId = computed(() => route.params.userId)

      const state = reactive({
        followers: 0,
        user: users[userId.value - 1] || users[0]
      })

      function addNewTwitt (twitt) {
        // console.log('xxx')
        state.user.twitts.unshift({ id: state.user.twitts.length + 1, content: twitt });
      }

      return {
        state,
        addNewTwitt,
        userId
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-profile {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    padding: 50px 5%;
    box-sizing: border-box;

     .user-profile_user-panel{
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 20px;
      background-color: #fff;
      border-radius:5px;
      border:1px solid #dfe3e8;
      box-shadow: 0 0 3px rgba(0,0,0,.25);

      h1{
        margin: 0;
      }

      }
      .admin-badge{
        font-size:12px;
        background: red;
        color: #fff;
        padding: 0 10px;
        border-radius: 5px;
        margin-right: auto;
        font-weight: 800;
        text-align: center;
      }
    }

  .twitter-list {
    list-style: none;
    margin:0;
    padding: 0;
  }
</style>