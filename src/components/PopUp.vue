<template>
    <card-pokemon  :pokemon="pokemon"  :active="active"></card-pokemon>
</template>

<script>

import { computed, onMounted, ref } from '@vue/runtime-core'
import CardPokemon from './CardPokemon.vue';
import { useStore } from 'vuex';
const axios = require('axios');

export default {
  components: { CardPokemon },
  props: ["pokemon", "active"],
  setup(props) {
    const store = useStore()
    const pokemonName =  props.pokemon.name
    store.dispatch('getPokemon', pokemonName)
  }
}
</script>

<style lang="scss">

</style>