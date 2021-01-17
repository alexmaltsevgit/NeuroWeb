<template>

  <div>
      <app-question v-if="state === 'question'" @changeState="changeState"></app-question>
      <app-message :isSuccess="isSuccess" :msg="msg" v-if="state === 'message'" @changeState="changeState"></app-message>
  </div>

</template>

<script>
  import AppMessage from './MathTrainerComponents/Message.vue'
  import AppQuestion from './MathTrainerComponents/Question.vue'

  export default {
    name: 'AppMathTrainer',
    components: {
      AppMessage,
      AppQuestion,
    },
    
    
    data() {
      return {
        state: 'question',
        isSuccess: null,
        msg: null,
      }
    },
    
    methods: {
      changeState(pred, msg) {
        if (this.state == 'question') {
          this.state = 'message'
          this.isSuccess = pred
          this.msg = msg
        }
        else {
          this.state = 'question'
        }
      }
    }
  }

</script>

<style>

</style>
