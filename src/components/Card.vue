<template>
  <article class="card">
    <h2>{{ pokemon.name }}</h2>
    <img src="../assets/img/Stargrey.svg"/>
  </article>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>

<style lang="scss">
  .card{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow: var(--shadow);
    border-radius: 5px;    
    margin: 100px auto;
    h2{
      font-family: var(--font);
      font-size: 2.2rem;
      color: var(--colorTitle);
    }
  }
</style>