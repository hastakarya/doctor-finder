import axios from 'axios'
const BASE_URL = "https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc/"

const state = {
    hospitals: {},
    specialization: {},
    doctors: {}
}

const getters = {
    hospitals: state => state.hospitals,
    specialization: state => state.specialization,
    doctors: state => state.doctors,
}

const actions = {
    fetchDoctors({commit}, query) {
        return new Promise((resolve, reject) => {
            axios.get(BASE_URL, {
                params: query
            }).then(response => {
                commit('setDoctors', response)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
}

const mutations = {
    setHospitals: (state, data) => {
        state.hospitals = data.data
    },
    setSpecialization: (state, data) => {
        state.specialization = data.data
    },
    setDoctors: (state, data) => {
        state.doctors = data.data
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}