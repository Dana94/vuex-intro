<template>
  <div id="app">
    <header className="app-header">
        <div className="app-buttons">
          <Button color="red" />
          <Button color="orange" />
          <Button color="yellow" />
          <Button color="green" />
          <Button color="blue" />
          <Button color="purple" />
        </div>
      </header>
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Button
  },
  computed: {
    colors() {
      return [];
    }
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
