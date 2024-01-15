<template>
    <section class="ref-lesson">
        <h1><code>Ref</code> Lifecycle</h1>
        <p>merupakan sebuah atribute yang dapat menangkap sebuah property tag html dan juga dapat digunakan sebagai data
            reactive yang datanya dapat berubah secara realtime. untuk ref hanya dapat menampung sebuah data primitif
            seperti <code>Interger</code> dan <code>string</code>. berikut adalah contoh implementasi ref</p>
        <div class="random-number-section">
            <p>Random number : {{ randomNumber }}</p>
            <div>
                <button type="button" @click="getRandomNumber">Generate random number</button>
            </div>
        </div>
    </section>

    <section class="reactive-lesson">
        <h1><code>Reactive</code> Lifecycle</h1>
        <p>Merupakan property yang sama seperti ref namun hanya dapat menampung data tipe <code>object</code> dan berikut
            adalah case dari reactive sebagai perbedaan dari ref</p>
        <div class="contact-number-section">
            <div>
                <p>Example <code>Ref case</code></p>
                <p>Hello, my name is {{ contactRef.name }} and this is my phone {{ contactRef.phoneNumber }}</p>
            </div>
            <div>
                <p>Example <code>Reactive case</code></p>
                <p>Hello, my name is {{ contactReactive.name }} and this is my phone {{ contactReactive.phoneNumber }}</p>
            </div>
        </div>
    </section>

    <section class="computed-lesson-section">
        <h1><code>Computed</code> Lifecycle</h1>
        <p>Computed merupakan sebuah properti dari vue yang berfungsi untuk menyimpan sebuah value ke dalam function pada
            cached, jadi ketika sebuah <code>value</code> tidak mengalami perubahan, maka value tidak akan berubah
            terkecuali terjadi perubahan reaktif.</p>
        <p>Contoh case computed</p>
        <p style="margin-bottom: 1rem;">Peoples :</p>
        <input type="text" v-model="searchPeople" style="margin-bottom: 1rem;" placeholder="Search people">
        <ul>
            <div v-if="resultSearchPeople.length > 0">
                <li v-for="(people, index) in resultSearchPeople" :key="index">{{ people }}</li>
            </div>
            <div v-else>
                <li>People not found</li>
            </div>
        </ul>
    </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue"
// ref feature
// ? merupakan sebuah atribute yang dapat menangkap sebuah property tag html dan juga dapat digunakan sebagai data reactive yang datanya dapat berubah secara realtime

// ? deklarasi nilai default pada ref
const randomNumber = ref(Math.random())

// ? setelah event click dijalankan maka ubah value dari data ref
const getRandomNumber = () => {
    randomNumber.value = Math.random() * 10000000
}

//* reactive feature
// ? perbedaan dengan ref, reactive hanya dapat menampung tipe data object

const contactRef = ref({ name: "Budi", phoneNumber: "012374716261" })
const contactReactive = reactive({ name: "Agung", phoneNumber: "1231231231231231" })

// ? perbedaan reactive dengan ref dalam pemanggilan, ref diharuskan memanggil object value terlebih dahulu ketimbang reactive yang bisa langsung digunakan untuk memanggil object

// ? Reassignment pada ref dan reactive
contactRef.value = { name: "Agus", phoneNumber: "656464646864" }
contactReactive.name = "Budi"

// ? computed
const peoples = ref([
    "John Doe",
    "Jane Doe",
    "Bob Smith",
    "Alice Johnson",
    "David Brown",
    "Emily Davis",
    "Michael Wilson",
    "Olivia Miller",
    "Chris Taylor",
    "Sophia Martinez"
])

const searchPeople = ref("")
const resultSearchPeople = computed(() => {
    return peoples.value.filter((value) => value.toLowerCase().includes(searchPeople.value.toLowerCase()))
})
</script>

<style scoped>
.random-number-section,
.contact-number-section {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: .8rem;
}

ul {
    list-style: none;
}

ul li {
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1.2rem;
}

input {
    padding: 6px 16px;
    font-size: 1rem;
    outline: none;
}
</style>