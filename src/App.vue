<template>
  <div>
    <NavBar v-if="!$route.meta.hideNavbar" />
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Pages/NavBar.vue";

export default {
  name: "AppVue",
  components: { NavBar },
};
</script>

<style scoped></style>
