<template>
  <button @click="all()" :class="statusAll ? '' : 'disabled' " ><img src="../assets/img/all.svg">All</button>
  <button @click="fav()" :class="statusFav ? '' : 'disabled' "><img src="../assets/img/fav.svg">Favorites</button>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    props: {
  },
  setup(){
    const store = useStore()
    const statusAll = ref(true)
    const statusFav = ref(false)

    const fav = () => {
      statusAll.value = false
      statusFav.value = true
      store.dispatch('showPokemon', true)
    }
    const all = () => {
      statusAll.value = true
      statusFav.value = false
      store.dispatch('showPokemon', false)
    }
    const disable = computed(() => {
      status.value
    })
    return {
      fav, all, statusAll, statusFav
    }
  }
}
</script>

<style lang="scss">

  button{
    width: 50%;
    max-width: 240px;
    color: white;    
    background-color: var(--colorBtn);
    padding: 10px 20px;
    border-radius: 15rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-family: var(--font);
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 140px;
    img{
      width: 15px;
      margin-right: 10px;
    }
    &:hover{
      background-color: var(--colorBtnHover);
    }
  }
  button.disabled{
    background-color: #BFBFBF;
  }
</style>