<template>
  <button @click="isAdded ? removeColorHandler : addColorHandler">{{color}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: String
  },
  data() {
    return {
      isAdded: false
    }
  },
  methods: {
    addColorHandler() {
      this.isAdded = true;
    },
    removeColorHandler() {
      this.isAdded = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin: 0 1rem;
    padding: .5rem 1rem;
}
</style>
