import { createStore } from "vuex";
import data from './modules/data'

export default new createStore({
    modules: {
        data
    }
})