<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-logo">Agura</div>
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in navItem" :key="index">
          <router-link :to="item.url" class="nav-link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <RouterView />
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
          url: "/"
        },
        {
          name: "About",
          url: "/about"
        },
        {
          name: "Project",
          url: "/project"
        }
      ]
    }
  },
}
</script>