
<template>
  <h1>About页面</h1>
</template>

<script>
export default {
  name: 'about',
  props: {
    msg: String,
  },
  mounted() {
    this.randomNumber = Math.random()
  },
  data() {
    return {
      randomNumber: 0,
      initialized: false,
      count: 0,
    }
  },
}
</script>