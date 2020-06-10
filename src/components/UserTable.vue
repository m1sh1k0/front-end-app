<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      items: []
    }
  },
  methods: {
    getAllUsers() {
      this.axios.get('http://localhost:3000/users').then(
        (result) => {
          this.items = result.data
        },
        (error) => {
          console.log(error)
        }
      )
    }
  },
  mounted() {
    this.axios.get('http://localhost:3000/users').then(
      (result) => {
        this.items = result.data
        console.log(result.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }
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
