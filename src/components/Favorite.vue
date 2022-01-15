<template>

  <img src="../assets/img/Stargrey.svg" @click="addFav()" v-if="!isActive"/>
  <img src="../assets/img/Staractive.svg" @click="addFav()" v-else />

</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
  props: ["pokemon"],
  setup(props){
    const store = useStore()

    const pokemon  = props.pokemon
    const isActive = computed(()=> {
      return props.pokemon.favorite
    })
    const addFav = () => {
      
      pokemon.favorite = !pokemon.favorite
      store.dispatch('pokemonFav',)
    }
    return{
      addFav, isActive
      
    }
  }
}
</script>

<style lang="scss" scoped>
  img{
    cursor: pointer;
  }
</style>