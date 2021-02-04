<template>

  <app-navigation @onAppSelect="changeApp"></app-navigation>
  <app-counter v-if="state == 'counter'"></app-counter>
  <app-notes v-if="state == 'notes'"></app-notes>
  <app-math-trainer v-if="state == 'math trainer'"></app-math-trainer>
  <app-calculator v-if="state == 'calculator'"></app-calculator>
  <app-timer v-if="state == 'timer'"></app-timer>
  <app-stopwatch v-if="state == 'stopwatch'"></app-stopwatch>

</template>

<script>
  import AppNavigation from './components/Navigation.vue'
  import AppCounter from './components/Counter.vue'
  import AppNotes from './components/Notes.vue'
  import AppMathTrainer from './components/MathTrainer.vue'
  import AppCalculator from './components/Calculator.vue'
  import AppTimer from './components/Timer.vue'
  import AppStopwatch from './components/Stopwatch.vue'


  export default {
    name: 'App',
    components: {
      AppNavigation,
      AppCounter,
      AppNotes,
      AppMathTrainer,
      AppCalculator,
      AppTimer,
      AppStopwatch
    },
    
    
    data() {
      return {
        state: null,
      }
    },
    
    methods: {
      changeApp(name) {
        this.state = name
      }
    }
  }

</script>

<style>
  body {
      background: #16222A;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #3A6073, #16222A);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .btn {
    margin: 0 5px;
  }
</style>
