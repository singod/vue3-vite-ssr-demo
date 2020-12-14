<template>
  <img src="./assets/logo.png" alt="Vue logo" />
  <nav>
    <router-link to="/">
      <span>home</span>
    </router-link>
    |
    <router-link to="/about">
      <span>about</span>
    </router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    console.log('app mounted');
  },
});
</script>
