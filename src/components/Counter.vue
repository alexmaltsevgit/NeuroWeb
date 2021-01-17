<template>

  <div class="card center">
    <h1>Counter: {{ counter }}</h1>
    <div>
      <button class="btn primary" @click='counter++'>add</button>
      <button class="btn danger" @click='counter--'>sub</button>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'AppCounter',
    
    data() {
      return {
        counter: 0,
      }
    },
  }

</script>


<style>

</style>