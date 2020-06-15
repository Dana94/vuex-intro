<template>
  <button v-if="isAdded" @click="removeColorHandler">
    Remove
    <br />
    {{color}}
  </button>
  <button v-else @click="addColorHandler">
    Add
    <br />
    {{color}}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

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
    ...mapActions([
      'addColor',
      'removeColor'
    ]),
    addColorHandler() {
      this.isAdded = true;
      // this.$store.dispatch('addColor', this.color); // first method with dispatch
      this.addColor(this.color); // second method with mapActions
    },
    removeColorHandler() {
      this.isAdded = false;
      // this.$store.dispatch('removeColor', this.color); // first method with dispatch
      this.removeColor(this.color); // second method with mapActions
    },
  }
}
</script>

<style scoped>
button {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
}
</style>
