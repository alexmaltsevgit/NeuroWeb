<template>

  <div class="card center">
    <h1>Math Trainer</h1>
    <h2>{{ x }} + {{ y }} = ?</h2>
    <div class="button-list">
      <div class="btn primary" v-for="(answer, index) in answers" :key="index" @click="changeState(answer)">{{ answer }}</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'AppQuestion',
    
    data() {
      return {
        x: rand(50, 250),
        y: rand(50, 250),
      }
    },
    
    methods: {
      async changeState(answer) {
        if (answer === this.x + this.y) {
          let msg = "Good job!"
          console.log(msg)
          await this.$emit('changeState', true, msg)
        }
        else {
          let msg = `${this.x} + ${this.y} = ${this.x + this.y}`
          console.log(msg)
          await this.$emit('changeState', false, msg)
        }
      }
    },
    
    computed: {
      answers() {
        let rightAnswer = this.x + this.y
        let answers = [rightAnswer]
        
        while (answers.length < 4) {
          let wrongAnswer = rand(rightAnswer - 20, rightAnswer + 20)
          if (answers.indexOf(wrongAnswer) === -1) {
            answers.push(wrongAnswer)
          }
        }
        
        return answers.sort(() => Math.random() - 0.5)
      }
      
    }
  }
  
  function rand(min, max) {
    let diff = max - min
    return Math.floor(Math.random() * (diff + 1)) + min
  }

</script>

<style scoped>
  .card {
    height: 300px;
  }
  
  h2 {
    text-align: center;
    border-bottom-width: 2px;
  }
  
  .button-list {
    display: flex;
    justify-content: space-between;
  }
</style>