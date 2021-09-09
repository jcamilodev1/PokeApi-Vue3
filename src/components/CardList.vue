<template>
  <section class="card__container" v-if="!show" >
    <card :pokemon="pokemon"  v-for="pokemon in pokemons" :key="pokemon.name"></card>
  </section>
  <section class="card__container" v-if="show" >
    <card :pokemon="pokemon"  v-for="pokemon in pokemonsFav" :key="pokemon.name"></card>
  </section>
</template>

<script>

  import { computed, onMounted } from 'vue';
  import {useStore} from 'vuex';
  import Card from './Card.vue';
  export default {
  components: { Card },
  setup(){
    const store = useStore()
    const pokemons =  computed( () => {
      return store.state.pokemons
    })
    const pokemonsFav =  computed( () => {
      return store.state.pokemonsFav
    })
    const show =  computed( () => {
      return store.state.show
    })
    onMounted(() => {
      store.dispatch('getPokemons')

    })


  return{ pokemons,show, pokemonsFav }
  }

  }
</script>

<style lang ="scss">
  .card__container{
    min-height: 90vh;
    margin-top: 50px;
  }
</style>