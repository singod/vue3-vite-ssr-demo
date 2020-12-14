<template>
  <div>
    <h1>Home页面</h1>
    <!-- <p>{{ book.title }}</p> -->
    <p>来自store的数据：{{ $store.state.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface asyncDataType {
  store: any;
  router: any;
}

export default defineComponent({
  asyncData({ store, router }: asyncDataType) {
    console.log(store);
    console.log(router);

    console.log('asyncData');
  },
  mounted() {
    console.log('home mounted');
  },
});
</script>
