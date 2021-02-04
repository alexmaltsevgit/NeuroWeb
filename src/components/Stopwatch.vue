<template>
  <div class="card center">
    <h1>Stopwatch</h1>
    <h3>{{ time }}</h3>
    <div class="button-list">
      <button class="btn danger" @click="clear">clear</button>
      <button class="btn" :class="{primary: isRunning}" @click="(isRunning) ? pause() : start()">{{ (isRunning) ? "Pause" : "Start" }}</button>
      <button class="btn warning" @click="check">check</button>
    </div>
    <h2>Checklist</h2>
    <ul class="list">
      <li class="list-item" v-for="(check, index) in checkList" :key="index">{{ check }}</li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'AppStopwatch',
    
    data() {
      return {
        time: "00 : 00 : 00 : 000",
        startTime: null,
        endTime: null,
        overallDifferenceTime: 0,
        intermediateDifferenceTime: 0,
        interval: null,
        isRunning: false,
        
        checkList: [],
      }
    },
    
    methods: {
      start() {
        this.isRunning = true
        clearInterval(this.interval)
        this.overallDifferenceTime += this.intermediateDifferenceTime
        this.intermediateDifferenceTime = 0
        
        this.startTime = (this.startTime) ? this.startTime : Date.now()
        
        this.interval = setInterval(() => {
          this.endTime = Date.now()
          const time = new Date(this.endTime - this.startTime - this.overallDifferenceTime)

          const hours = String(time.getUTCHours()).padStart(2, "0")
          const minutes = String(time.getUTCMinutes()).padStart(2, "0")
          const seconds = String(time.getUTCSeconds()).padStart(2, "0")
          const milliseconds = String(time.getUTCMilliseconds()).padStart(3, "0")

          this.time = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + milliseconds
        }, 71)
      },
      
      check() {
        this.checkList.push(this.time)
      },
      
      pause() {
        this.isRunning = false
        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this.intermediateDifferenceTime = Date.now() - this.endTime
        }, 1)
      },
      
      clear() {
        this.isRunning = false
        clearInterval(this.interval)
        this.time = "00 : 00 : 00 : 000"
        this.startTime = null
        this.endTime = null
        this.overallDifferenceTime = 0
        this.intermediateDifferenceTime = 0
        this.checkList = []
      }
      
    },
  }
</script>


<style scoped>
  .btn {
    transition: background-color .1s ease-out;
    margin: .3rem;
  }
  
  .button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .danger {
    background-color: white;
    color: #a82121;
    border-color: #a82121;
  }
  
  .warning {
    background-color: white;
    color: #a89a46;
    border-color: #a89a46;
  }
  
  .danger:active {
    background-color: #ffeded;
  }
  
  .warning:active {
    background-color: #fffada;
  }
  
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 250px;
    height: 400px;
    overflow-y: scroll;
  }
  
  .list::-webkit-scrollbar {
    width: 7px;
  }
  
  .list::-webkit-scrollbar-track {
    border: 1px solid #ffffff;
    background-color: #eaecef;
  }

  .list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px #ffffff;
    background-color: #67696c;
    border: 2px solid #eaecef;
  }
  
  .list-item {
    display: block;
    font-size: 1rem;
    min-height: 50px;
    line-height: 2em;
    
    padding: 8px 20px;
    border-top: 1px #eaecef solid;
    border-bottom: 1px #eaecef solid;
  }
</style>