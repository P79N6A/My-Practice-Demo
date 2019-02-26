<template>
  <div id="app">
    <div id="nav">
      <router-link to="/user/foo">/user/foo</router-link> |
      <router-link to="/user/bar">/user/bar</router-link> |
      <router-link to="/user">/user</router-link> |
      <router-link to="/test">/test</router-link> |

      <div>
        <p>嵌套路由</p>
        <router-link to="/father">father</router-link>
      </div>
    </div>
    <transition>
      <router-view/>
    </transition>
    <button @click="push">push 路由</button>
  </div>
</template>
<script>
export default {
  methods: {
    push () {
      console.log('haha')
      this.$router.push('/user')
      console.log(this.$router)
      console.log(this.$route)
    }
  }
}
</script>

<style>
</style>
