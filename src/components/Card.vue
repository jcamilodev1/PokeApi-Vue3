<template>
  <article class="card" @click="toggleActive()">
    <h2>{{ pokemon.name }}</h2>
    <favorite :pokemon="pokemon"></favorite>
  </article >
  <pop-up  v-if="!active" :pokemon="pokemon"  @show="toggleActive()"></pop-up>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import PopUp from './PopUp.vue'
import { useStore } from 'vuex';
import Favorite from './Favorite.vue';
const axios = require('axios');

export default {
  components: { PopUp, Favorite },
  props: {
    pokemon: {
      type: Object,
      default: []
    }
  },
  setup(props) {
    const active = ref(true)

    const toggleActive = async () => {
      active.value = !active.value
      
    }
      return{active, toggleActive,}
  }

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
    margin: 20px auto;
    cursor: pointer;
    h2{
      font-family: var(--font);
      font-size: 2.2rem;
      color: var(--colorTitle);
    }
  }
  .isActive{
    z-index: -1;
    opacity: 0;
  }
</style>