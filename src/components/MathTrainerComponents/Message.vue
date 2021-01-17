<template>

  <div class="card center" :class="{success: isSuccess, warning: !isSuccess}">
    <h1>Math Trainer</h1>
    <h2 v-if="!isSuccess">Wrong!</h2>
    <h2 :class="{'success-msg': isSuccess}">{{ msg }}</h2>
    <button class="btn" @click="$emit('changeState', '', '')">continue</button>
  </div>

</template>

<script>
  export default {
    name: 'AppMessage',
    
    props: ['isSuccess', 'msg'],
    
    methods: {}
  }

</script>

<style scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    
    transition: 1s linear;
  }
  
  h2 {
    border-bottom: none;
    margin: 0.3rem 0;
  }
  
  .btn {
    position: absolute;
    bottom: 50px;
  }
  
  .success {
    background-color: #ccffce;
  }
  
  .warning {
    background-color: #ffd1c8;
  }
  
  .btn {
    color: #7d87ff;
    border-color: #7d87ff;
  }
  
  .success-msg {
    padding-top: 20px;
  }
</style>