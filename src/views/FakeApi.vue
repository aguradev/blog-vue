<template>
    <div>
        <h2 style="margin-bottom: 1rem;">Mahasiswa Data</h2>
        <p v-if="mahasiswasErrorMessages" style="text-align: center;">{{ mahasiswasErrorMessages }}</p>
        <div v-if="mahasiswas.length > 0">
            <TableVue :thTitle="ThTitle" :tdBody="mahasiswas" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMahasiswaLists } from "../http/mahasiswas-api"
import TableVue from "../components/Table.vue";

const ThTitle = ref(["Nim", "Name", "Jurusan", "Semester", "IPK"])
const mahasiswas = ref([])
const mahasiswasErrorMessages = ref("")

onMounted(async () => {
    const getMahasiswas = await getMahasiswaLists();

    if (typeof getMahasiswas == "string") {
        mahasiswasErrorMessages.value = await getMahasiswaLists()
    } else {
        mahasiswas.value = await getMahasiswaLists()
    }
})

</script>

<style scoped></style>