
import { createStore } from 'vuex'

const axios = require('axios');


export default createStore({
  state: {
    pokemons: [],
    pokemonFilter: [],
    pokemonsFav: [],
    prev: '',
    next: '',
    loader: true,
    error: false,
    show: false,
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
    setNext(state , payload){
      state.next = payload
    },
    setPrev(state , payload){
      state.prev = payload
    },
    setLoader( state,payload){
      state.loader =  payload
    },
    setError( state, payload){
      state.error =  payload
    },
    setPokemon( state, payload){
      state.pokemon = {...payload}
    },
    setShow( state, payload){
      state.show = payload
    },
    pokemonFilter(state, payload){
      state.pokemonFilter = payload
    }
  },
  actions: {
    async getPokemons({ commit, state },name){
      try {
        const res = await axios.get(name)
        const data =  res.data.results
        const next =  res.data.next
        const prev =  res.data.previous
        data.forEach(e => {
          e.favorite = false
        });
        commit( "setPokemons", data)
        commit('pokemonFilter', state.pokemons)
        commit( "setLoader", false )
        commit( "setPrev", prev )
        commit( "setNext", next )


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
        const pokemon = {
          name,
          img: data.sprites.front_default,
          weight: data.weight,
          height: data.height,
          types: data.types
        }
        commit( "setPokemon", pokemon)
      } catch (error) {
        console.log(error)
      }
    },
    pokemonFav({commit, state}, name ){
      const favorite =  state.pokemons.filter( fav => fav.favorite)
      commit( "setPokemonsFav", favorite)
    },
    showPokemon({commit, state}, condition){
      commit( "setShow", condition)
    },
    filterPokemon ({commit, state},texto){
      const textInput =  texto.toLowerCase()
      const filter = state.pokemons.filter( pokemon => {
        const textApi = pokemon.name.toLowerCase()
        if(textApi.includes(textInput)){
          return pokemon
        }

      })
      commit("pokemonFilter", filter)
    }
  },
  modules: {
  }
})
