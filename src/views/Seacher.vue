<template>
  <section class="container">
    <loader v-if="statusChange"></loader>
    <article class="container__seacher">
      <search></search>
      <article class="container__seacher-txt">
        <h2>Uh-oh!</h2>
        <p>You look lost on your journey!</p>
        <btn url="/" text="Go back home"></btn>
      </article>
      <card-list></card-list>
    </article>
  </section>
</template>

<script>
  import Btn from '../components/Btn.vue';
  import CardList from '../components/CardList.vue';
  import Loader from "../components/Loader.vue";
  import Search from "../components/Search.vue";
  import { computed, ref } from 'vue';
  import {useStore} from 'vuex';
  export default {
    components: { Loader, Search, Btn, CardList},
    name: "Seacher",
    setup(){
      const store = useStore()
      const status = ref(true)
      const statusChange =  computed( () => {
          return store.state.loader
      })
      status.value = statusChange
      console.log(statusChange)

      return{statusChange}

    }

  };
</script>

<style lang="scss">
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  &__seacher {
    &-txt {
      h2 {
        font-family: var(--font);
        font-size: 3.6rem;
        font-weight: 700;
        margin: 30px 0;
        color: var(--colorTitle);

      }
      p {
        font-family: var(--font);
        font-size: 1.8rem;
        margin-bottom: 50px;
        color: var(--colorText);
      }
    }
  }
}
</style>