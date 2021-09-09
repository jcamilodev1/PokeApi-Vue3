<template>
  <section class="card__container">
    <card :pokemon="pokemon" v-for="pokemon in pokemons" :key="pokemon.name"></card>
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
    
    onMounted(() => {
      store.dispatch('getPokemons')

    })


  return{ pokemons }
  }

  }
</script>

<style lang ="scss">
  .card__container{
    margin-top: 50px;
  }
</style>