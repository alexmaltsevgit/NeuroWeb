<template>

  <div class="card center">
    <h1 :style="{color: color}">Counter: {{ counter }}</h1>
    <div>
      <button class="btn primary" @click='counter++'>add</button>
      <button class="btn danger" @click='counter--'>sub</button>
    </div>
    <button class="btn warning" @click='reset'>reset</button>
  </div>

</template>


<script>
  export default {
    name: 'AppCounter',
    
    data() {
      return {
        counter: 0,
        red: 0,
        green: 0,
        blue: 0,
        colorCoefficient: 150,
      }
    },
    
    methods: {
      reset() {
        this.counter = 0
        this.red = 0
        this.green = 0
        this.blue = 0
      }
    },
    
    computed: {
      color() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
      }
    },
    
    watch: {
      counter() {
        // sigmoid function x/(1+|x|)
        let x = this.counter
        if (this.counter > 0) {
          this.green = (x / (1 + x)) * this.colorCoefficient
        }
        else if (this.counter < 0) {
          this.red = (-x / (1 - x)) * this.colorCoefficient
        }
        else
          this.reset()
      }
    }
  }

</script>


<style scoped>
  .warning {
    margin: 1rem 0;
  }
</style>