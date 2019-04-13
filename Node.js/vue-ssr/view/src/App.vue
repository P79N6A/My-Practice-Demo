<template>
  <div id="app">
    <!-- <span>{{ item.title }}</span> -->
    <!-- <button @click="add">{{ a }}</button> -->
    <router-link to="/login">go to login</router-link>
    <router-view></router-view>
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
    add () {
      this.a++
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('fetchItem', 123)
  },
  computed: {
    item () {
      return this.a
    }
  }
}
</script>