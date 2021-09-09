<template>
  <section class="container">
    <!-- <loader></loader> -->

    <article class="container__seacher">
      <search></search>
      <article class="container__seacher-txt">
        <h2>Uh-oh!</h2>
        <p>You look lost on your journey!</p>
        <btn url="/" text="Go back home"></btn>
      </article>
      <card></card>
    </article>
  </section>
</template>

<script>
import Btn from '../components/Btn.vue';
import Card from '../components/Card.vue';
import Loader from "../components/Loader.vue";
import Search from "../components/Search.vue";
export default {
  components: { Loader, Search, Btn,Card},
  name: "Seacher",
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