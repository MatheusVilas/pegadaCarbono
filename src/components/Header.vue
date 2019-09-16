<template>
  <header>
    <nav>
      <ul>
        <router-link to="/casa" tag="li">
          <md-button class="md-raised md-accent">Casa</md-button>
        </router-link>
        <router-link to="/transporte-individual" tag="li">
          <md-button class="md-raised md-accent">Transporte Individual</md-button>
        </router-link>
        <router-link to="/transporte-publico" tag="li">
          <md-button class="md-raised md-accent">Transporte Público</md-button>
        </router-link>
        <router-link to="/viagens-areas" tag="li">
          <md-button class="md-raised md-accent">Viagens Áreas</md-button>
        </router-link>
        <router-link to="/dieta" tag="li">
          <md-button class="md-raised md-accent">Dieta</md-button>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  li {
    list-style: none;
  }
}
</style>