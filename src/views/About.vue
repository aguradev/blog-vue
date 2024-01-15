<template>
    <div>
        <div>
            <h1>Do you know me ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit laudantium autem nihil repellendus,
                dolore,
                ipsam eaque velit doloremque a odio praesentium delectus sit vitae, illo cumque animi ea natus?</p>
            <button @click="showMoreAboutMe" ref="buttonAboutMore">More Description</button>
            <div v-if="contentAboutMe">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum aliquid libero officiis commodi
                    voluptatum
                    sapiente quam atque ex tempore nisi quaerat deleniti quidem iusto qui, magni odio distinctio architecto.
                    Architecto odit eum labore necessitatibus ut exercitationem! Modi sapiente amet tempore est animi harum
                    illum
                    distinctio? Earum praesentium provident porro, est numquam a repudiandae soluta aliquid voluptates
                    maxime.
                    Numquam, quasi.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam explicabo asperiores quae
                    voluptatem
                    mollitia laudantium necessitatibus quisquam. Mollitia nisi nihil accusamus repellat eos ut, unde
                    consectetur
                    aperiam voluptate ex.</p>
            </div>
            <button @click="showMoreAboutMe" ref="buttonCloseDescription" style="display: none;">Close Description</button>
        </div>

        <div>
            <h1>How Works ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat fugiat odit veniam doloribus,
                laudantium
                aliquid fugit! Dolorem pariatur vel tenetur nulla, error laborum quod provident, cupiditate sint quo
                delectus.
            </p>
        </div>

        <div>
            <h1>Contact me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam facilis ipsum doloremque beatae
                illum
                aperiam fugiat expedita, incidunt consequuntur? Cupiditate veniam, atque ullam quas commodi quisquam quo
                quis
                id.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contentAboutMe: false
        }
    },
    methods: {
        showMoreAboutMe() {
            this.contentAboutMe = !this.contentAboutMe
            const buttonAboutmore = this.$refs.buttonAboutMore
            const buttonCloseDescription = this.$refs.buttonCloseDescription
            buttonAboutmore.style.display = this.contentAboutMe ? "none" : "block"
            buttonCloseDescription.style.display = !this.contentAboutMe ? "none" : "block"
        }
    }
}
</script>

<style scoped>
div {
    margin-bottom: 4rem;
}

h1 {
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1.2rem;
    line-height: 36px;
}
</style>