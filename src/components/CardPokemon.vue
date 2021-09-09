<template>
  <section class="popUp" >
    <section class="popUp__container">
      <article class="popUp__container--img">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="closePopUp"
          @click="$emit('show')"
        >
          <path
            d="M13 0C5.81855 0 0 5.81855 0 13C0 20.1815 5.81855 26 13 26C20.1815 26 26 20.1815 26 13C26 5.81855 20.1815 0 13 0ZM19.3742 16.4125C19.6206 16.6589 19.6206 17.0573 19.3742 17.3036L17.2984 19.3742C17.052 19.6206 16.6536 19.6206 16.4073 19.3742L13 15.9355L9.5875 19.3742C9.34113 19.6206 8.94274 19.6206 8.69637 19.3742L6.62581 17.2984C6.37944 17.052 6.37944 16.6536 6.62581 16.4073L10.0645 13L6.62581 9.5875C6.37944 9.34113 6.37944 8.94274 6.62581 8.69637L8.70161 6.62056C8.94798 6.37419 9.34637 6.37419 9.59274 6.62056L13 10.0645L16.4125 6.62581C16.6589 6.37944 17.0573 6.37944 17.3036 6.62581L19.3794 8.70161C19.6258 8.94798 19.6258 9.34637 19.3794 9.59274L15.9355 13L19.3742 16.4125Z"
            fill="white"
          />
        </svg>
        <img src="../assets/img/bg-pop.jpg" class="popUp__container--img-bg" />
        <img :src="pokemonData.img" class="popUp__container--img-poke" />
      </article>
      <article class="popUp__container--txt">
        <p>
          Name: <span>{{ pokemonData.name }}</span>
        </p>
        <p>
          Weight: <span>{{ pokemonData.weight }}</span>
        </p>
        <p>
          Height: <span>{{ pokemonData.height }}</span>
        </p>
        <p>
          Types:
          <span v-for="(type, key) in pokemonData.types" :key="key"
            >{{ type.type.name }},
          </span>
        </p>
        <article class="popUp__container--txt--btn">
        <copy></copy>
      </article>
      </article>

    </section>
  </section>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
import Copy from './Copy.vue';

export default {
  components: { Copy },
  setup(props) {
    const store = useStore();
    const show = ref(false);
    const pokemonData = computed(() => {
      return store.state.pokemon;
    });
    const closePopUp = () => {
      show.value = !show.value;
    };
    return { pokemonData, show, closePopUp };
  },
};
</script>

<style lang="scss">
.popUp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #5e5e5e8f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  &__container {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    max-width: 600px;
    max-height: 500px;
    width: 80%;
    height: 70%;
    background-color: white;
    border-radius: 10px;
    box-shadow: var(--shadow);
    overflow: hidden;
    &--img {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      #closePopUp {
        position: absolute;
        left: 95%;
        top: 5%;
        transform: translate(-95%, 0);
        z-index: +1;
      }
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &-poke {
        width: 200px;
        position: relative;
        z-index: +1;
      }
    }
    &--txt {
      padding: 20px;
      text-align: start;
      p {
        font-family: var(--font);
        font-size: 1.8rem;
        padding: 10px 0;
        border-bottom: 1px solid #e8e8e8;
        font-weight: 700;
        color: var(--colorTile);
        span {
          font-weight: 400;
        }
      }
      &--btn{
        display: flex;
        margin-top: 30px;
      }
    }
  }
}

</style>
