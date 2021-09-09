import { createStore } from 'vuex'

const axios = require('axios');


export default createStore({
  state: {
    pokemon: [],
    pokemonFav: [],
    loader: true,
    error: false
  },
  mutations: {
    setPokemon(state, payload){
      state.pokemon = payload
    },
    setPokemonFav(state, payload){
      state.pokemonFav = payload
    },
    setLoader( state,payload){
      state.loader =  payload
    },
    setError( state, payload){
      state.error =  payload
    }
  },
  actions: {
    async getPokemon({ commit }){
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
        const data =  res.data.results
        commit( "setPokemon", data)
        commit( "setLoader", false )
        console.log(res)


      } catch (error) {
        commit( "setLoader", false )
        commit( "setError", true)
        console.log(error)
      }
    }
  },
  modules: {
  }
})
