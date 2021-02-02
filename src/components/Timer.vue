<template>
    <div class="card center">
      <h1>Timer</h1>
      <div class="form-control">
       
        <div class="input-item">
          <h3>Hours</h3>
          <input type="number" placeholder="h" v-model.number="hours">
        </div>
        
        <div class="input-item">
          <h3>Minutes</h3>
          <input type="number" placeholder="m" v-model.number="minutes">
        </div>
        
        <div class="input-item">
          <h3>Seconds</h3>
          <input type="number" placeholder="s" v-model.number="seconds">
        </div>
        
      </div>
      <h2>{{ niceTime }}</h2>
      <button class="btn" :class="{primary: isRunning}" @click="(isRunning) ? pause() : start()">{{ (isRunning) ? "Pause" : "Start" }}</button>
    </div>
</template>


<script>
  export default {
    name: 'AppTimer',
    
    data() {
      return {
        hours: '',
        minutes: '',
        seconds: '',
        isRunning: false
      }
    },
    
    methods: {
      start() {
        this.isRunning = true
      },
      
      pause() {
        this.isRunning = false
      },
    },
    
    computed: {
      niceTime() {
        if (this.time)
          return String(this.time.getUTCHours).padStart(2, "0") + " : " + 
                 String(this.time.getUTCMinutes).padStart(2, "0") + " : " + 
                 String(this.time.getUTCSeconds).padStart(2, "0")
        else
          return "00 : 00 : 00"
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