<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="alertMessage">CLICK ME</button>

    <hr>
    <connectivity/>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import connectivity from './components/connectivity.vue'

export default {
  name: 'app',

  components: {
    connectivity
  },

  methods: {
    alertMessage () {
      console.log('clicked')
      this.$bus.$on('connection', online => {
        console.log('this bus')
        alert(online ? 'You are online 😄' : 'You are offline 😞')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
