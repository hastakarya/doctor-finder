<template>
    <div class="grid">
        <div class="card" v-for="i in 50" :key="i">
            <div class="card-img">
                <img src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/dr_Jasmine_Iskandar_Sp_OG_edc4118ef1.png" alt="">
            </div>
            <div class="card-body">
                <div class="card-info">
                    <p class="card-dr-name">Jasmine</p>
                    <p class="card-dr-spec">Mitra Keluarga Bintaro - Dokter Spesialis Kebidanan & Kandungan</p>
                    <div class="card-about">
                        <p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Jasmine Iskandar,Sp.OG adalah&nbsp;Dokter&nbsp;Spesialis Penyakit Kebidanan dan Kandungan&nbsp;yang&nbsp;telah&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Indonesia. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit kebidanan dan kandungan.&nbsp;</span></p>
                    </div>
                </div>
                <div class="card-info-price">
                    <p>Rp 10.000.000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>