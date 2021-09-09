<template>

  <card :pokemon="pokemon" v-for="pokemon in pokemons" :key="pokemon.name"></card>

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
      return store.state.pokemon
    })
    onMounted(() => {
      store.dispatch('getPokemon')

    })


  return{ pokemons }
  }

  }
</script>

<style lang ="scss">

</style>