<template>
  <div>
    <Casa />
  </div>
</template>

<script>
import Casa from "../components/Casa.vue";
export default {
  name: "Formulario",
  data() {
    return {
      inital: String
    };
  },
  components: {
    Casa
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
