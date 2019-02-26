<template>
  <div> {{ $route.params.id }} haha</div> 
</template>

<script>
export default {
  beforeCreate () {
    alert('user')
  }
}
</script>

<style>

</style>
