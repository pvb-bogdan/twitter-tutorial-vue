<template>
  <li class="twitter-list-item" @click="favouriteTwitt(twitt.id)">
    <span><strong>@{{userName}}</strong></span><br/>
    <span>{{twitt.content}}</span>
  </li>
</template>

<script>
  export default {
    name: 'twittItem',
    props: {
      userName: {
        type: String,
        required: true
      },
      twitt: {
        type: Object,
        required: true
      }
    },
    setup (props, context) {
      function favouriteTwitt(id) {
        context.emit('favourite', id)
      }
      return {
        favouriteTwitt
      }
    }
    // methods: {
    //   favouriteTwitt(id) {
    //     this.$emit('favourite', id)
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  .twitter-list-item{
    padding:18px 20px;
    margin:1px;
    background-color: #fff;
    border-radius: 5px;
    border:1px solid #dfe3e8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .25s ease;

    &:hover {
      transform: scale(1.1,1.1);
    }
  }
</style>