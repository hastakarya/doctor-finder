<template>
  <div class="filter-body">
      <div class="title">
          <h1>Doctor Finder</h1>
      </div>
      <div class="filter-input">
          <input class="search" type="text" placeholder="Search...">

          <select class="search-hospital" name="" id="">
              <option value="">Hospital</option>
          </select>
          
          <select class="search-specialization" name="" id="">
              <option value="">Specialization</option>
          </select>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
}
</script>

<style scoped>

</style>
