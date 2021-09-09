<template>
  <section class="container">

    <!-- <loader></loader> -->
  <search></search>

  </section>

</template>

<script>
import Loader from '../components/Loader.vue'
import Search from '../components/Search.vue'
export default {
  components: { Loader, Search },
  name: "Seacher"
}
</script>

<style lang="scss">
  .container{
    padding: 20px;
  }

</style>