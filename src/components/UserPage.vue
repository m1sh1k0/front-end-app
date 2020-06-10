<template>
  <div>User {{ $route.params.id }}</div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      items: []
    }
  },
  methods: {},
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 16px 32px;
  margin: 4px 2px;
  text-align: center;
}
</style>
