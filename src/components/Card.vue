<template>
    <div class="grid">
        <div class="card" v-for="list in doctors.data" :key="list.doctor_id">
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
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["doctors"])
    }
}
</script>