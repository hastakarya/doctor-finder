<template>
  <div class="filter-body">
      <div class="title">
          <h1>Doctor Finder</h1>
      </div>
      <div class="filter-input">
          <input @input="search" class="search" v-model="search_input" type="text" placeholder="Search doctor name...">

          <div class="search-multiselect">
            <div class="search-multiselect-list">
              <span class="list-multiselect">Hospital {{ this.hospital.length > 0 ? this.hospital.length + ' Selected' : '' }}</span>
            </div>

            <a class="dd-multiselect" @click="dd('hospital')">
              <svg xmlns="http://www.w3.org/2000/svg" id="hospital-dd-ic-arrow" style="transition-duration: 200ms;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <div class="dd-menu-multiselect" id="hospital-dd-arrow">
              <div class="dd-list"
              v-for="(value, index) in list_hospital" 
              :key="index">
                <input type="checkbox" 
                @input="search"
                :value="value" 
                :name="trim(value)" 
                :id="trim(value)" 
                v-model="hospital">
                <label class="list-label" :for="trim(value)" >{{value}}</label>
              </div>
            </div>
          </div>

          <div class="search-multiselect">
            <div class="search-multiselect-list">
              <span class="list-multiselect">Specialization {{ this.specialization.length > 0 ? this.specialization.length + ' Selected' : '' }}</span>
            </div>

            <a class="dd-multiselect" @click="dd('specialization')">
              <svg xmlns="http://www.w3.org/2000/svg" id="specialization-dd-ic-arrow" style="transition-duration: 200ms;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <div class="dd-menu-multiselect" id="specialization-dd-arrow">
              <div class="dd-list"
              v-for="(value, index) in list_specialization" 
              :key="index">
                <input type="checkbox" 
                @input="search"
                :value="value" 
                :name="trim(value)" 
                :id="trim(value)" 
                v-model="specialization">
                <label class="list-label" :for="trim(value)" >{{value}}</label>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from '../helper/debounce'
import $ from 'jquery'

export default {
  name: 'Filter',
  data() {
    return {
      search_input: '',
      hospital: [],
      specialization: [],
      list_hospital: [],
      list_specialization: [],
    }
  },

  methods: {
    // Dropdown control
    dd(id) {
      if ($("#" + id + "-dd-arrow:visible").length == 0) {
        $("#" + id + "-dd-arrow").css("display", "inline-block")
        $("#" + id + "-dd-ic-arrow").css("transform", "rotate(180deg)")
      } else {
        $("#" + id + "-dd-arrow").css("display", "none")
        $("#" + id + "-dd-ic-arrow").css("transform", "rotate(0deg)")
      }
      
    },

    trim(value) {
      return value.replace('&','').toLowerCase().split(' ').join('')
    },

    // Find specialization to use in filter
    setListSpec() {
      let doctors = this.doctors.data
      for(let i=0; i < doctors.length; i++) {
        this.list_specialization.indexOf(doctors[i].specialization.name) == -1 && this.list_specialization.push(doctors[i].specialization.name)
      }
    },

    // Find hospital to use in filter
    setListHospital() {
      let doctors = this.doctors.data
      for(let i=0; i < doctors.length; i++) {
        for (let j=0; j < doctors[i].hospital.length; j++) {
          this.list_hospital.indexOf(doctors[i].hospital[j].name) == -1 && this.list_hospital.push(doctors[i].hospital[j].name)
        }
      }
    },

    // Filter method
    fetchData() {
      this.$store.dispatch('filterDoctors', {
          search: this.search_input,
          hospital: this.hospital,
          specialization: this.specialization
      })
    }
  },

  computed: {
    ...mapGetters(["doctors"])
  },

  created() {
    // Delay input filter by 500 milisecond
    this.search = debounce(() => {
        this.fetchData()
    }, 500);
  },

  watch: {
    // Run method after data in doctors is changes
    doctors: function() {
      this.setListSpec()
      this.setListHospital()
    }
  }
}
</script>

<style scoped>
  
</style>
