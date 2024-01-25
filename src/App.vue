<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-logo">Ikiru.blog</div>
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in navItem" :key="index">
          <router-link :to="item.meta_router" class="nav-link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: this.$route,
      navItem: [
        {
          name: "Home",
          url: "/",
          meta_router: { name: "Home" }
        },
        {
          name: "About",
          url: "/about",
          meta_router: { name: "About" }
        },
        {
          name: "Lifecycle Vue",
          url: "/lifecycle-vue",
          meta_router: { name: "LearnVue" }
        },
        {
          name: "Fake API",
          url: "/fake-api",
          meta_router: { name: "FakeAPI" }
        }
      ]
    }
  },
}
</script>