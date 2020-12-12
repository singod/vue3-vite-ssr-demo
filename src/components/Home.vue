<template>
  <div>
    <h1>Home页面</h1>
    <p>来自store的数据：{{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.count);
  }
}
</script>