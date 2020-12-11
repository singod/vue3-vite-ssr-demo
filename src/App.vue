<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nav>
    <router-link to="/">home</router-link> | 
    <router-link to="/about">about</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

