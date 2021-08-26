<template>
    <div>
        <div class="grid">
            <div class="card" v-for="list in doctorsList" :key="list.doctor_id">
                <div class="card-img">
                    <img :src="list.photo.url" :alt="list.slug">
                </div>
                <div class="card-body">
                    <div class="card-info">
                        <p class="card-dr-name">{{ list.name }}</p>
                        <p class="card-dr-spec"> {{ `${list.hospital[0].name} - ${list.specialization.name}`  }} </p>
                        <div class="card-about">
                            <p v-html="list.about_preview"></p>
                        </div>
                    </div>
                    <div class="card-info-price">
                        <p>{{ list.price.formatted }}</p>
                    </div>
                </div>
            </div>
        </div>
        <ProgressBar v-if="doctorsList.length == 0" class="progress-bar" color="#02005f"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressBar from './util/Loading.vue'
export default {
    components: {
        ProgressBar
    },
    computed: {
        ...mapGetters(["doctorsList"])
    }
}
</script>