<template>
  <div class="main">
    <Filter/>
    <Card/>
  </div>
</template>

<script>
import Filter from './components/Filter.vue'
import Card from './components/Card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Filter,
    Card
  },

  methods: {
    ...mapActions(["fetchDoctors"])
  },

  mounted() {
    this.fetchDoctors()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  background-color: #e7e7e7;
  max-width: 100%;
  min-height: 100vh;
  padding: 60px 80px 60px 80px;
}
</style>
