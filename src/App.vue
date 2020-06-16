<template>
  <div id="app">
    <header class="app-header">
      <div class="app-buttons">
        <Button color="red" />
        <Button color="orange" />
        <Button color="yellow" />
        <Button color="green" />
        <Button color="blue" />
        <Button color="purple" />
      </div>
      <ul>
        <li v-for="color in getColors" :key="color">{{color}}</li>
      </ul>
    </header>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Button
  },
  computed: {
    // first method with dispatch
    // colors() {
    //   return this.$store.getters.getColors;
    // }
    // second method with mapGetters
    ...mapGetters([
      'getColors'
    ]),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-buttons {
  position: absolute;
  top: 5rem;
}
</style>
