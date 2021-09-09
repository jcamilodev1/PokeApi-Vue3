<template>
  <div class="home">
    <picture class="home__logo">
      <img src="../assets/img/pokemon.svg" alt="Pokemon" title="Pokemon">
    </picture>
    <h1>Welcome to Pokédex</h1>
    <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    <btn url="/seacher"></btn>
  </div>
</template>

<script>
import Btn from '../components/Btn.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Btn
}
}
</script>
<style lang="scss">
  .home{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: var(--font);
    h1{
      font-size: 2.6rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    p{
      font-size: 1.8rem;
      margin-bottom: 50px;
    }
  }

</style>
