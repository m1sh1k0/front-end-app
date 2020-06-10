<template>
  <div id="app">
    <CreateUser />
    <UserTable />
  </div>
</template>

<script>
import CreateUser from './components/CreateUser.vue'
import UserTable from './components/UserTable'

export default {
  name: 'TestFrontendApp',
  components: {
    CreateUser,
    UserTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
