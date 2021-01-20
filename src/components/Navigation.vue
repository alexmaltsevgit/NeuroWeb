<template>

  <nav class="card center">
    <h1>{{ title }}</h1>
    <div class="button-list">
      <button class="btn" :class="{'primary': app.isActive}" @click="changeApp(app.name, index)" v-for="(app, index) in appsList" :key="index">
        {{ app.name }}
      </button>
    </div>
  </nav>

</template>


<script>
  export default {
    name: 'AppNavigation',
    
    data() {
      return {
        title: "Vue 3 Apps",
        appsList: [
          {name: 'counter', isActive: false},
          {name: 'notes', isActive: false},
          {name: 'math trainer', isActive: false},
          {name: 'calculator', isActive: false}
        ],
      }
    },
    
    methods: {
      async changeApp(name, index) {
        await this.$emit('onAppSelect', name)
        for (let item in this.appsList) {
          this.appsList[item].isActive = false
        }
        this.appsList[index].isActive = true
      }
    }
  }

</script>


<style scoped>
  .button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    margin: 5px 10px;
  }
</style>
