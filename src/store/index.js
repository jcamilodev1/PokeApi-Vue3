import { createStore } from 'vuex'

const axios = require('axios');


export default createStore({
  state: {
    pokemon: [],
    pokemonFav: []
  },
  mutations: {
    setPokemon(state, payload){
      state.pokemon = payload
    },
    setPokemonFav(state, payload){
      state.pokemonFav = payload
    }
  },
  actions: {
    async getPokemon({ commit }){
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const data =  res.data.results
        commit( "setPokemon", data)

        

      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
