<template>
  <form class="user-profile_create-twitt" @submit.prevent="createNewTwitt" :class="{ 'exceeded' : newTwittCharCount > 180 }">
    <label for="newTwitt"><b>New Twitt</b> ({{newTwittCharCount}}/180)</label>
    <textarea name="newTwitt" id="newTwitt" rows="4" v-model="state.newTwittContent"></textarea>
    <div class="user-profile_create_new_twitt_type">
      <label for="newTwittType"><b>Type: </b></label>
      <select name="newTwittType" id="newTwittType" v-model="state.selectedTwittType">
        <option :value="option.value" v-for="(option, index) in state.twittTypes" :key="index">{{option.name}}</option>
      </select>
    </div>
    <button type="submit">
      TWITT!
    </button>
  </form>
</template>

<script>
import {reactive, computed } from 'vue'

  export default {
    name: 'CreateNewTwittPanel',
    setup(props, context){
      const state = reactive({
        newTwittContent: '',
        selectedTwittType: 'instant',
        twittTypes:[
          {value:'draft', name:'Draft'},
          {value:'instant', name:'Instant Twitt'},
        ],
      })

      const newTwittCharCount = computed(() => state.newTwittContent.length)

      function createNewTwitt () {
        if(state.newTwittContent && state.selectedTwittType !== 'draft'){
          const res = state.newTwittContent.slice(0, 176) + ' ...'
          context.emit('add-twitt', res)
          state.newTwittContent = ''
        }
      }
      return {
        state,
        newTwittCharCount,
        createNewTwitt
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-profile_create-twitt{
    padding-top: 20px;
    display: flex;
    flex-direction: column;


    &.exceeded {
      color:red;
      border-color: red;

        button {
          background-color: red;
        }
    }

    .user-profile_create_new_twitt_type{
      margin: 20px auto;
    }
    button{
      padding:5px 0;
      background-color: rebeccapurple;
      color:aliceblue;
      border:none;
      border-radius: 5px;
    }
}
</style>