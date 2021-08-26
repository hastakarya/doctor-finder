import axios from 'axios'
const BASE_URL = "https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc/"

const state = {
    doctors: {},
    filteredDoctors: [],
}

const getters = {
    doctors: state => state.doctors,
    doctorsList: state => state.filteredDoctors,
}

const actions = {
    fetchDoctors({commit}, query) {
        return new Promise((resolve, reject) => {
            axios.get(BASE_URL, {
                params: query
            }).then(response => {
                commit('setDoctors', response)
                commit('setFilteredDoctors', response.data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    async filterDoctors( {commit}, query) {
        commit('filterDoctors', query)
    }
}

const mutations = {
    setDoctors: (state, data) => {
        state.doctors = data.data
    },
    setFilteredDoctors: (state, data) => {
        state.filteredDoctors = data.data
    },

    filterDoctors: (state, query) => {
        const doctorsList = state.doctors.data

        // Query search using regular expression
        let search = new RegExp(query.search , 'i');
        let data = []
        // Filter data based on query params
        doctorsList.filter(function(obj) {
            if (query.search.length > 0) {
                if (search.test(obj.name)) {
                    // Validate if the data already exists, so that there is no duplicate data
                    let isExist = data.find(o => o.doctor_id === obj.doctor_id)
                    if (isExist === undefined) {
                        data.push(obj)
                    }
                }
            }
            // Filter by hospitals
            for (let i = 0; i < query.hospital.length; i++) {
                if (search.test(obj.name) && obj.hospital[0].name === query.hospital[i]) {
                    // Validate if the data already exists, so that there is no duplicate data
                    let isExist = data.find(o => o.doctor_id === obj.doctor_id)
                    if (isExist === undefined) {
                        data.push(obj)
                    }
                }
            }
            // Filter by specializations
            for (let j = 0; j < query.specialization.length; j++) {
                if (search.test(obj.name) && obj.specialization.name === query.specialization[j]) {
                    // Validate if the data already exists, so that there is no duplicate data
                    let isExist = data.find(o => o.doctor_id === obj.doctor_id)
                    if (isExist === undefined) {
                        data.push(obj)
                    }
                }
            }
            // Return all data if none of the filter is active
            if (query.search.length == 0 && query.hospital.length == 0 && query.specialization.length == 0) {
                data.push(obj)
            }
        });
        state.filteredDoctors = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}