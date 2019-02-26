<template>
  <div id="app">
    <child></child>
    <button @click="getChildren">click</button>
  </div>
</template>

<script>
import Child from './components/Child'

export default {
  components: {
    Child
  },
  methods: {
    sayHa () {
      console.log('haha')
    },
    getChildren () {
      console.log(this.$children[0].$data)
    }
  },
  created () {
    this.$bus.$on('to-do', function () {
      console.log('should do')
    })
  }
}
</script>

<style>
@import '~@/assets/1.css';
</style>
