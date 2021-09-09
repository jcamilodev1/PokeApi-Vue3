import { createStore } from 'vuex'

const axios = require('axios');


export default createStore({
  state: {
    pokemons: [],
    pokemonsFav: [],
    loader: true,
    error: false,
    pokemon: {
      name: "",
      img: "",
      weight: "",
      height : "",
      types: ""
    }
  },
  mutations: {
    setPokemons(state, payload){
      state.pokemons = payload
    },
    setPokemonsFav(state, payload){
      state.pokemonsFav = payload
    },
    setLoader( state,payload){
      state.loader =  payload
    },
    setError( state, payload){
      state.error =  payload
    },
    setPokemon( state, payload){
      state.pokemon.name = payload.name
      state.pokemon.img = payload.img
      state.pokemon.weight = payload.weight
      state.pokemon.height = payload.height
      state.pokemon.types = payload.types
    }
  },
  actions: {
    async getPokemons({ commit }){
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const data =  res.data.results
        commit( "setPokemons", data)
        commit( "setLoader", false )
        console.log(res)


      } catch (error) {
        commit( "setLoader", false )
        commit( "setError", true)
        console.log(error)
      }
    },
    async getPokemon({commit}, name){
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data =  await res.data
        console.log(data)
        const pokemon = {
          name,
          img: data.sprites.front_default,
          weight: data.weight,
          height: data.height,
          types: data.types
        }
        console.log(data.types)
        commit( "setPokemon", pokemon)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
