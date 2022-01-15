<template>
  <section class="card__container" v-if="!show">
    <card
      :pokemon="pokemon"
      v-for="pokemon in pokemons"
      :key="pokemon.name"
    ></card>
    <article>
      <button v-if="showPrev" @click="prev()">Previous</button>
      <button @click="next()" text="Next">Next</button>
    </article>
    <ScrollTop/>
  </section>
  <section class="card__container" v-if="show">
    <card
      :pokemon="pokemon"
      v-for="pokemon in pokemonsFav"
      :key="pokemon.name"
    ></card>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./Card.vue";
import Btn from "./Btn.vue";

export default {
  components: { Card, Btn },
  setup() {
    const store = useStore();
    const pokemons = computed(() => {
      return store.state.pokemonFilter;
    });
    const pokemonsFav = computed(() => {
      return store.state.pokemonsFav;
    });
    const show = computed(() => {
      return store.state.show;
    });
    const showPrev = computed(() => {
      return store.state.prev;
    });
    const next = () => {
      const url = store.state.next;
      store.dispatch("getPokemons", url);
    };
    const prev = () => {
      const url = store.state.prev;
      store.dispatch("getPokemons", url);
    };
    onMounted(() => {
      const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
      store.dispatch("getPokemons", url);
    });

    return { pokemons, show, pokemonsFav, next, showPrev, prev };
  },
};
</script>

<style lang ="scss" scoped>
.p-scrolltop{
  display:flex;
  max-width: 35px;
  max-height: 35px;
  min-width: 35px;
  min-height: 35px;
  border-radius: 4px;
  background-color: #F22539;;
  @media(max-width: 700px){
    bottom: 15%;
  }
  &:hover {
	  background-color: #F22539;;
  }
}
article{
  display: flex;
  width: 80%;
  margin: 0 auto;
  max-height: 40px;
  button {
    display: inline-block;
    min-width: 130px;
    margin-right: 15px;
  }
}
.card__container {
  min-height: 90vh;
  margin-top: 50px;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 100px;
  }
}
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: #F22539;;

    &:hover {
		background-color: #F22539;;
	}

    .p-scrolltop-icon {
        font-size: 1rem;
        color: white;
    }
}
</style>