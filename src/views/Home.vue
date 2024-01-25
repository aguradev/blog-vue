<template>
    <div>
        <section class="home">
            <h1>Hello, {{ title }}</h1>
            <button @click="clickH1">Get Started</button>
            <code ref="precode"></code>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue"

const title = ref("tell your name")
const precode = ref(null)

const clickH1 = function () {
    const setTitle = prompt("Tell your name")

    if (setTitle != undefined && setTitle.length > 0) {
        title.value = setTitle
    }
}
</script>