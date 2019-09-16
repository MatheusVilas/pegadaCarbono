<template>
  <div id="app">
    <Header />
    <router-view>
      <Home />
    </router-view>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Home,
    Header
  }
};
</script>


