<template>
    <div class="card center">
      <h1>Timer</h1>
      <div class="form-control">
       
        <div class="input-item">
          <h3>Hours</h3>
          <input type="number" :disabled="isRunning" placeholder="h" v-model="hours">
        </div>
        
        <div class="input-item">
          <h3>Minutes</h3>
          <input type="number" :disabled="isRunning" placeholder="m" v-model="minutes">
        </div>
        
        <div class="input-item">
          <h3>Seconds</h3>
          <input type="number" :disabled="isRunning" placeholder="s" v-model="seconds">
        </div>
        
      </div>
      <h2>{{ niceTime }}</h2>
      <button class="btn" :class="{primary: isRunning}" @click="(isRunning) ? pause() : start()">{{ (isRunning) ? "Pause" : "Start" }}</button>
      <button class="btn danger" @click="clear">clear</button>
    </div>
</template>


<script>
  export default {
    name: 'AppTimer',

    data() {
      return {
        time: new Date(0),
        hours: 0,
        minutes: 0,
        seconds: 0,
        
        isRunning: false,
        clocking: null,
      }
    },
    
    methods: {
      start() {
        this.isRunning = true
        this.time = new Date((this.hours * 1000 * 60 * 60) + (this.minutes * 1000 * 60) + (this.seconds * 1000))
        
        this.clocking = setInterval(() => {
          this.time = new Date(this.time.getTime() - 1000)
          this.hours = this.time.getUTCHours()
          this.minutes = this.time.getUTCMinutes()
          this.seconds = this.time.getUTCSeconds()
          
          if (!this.time.getTime())
            this.pause()
        }, 1000)
      },
      
      pause() {
        this.isRunning = false
        clearInterval(this.clocking)
      },
      
      clear() {
        this.isRunning = false
        clearInterval(this.clocking)
        this.time = new Date(0)
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
      }
    },
    
    computed: {
      niceTime() {
        const hours = String(this.hours).padStart(2, "0")
        const minutes = String(this.minutes).padStart(2, "0") 
        const seconds = String(this.seconds).padStart(2, "0")
        return hours + " : " + minutes + " : " + seconds
      },
    },

    watch: {
      seconds() {
        if (this.seconds > 59) {
          this.seconds = 59
        }
      },

      minutes() {
        if (this.minutes > 59) {
          this.minutes = 59
        }
      },

      hours() {
        if (this.hours > 23) {
          this.hours = 23
        }
      },
    }
  }
</script>


<style scoped>
  .form-control {
    display: flex;
  }
  
  .input-item {
    text-align: center;
  }
  
  input {
    width: 10rem;
    text-align: center;
  }
  
  h3 {
    margin: 0;
  }
  
  .danger {
    margin-top: .7rem;
  }
  
  /* Hide arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>