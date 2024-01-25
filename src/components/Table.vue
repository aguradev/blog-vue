<template>
    <table class="table">
        <tr>
            <th v-for="(value, index) in props.thTitle" :key="index">{{ value }}</th>
        </tr>

        <tr v-for="(item, index) in mahasiswasSortingNames" :key="item.id">
            <td>{{ item.nim }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.jurusan }}</td>
            <td>{{ item.semester }}</td>
            <td>{{ item.ipk }}</td>
        </tr>
    </table>
</template>

<script setup>
import { computed } from "vue"
const props = defineProps({
    thTitle: Array,
    tdBody: Object
})

const mahasiswasSortingNames = computed(() => {
    return props.tdBody.sort((a, b) => {
        const nameA = a.nim.toLowerCase();
        const nameB = b.nim.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    })
})

</script>

<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
}

.table tr th,
.table tr td {
    border: 1px solid #fff;
    height: 30px;
    text-align: center;
}
</style>