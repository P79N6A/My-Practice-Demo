<template>
  <div>
    <button @click="emitSayHa">say haha</button>
    <button @click="eventBus">eventBus</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1
    }
  },
  methods: {
    emitSayHa () {
      this.$emit('sayHaha')
    },
    eventBus () {
      this.$bus.$emit('to-do')
    }
  }
}
</script>

<style>

</style>
