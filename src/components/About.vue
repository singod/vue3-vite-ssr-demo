<template>
  <h1>About页面</h1>
  {{ num }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const num = ref(0);
    const book = reactive({ title: 'Vue 3 Guide' });
    console.log(book.title);
    return {
      num,
      book,
    };
  },
});
</script>
