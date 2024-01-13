<template>
    <div class="home">
        <h1 ref="p">Hello {{ title }}</h1>
        <button @click="clickP">Get Started</button>
    </div>
</template>

<script>
import { ref } from "vue"
export default {
    name: "Home views",
    setup() {
        const p = ref(null)

        const title = "Agura.net"
        const clickP = function () {
            console.log(p)
        }

        return { p, title, clickP }
    }
}
</script>